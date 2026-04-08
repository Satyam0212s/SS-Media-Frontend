import { useState } from "react";
import { ChevronDown, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";

export function Navbar() {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const navigate = useNavigate();

  // ✅ ADMIN LOGIN (CONNECTED TO BACKEND)
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/auth/login", {
        email: adminEmail,
        password: adminPassword,
      });

      localStorage.setItem("adminToken", res.data.token);

      setIsAccountModalOpen(false);
      setAdminEmail("");
      setAdminPassword("");

      navigate("/admin");
    } catch (error) {
      alert("Invalid admin credentials ❌");
    }
  };

  const handleGuestLogin = () => {
    setIsAccountModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mx-auto mt-4 max-w-[95%] lg:max-w-6xl">
        <div className="rounded-2xl border border-white/20 bg-slate-900/40 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center">
              <span className="font-['Playfair_Display'] text-xl text-white md:text-2xl">
                S&S Media Agency
              </span>
            </Link>

            {/* Center Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-200 hover:text-white">
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-white/20 bg-slate-900/90 p-2">
                    <Link to="/services" className="block px-4 py-2 hover:bg-white/10">
                      All Services
                    </Link>
                  </div>
                )}
              </div>

              {/* About */}
              <Link to="/about" className="text-gray-200 hover:text-white">
                About
              </Link>

              {/* Contact */}
              <Link to="/contact" className="text-gray-200 hover:text-white">
                Contact
              </Link>
            </div>

            {/* Account Icon */}
            <button
              onClick={() => setIsAccountModalOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Account Modal */}
      {isAccountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-slate-900/90 p-8">
            <button
              onClick={() => setIsAccountModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="mb-8 text-3xl text-white font-['Playfair_Display']">
              Account Access
            </h2>

            {/* ADMIN LOGIN */}
            <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-xl text-white">Admin Login</h3>

              <form onSubmit={handleAdminLogin}>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="Email"
                  className="mb-3 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white"
                  required
                />

                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Password"
                  className="mb-4 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white"
                  required
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Sign In
                </button>
              </form>
            </div>

            {/* GUEST */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-xl text-white">Guest Access</h3>
              <button
                onClick={handleGuestLogin}
                className="w-full rounded-lg bg-white px-4 py-2 text-gray-900 hover:bg-gray-100"
              >
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
