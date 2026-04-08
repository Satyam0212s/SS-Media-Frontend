import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Calendar,
  MessageSquare,
  Users,
  Settings,
  BarChart3,
  Clock,
  Mail,
} from "lucide-react";
import api from "../../api/axios";

type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  selectedDate: string;
  selectedTime: string;
  status: string;
};

type Enquiry = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
};

type Stats = {
  totalBookings: number;
  confirmedBookings: number;
  pendingBookings: number;
  totalEnquiries: number;
  pendingEnquiries: number;
};

export function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "bookings" | "enquiries" | "users" | "settings"
  >("dashboard");

  const [stats, setStats] = useState<Stats | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔐 Fetch all admin data
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const [statsRes, bookingsRes, enquiriesRes] = await Promise.all([
          api.get("/api/admin/stats"),
          api.get("/api/admin/bookings"),
          api.get("/api/admin/enquiries"),
        ]);

        setStats(statsRes.data);
        setBookings(bookingsRes.data);
        setEnquiries(enquiriesRes.data);
      } catch (error) {
        console.error("Admin API error", error);
        alert("Unauthorized or session expired");
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  // 🔄 Update booking status
  const updateStatus = async (id: string, status: string) => {
    try {
      await api.patch(`/api/admin/bookings/${id}`, { status });
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status } : b))
      );
    } catch {
      alert("Failed to update booking status");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
      case "responded":
        return "bg-green-500/20 text-green-400";
      case "pending":
      case "new":
        return "bg-yellow-500/20 text-yellow-400";
      case "cancelled":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white">
        Loading admin dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="mb-2 font-['Playfair_Display'] text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">
            Welcome back! Here's what's happening.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2 rounded-xl border border-white/10 bg-slate-900/40 p-2">
          {[
            { id: "dashboard", label: "Dashboard", icon: BarChart3 },
            { id: "bookings", label: "Bookings", icon: Calendar },
            { id: "enquiries", label: "Enquiries", icon: MessageSquare },
            { id: "users", label: "Users", icon: Users },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* DASHBOARD */}
        {activeTab === "dashboard" && stats && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Bookings", value: stats.totalBookings, icon: Calendar },
              { label: "Confirmed Bookings", value: stats.confirmedBookings, icon: BarChart3 },
              { label: "Pending Enquiries", value: stats.pendingEnquiries, icon: MessageSquare },
              { label: "Total Enquiries", value: stats.totalEnquiries, icon: Users },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-slate-900/40 p-6"
                >
                  <Icon className="mb-4 h-6 w-6 text-blue-400" />
                  <h3 className="text-gray-400">{stat.label}</h3>
                  <p className="mt-2 text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* BOOKINGS */}
        {activeTab === "bookings" && (
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6">
            <h2 className="mb-6 text-white">All Bookings</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="text-left">Client</th>
                  <th className="text-left">Service</th>
                  <th className="text-left">Date</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-white/5">
                    <td className="py-4 text-white">{b.name}</td>
                    <td className="text-gray-300">{b.serviceType}</td>
                    <td className="text-gray-300">{b.selectedDate}</td>
                    <td className="text-gray-300">{b.selectedTime}</td>
                    <td>
                      <select
                        value={b.status}
                        onChange={(e) => updateStatus(b.id, e.target.value)}
                        className="rounded bg-slate-800 px-2 py-1 text-white"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ENQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="space-y-4">
            {enquiries.map((e) => (
              <div
                key={e.id}
                className="rounded-lg border border-white/10 bg-slate-900/40 p-6"
              >
                <div className="flex justify-between">
                  <h3 className="text-white">{e.name}</h3>
                  <span className={`rounded-full px-3 py-1 text-sm ${getStatusColor(e.status)}`}>
                    {e.status}
                  </span>
                </div>
                <p className="text-gray-400">{e.subject}</p>
                <div className="mt-2 flex gap-4 text-gray-500">
                  <span className="flex items-center gap-1">
                    <Mail className="h-4 w-4" /> {e.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {new Date(e.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* USERS */}
        {activeTab === "users" && (
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 text-gray-400">
            User management coming soon...
          </div>
        )}

        {/* SETTINGS */}
        {activeTab === "settings" && (
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 text-gray-400">
            Settings configuration coming soon...
          </div>
        )}
      </div>
    </div>
  );
}
