export default function AdminLogin() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, var(--brand) 0%, #1565c0 60%, #1e88e5 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: "2.5rem 2rem", width: "100%", maxWidth: 400, boxShadow: "0 8px 32px rgba(0,0,0,.18)" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--brand)" }}>
            Digital <span style={{ color: "#1e88e5" }}>ET</span>
          </div>
          <p style={{ color: "#666", fontSize: ".9rem", marginTop: ".4rem" }}>Admin Login</p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {/* Phone */}
          <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
            <label style={{ fontSize: ".85rem", fontWeight: 600, color: "#333" }}>Phone Number</label>
            <input
              type="tel"
              placeholder="09XXXXXXXX"
              style={{ padding: ".7rem 1rem", borderRadius: 8, border: "1.5px solid #d0d7e3", fontSize: ".95rem", outline: "none", transition: "border-color .2s" }}
              onFocus={e => (e.target.style.borderColor = "var(--brand)")}
              onBlur={e => (e.target.style.borderColor = "#d0d7e3")}
            />
          </div>

          {/* Password */}
          <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
            <label style={{ fontSize: ".85rem", fontWeight: 600, color: "#333" }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              style={{ padding: ".7rem 1rem", borderRadius: 8, border: "1.5px solid #d0d7e3", fontSize: ".95rem", outline: "none", transition: "border-color .2s" }}
              onFocus={e => (e.target.style.borderColor = "var(--brand)")}
              onBlur={e => (e.target.style.borderColor = "#d0d7e3")}
            />
          </div>

          <button
            type="submit"
            style={{ marginTop: ".4rem", background: "var(--brand)", color: "#fff", fontWeight: 600, fontSize: "1rem", padding: ".8rem", borderRadius: 8, border: "none", cursor: "pointer" }}
          >
            Login
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <a href="/" style={{ color: "var(--brand)", fontSize: ".85rem", textDecoration: "none" }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
