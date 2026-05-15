import { useNavigate } from "react-router-dom";
import { 
  Activity, 
  LayoutDashboard, 
  Clock, 
  ShieldCheck, 
  Lightbulb, 
  LineChart,
  ArrowRight,
  HeartPulse
} from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Activity size={24} color="#0ea5e9" />,
      title: "1. Risk Prediction",
      description: "Predict possible diseases and medical complications using AI models."
    },
    {
      icon: <LayoutDashboard size={24} color="#0ea5e9" />,
      title: "2. Patient Dashboard",
      description: "Centralized dashboard for patient reports, risk scores, and analytics."
    },
    {
      icon: <Clock size={24} color="#0ea5e9" />,
      title: "3. Real-Time Analysis",
      description: "Instant health assessment based on symptoms and medical data."
    },
    {
      icon: <ShieldCheck size={24} color="#0ea5e9" />,
      title: "4. Secure Medical Records",
      description: "Protected and encrypted healthcare information system."
    },
    {
      icon: <Lightbulb size={24} color="#0ea5e9" />,
      title: "5. AI Recommendations",
      description: "Smart suggestions for preventive care and treatment planning."
    },
    {
      icon: <LineChart size={24} color="#0ea5e9" />,
      title: "6. Data Visualization",
      description: "Interactive charts and reports for healthcare professionals."
    }
  ];

  return (
    <div style={{ fontFamily: "var(--sans)", color: "#0f172a", background: "#ffffff" }}>
      
      {/* Navigation */}
      <nav style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "24px 48px",
        borderBottom: "1px solid #f1f5f9"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: "600", fontSize: "20px" }}>
          <HeartPulse color="#0ea5e9" size={28} />
          <span>AI Triage</span>
        </div>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="#features" style={{ textDecoration: "none", color: "#64748b", fontWeight: "500" }}>Features</a>
          <a href="#about" style={{ textDecoration: "none", color: "#64748b", fontWeight: "500" }}>About</a>
          <button 
            onClick={() => navigate("/login")}
            style={{
              background: "#0f172a",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "24px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background 0.2s"
            }}
            onMouseOver={(e) => e.target.style.background = "#1e293b"}
            onMouseOut={(e) => e.target.style.background = "#0f172a"}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "64px", fontWeight: "700", letterSpacing: "-1.5px", lineHeight: "1.1", margin: "0 0 24px" }}>
          <span style={{ color: "#0ea5e9" }}>Predict</span> Health Risks Early
        </h1>
        <p style={{ fontSize: "22px", color: "#475569", lineHeight: "1.6", margin: "0 0 40px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          An AI-driven platform that analyzes patient data to identify potential health risks, support early diagnosis, and improve clinical decision-making.
        </p>
        <button 
          onClick={() => navigate("/login")}
          style={{
            background: "#0ea5e9",
            color: "white",
            border: "none",
            padding: "16px 32px",
            borderRadius: "32px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)",
            transition: "transform 0.2s, background 0.2s"
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#0284c7";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#0ea5e9";
            e.target.style.transform = "none";
          }}
        >
          Start Assessment <ArrowRight size={20} />
        </button>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "80px 24px", background: "#f8fafc", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "600", letterSpacing: "-0.5px", margin: "0 0 20px" }}>
            Your AI-Powered Healthcare Assistant
          </h2>
          <p style={{ fontSize: "20px", color: "#64748b", lineHeight: "1.6" }}>
            Monitor patient conditions, evaluate health risks, and generate intelligent insights through advanced machine learning and healthcare analytics.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: "100px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "600", textAlign: "center", margin: "0 0 60px" }}>
          Key Features
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "32px" 
        }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{
              background: "white",
              padding: "32px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "default"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
            }}>
              <div style={{
                background: "#f0f9ff",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px"
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 12px" }}>{feature.title}</h3>
              <p style={{ color: "#64748b", lineHeight: "1.6", margin: 0 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section style={{ padding: "100px 24px", background: "#0f172a", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto 60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "600", color: "white", margin: "0 0 20px" }}>
            Smart Healthcare Dashboard
          </h2>
          <p style={{ fontSize: "20px", color: "#94a3b8", lineHeight: "1.6" }}>
            Track patient health metrics, monitor critical alerts, and access AI-generated healthcare insights from one unified platform.
          </p>
        </div>
        
        {/* Mockup of dashboard */}
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#1e293b",
          borderRadius: "16px",
          padding: "8px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          border: "1px solid #334155",
          overflow: "hidden"
        }}>
          <div style={{ 
            height: "500px", 
            background: "#0f172a", 
            borderRadius: "12px", 
            display: "flex",
            position: "relative"
          }}>
            {/* Sidebar mock */}
            <div style={{ width: "250px", borderRight: "1px solid #1e293b", padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ height: "24px", background: "#334155", borderRadius: "4px", width: "80%" }}></div>
              <div style={{ height: "60px", background: "rgba(14, 165, 233, 0.1)", border: "1px solid rgba(14, 165, 233, 0.3)", borderRadius: "8px" }}></div>
              <div style={{ height: "16px", background: "#1e293b", borderRadius: "4px", width: "100%" }}></div>
              <div style={{ height: "16px", background: "#1e293b", borderRadius: "4px", width: "90%" }}></div>
            </div>
            {/* Main area mock */}
            <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
               <HeartPulse color="#0ea5e9" size={64} style={{ opacity: 0.5, marginBottom: "24px" }} />
               <div style={{ height: "32px", background: "#1e293b", borderRadius: "8px", width: "40%", marginBottom: "16px" }}></div>
               <div style={{ height: "16px", background: "#1e293b", borderRadius: "4px", width: "60%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "100px 24px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "600", margin: "0 0 24px" }}>
          About The System
        </h2>
        <p style={{ fontSize: "18px", color: "#64748b", lineHeight: "1.8" }}>
          This AI Healthcare Risk Assessment System uses machine learning algorithms to analyze medical information and identify potential health risks at an early stage. The platform assists healthcare professionals in making faster, smarter, and more accurate decisions.
        </p>
        
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginTop: "48px" }}>
          {["AI for Better Healthcare Decisions", "Predict. Prevent. Protect.", "Intelligent Healthcare Monitoring", "Next Generation Medical Risk Detection"].map((tag, i) => (
            <span key={i} style={{
              background: "#f1f5f9",
              color: "#334155",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#f8fafc", padding: "60px 24px", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "18px", color: "#0f172a" }}>
            <HeartPulse color="#0ea5e9" size={24} />
            <span>Healthcare AI Solutions</span>
          </div>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["Privacy Policy", "Terms & Conditions", "Contact Us"].map((link, i) => (
              <a key={i} href="#" style={{ color: "#64748b", textDecoration: "none", fontSize: "15px" }}>{link}</a>
            ))}
          </div>
          <div style={{ color: "#94a3b8", fontSize: "14px", marginTop: "24px" }}>
            &copy; 2026 AI Healthcare Risk Assessment System. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
