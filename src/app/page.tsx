import Link from "next/link";
import { Store, Scan, PlusCircle } from "lucide-react";

export default function WelcomePage() {
  return (
    <main className="welcome-container">
      <div className="welcome-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon-wrapper">
            <Store size={64} className="logo-icon" />
          </div>
          <h1 className="brand-name">BozorTop</h1>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <h2 className="hero-title">Find shops. Never lose them again.</h2>
          <p className="hero-subtitle">
            A digital vizitka for every stall, shop, and local business in the
            bazaar.
          </p>
        </div>

        {/* Action Buttons Section */}
        <div className="actions-section">
          <Link href="/scan" className="btn btn-primary">
            <Scan size={24} className="btn-icon" />
            <span>Scan Shop QR</span>
          </Link>

          <Link href="/create" className="btn btn-secondary">
            <PlusCircle size={24} className="btn-icon" />
            <span>Create Your Shop</span>
          </Link>
        </div>

        {/* Footer Section */}
        <footer className="welcome-footer">
          <p>BozorTop © 2024 • Street-level practical tools.</p>
        </footer>
      </div>
    </main>
  );
}
