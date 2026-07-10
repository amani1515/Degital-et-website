export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav style={{ background: "var(--brand)", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700, letterSpacing: ".5px" }}>
          Digital <span style={{ color: "#90b8f8" }}>ET</span>
        </div>
        <a
          href="/admin"
          style={{ color: "#fff", textDecoration: "none", fontSize: ".9rem", background: "rgba(255,255,255,.15)", padding: ".45rem 1.1rem", borderRadius: "6px", transition: "background .2s" }}
        >
          Admin Login
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        padding: "5rem 1.5rem",
        background: "linear-gradient(135deg, var(--brand) 0%, #1565c0 60%, #1e88e5 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "rgba(255,255,255,.05)", top: -150, right: -150 }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,.04)", bottom: -100, left: -100 }} />

        <div style={{ textAlign: "center", color: "#fff", maxWidth: 680, position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", color: "#fff", fontSize: ".8rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", padding: ".35rem 1rem", borderRadius: "50px", marginBottom: "1.5rem" }}>
            🚌 Bus Ticketing System
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.2rem" }}>
            Fast & Simple<br /><span style={{ color: "#90caf9" }}>Bus Tickets </span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.82)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            A modern ticketing platform for town bus agents.<br />
            Sell tickets instantly, track routes, and manage agents — all in one place.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/admin" style={{ background: "#fff", color: "var(--brand)", fontWeight: 600, fontSize: ".95rem", padding: ".75rem 2rem", borderRadius: "8px", textDecoration: "none", boxShadow: "0 4px 14px rgba(0,0,0,.2)" }}>
              Go to Admin Panel
            </a>
            <a href="#" style={{ background: "transparent", color: "#fff", fontWeight: 600, fontSize: ".95rem", padding: ".75rem 2rem", borderRadius: "8px", textDecoration: "none", border: "2px solid rgba(255,255,255,.5)" }}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div style={{ background: "#fff", padding: "3rem 2rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", borderBottom: "1px solid #e8edf5" }}>
        {[
          {
            label: "Multi-Route Management",
            icon: <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
          },
          {
            label: "Multi-Agent Support",
            icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
          },
          {
            label: "Instant Ticket Generation",
            icon: <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />,
          },
          {
            label: "Sales Reports & Analytics",
            icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
          },
        ].map(({ label, icon }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: ".75rem", color: "#444", fontSize: ".95rem" }}>
            <div style={{ width: 40, height: 40, background: "var(--brand-light)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="var(--brand)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                {icon}
              </svg>
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={{ background: "var(--brand-dark)", color: "rgba(255,255,255,.7)", textAlign: "center", padding: "1.5rem 1rem", fontSize: ".85rem", lineHeight: 1.8 }}>
        <div>Developed by <strong style={{ color: "#fff" }}>Sevastopol Technologies</strong> &nbsp;|&nbsp; <a href="tel:0930608000" style={{ color: "#90b8f8", textDecoration: "none" }}>0930 608 000</a></div>
        <div>&copy; {new Date().getFullYear()} Digital ET. All rights reserved.</div>
      </footer>
    </>
  );
}
