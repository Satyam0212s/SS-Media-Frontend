import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BookYourSessionPage } from "./pages/BookYourSessionPage";
import { AdminPage } from "./pages/AdminPage";

import ProtectedRoute from "../routes/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0F172A]">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-your-session" element={<BookYourSessionPage />} />

          {/* 🔐 PROTECTED ADMIN ROUTE */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
