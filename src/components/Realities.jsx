export default function Realities() {
  return (
    <section id="realities">
      <div className="section-header reveal">
        <div className="section-eyebrow">Chapter 03 — Alternate Realities</div>
        <h2 className="section-title">Projects as<br /><span className="glow">Parallel Worlds</span></h2>
      </div>
      <div className="realities-grid">
        <div className="reality-card reveal">
          <div className="reality-label">Reality 01 — Deep Learning</div>
          <div className="reality-portal-icon">◎</div>
          <div className="reality-title">Diagnostic Imaging<br />Analysis Pipeline</div>
          <div className="reality-tags">
            <span className="reality-tag">TensorFlow</span>
            <span className="reality-tag">Keras</span>
            <span className="reality-tag">Streamlit</span>
            <span className="reality-tag">CCT Architecture</span>
          </div>
          <div className="reality-desc">A deep learning pipeline for brain tumor detection from MRI scans using a custom Compact Convolutional Transformer. Trained on ~1,000 images sourced from Kaggle with augmentation and normalization.</div>
          <div className="reality-stat">85–89%</div>
          <div className="reality-stat-label">CLASSIFICATION ACCURACY</div>
        </div>
        <div className="reality-card reveal">
          <div className="reality-label">Reality 02 — Mobile Development</div>
          <div className="reality-portal-icon">◎</div>
          <div className="reality-title">Event Booking<br />Application</div>
          <div className="reality-tags">
            <span className="reality-tag">Flutter</span>
            <span className="reality-tag">Swagger API</span>
            <span className="reality-tag">Android</span>
            <span className="reality-tag">UI/UX</span>
          </div>
          <div className="reality-desc">A cross-platform mobile marketplace connecting vendors and customers. Vendor-facing event management, real-time availability, and end-to-end booking flows from discovery to confirmation.</div>
          <div className="reality-stat" style={{ fontSize: 20, marginTop: 28 }}>VENDOR + CUSTOMER</div>
          <div className="reality-stat-label">DUAL ROLE ARCHITECTURE</div>
        </div>
      </div>
    </section>
  )
}
