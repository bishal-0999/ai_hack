import { useNavigate } from "react-router-dom";
import { Plus, MoreVertical, NotebookText, HeartPulse, Settings } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const mockAssessments = [
    {
      id: 1,
      title: "Routine Checkup",
      date: "May 15, 2026",
      sources: "1 source",
      icon: "🩺"
    },
    {
      id: 2,
      title: "Headache Evaluation",
      date: "Apr 28, 2026",
      sources: "2 sources",
      icon: "🤕"
    },
    {
      id: 3,
      title: "Fever & Cough Analysis",
      date: "Mar 10, 2026",
      sources: "1 source",
      icon: "🤒"
    }
  ];

  return (
    <div style={{ 
      minHeight: "100svh", 
      background: "#1e1e24", // Match NotebookLM dark background roughly
      color: "#f3f4f6", 
      fontFamily: "var(--sans)",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <header style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "16px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "20px", fontWeight: "600" }}>
          <HeartPulse size={28} color="#0ea5e9" />
          <span>AI Triage</span>
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <button style={{
            background: "transparent",
            color: "#e2e8f0",
            border: "1px solid #334155",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onMouseOver={(e) => e.target.style.background = "rgba(255,255,255,0.05)"}
          onMouseOut={(e) => e.target.style.background = "transparent"}
          >
            <Settings size={16} />
            Settings
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "48px 32px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        
        <h2 style={{ fontSize: "24px", fontWeight: "400", marginBottom: "24px", color: "#e2e8f0" }}>
          Recent assessments
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "24px" 
        }}>
          
          {/* Create New Card */}
          <div 
            onClick={() => navigate("/dashboard")}
            style={{
              background: "#26272e",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "16px",
              padding: "24px",
              height: "220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.2s, background 0.2s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#2d2e36";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#26272e";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div style={{
              background: "#3b3d46",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Plus size={24} color="#e2e8f0" />
            </div>
            <span style={{ fontSize: "16px", color: "#e2e8f0", fontWeight: "400" }}>Create new assessment</span>
          </div>

          {/* Mock History Cards */}
          {mockAssessments.map((item) => (
            <div 
              key={item.id}
              style={{
                background: "#2d2f36",
                border: "1px solid rgba(255,255,255,0.02)",
                borderRadius: "16px",
                padding: "24px",
                height: "220px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s"
              }}
              onMouseOver={(e) => e.currentTarget.style.background = "#353840"}
              onMouseOut={(e) => e.currentTarget.style.background = "#2d2f36"}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "auto" }}>
                <div style={{ fontSize: "32px" }}>{item.icon}</div>
                <button style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer" }}>
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "400", margin: "0 0 8px", color: "#f8fafc" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
                  {item.date} • {item.sources}
                </p>
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}
