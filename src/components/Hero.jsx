export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-cave" />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <div className="hero-eyebrow">
          A JOURNEY THROUGH
          <br />
          INTERCONNECTED TIMELINES
        </div>

        <h1 className="hero-title">
          THE TIMELINES OF
          <br />
          <span>KAVYA SREE</span>
        </h1>

        <div className="hero-role">
          Computer Science Engineering Student
        </div>

        <div className="hero-skills">
          Machine Learning Engineer • Flutter Developer
          <br />
          Problem Solver • Data Analytics Enthusiast
          <br />
          Full Stack Learner • Java Developer
        </div>

        <div className="hero-description">
          Building intelligent applications through AI,
          <br />
          Mobile Development, and Real-World Solutions.
        </div>

        <div className="hero-quote">
  Building Intelligent Systems Across Timelines
</div>
        <div className="hero-buttons">
          <button
            className="hero-cta"
            onClick={() => {
              document
                .getElementById('origin')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span>⬡ ENTER THE TIMELINE</span>
          </button>

          <button
            className="hero-cta secondary"
            onClick={() => {
              document
                .getElementById('realities')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span>◈ VIEW PROJECTS</span>
          </button>
        </div>
      </div>

      <div className="cursor-reveal-hint">
        MOVE CURSOR TO REVEAL FUTURE SELF →
      </div>
    </section>
  )
}