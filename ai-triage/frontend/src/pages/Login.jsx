import { useNavigate } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100svh",
      background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
      fontFamily: "var(--sans)",
      color: "var(--text-h)"
    }}>
      <div style={{
        background: "white",
        padding: "48px",
        borderRadius: "16px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center"
      }}>
        <div style={{
          background: "rgba(14, 165, 233, 0.1)",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px"
        }}>
          <Lock size={32} color="#0ea5e9" />
        </div>
        
        <h1 style={{ fontSize: "28px", margin: "0 0 12px", color: "#0f172a", letterSpacing: "-0.5px" }}>
          Welcome Back
        </h1>
        <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.5", margin: "0 0 32px" }}>
          Sign in to access your healthcare analytics dashboard and patient assessment tools.
        </p>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            style={{
              padding: "14px 16px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.2s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#0ea5e9"}
            onBlur={(e) => e.target.style.borderColor = "#cbd5e1"}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required
            style={{
              padding: "14px 16px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.2s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#0ea5e9"}
            onBlur={(e) => e.target.style.borderColor = "#cbd5e1"}
          />
          
          <button 
            type="submit"
            style={{
              background: "#0ea5e9",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "8px",
              transition: "background 0.2s"
            }}
            onMouseOver={(e) => e.target.style.background = "#0284c7"}
            onMouseOut={(e) => e.target.style.background = "#0ea5e9"}
          >
            Sign In <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
