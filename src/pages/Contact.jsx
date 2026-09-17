function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* Header */}
        <div className="page-intro contact-intro">
          <span className="page-eyebrow">GET IN TOUCH</span>

          <h1>
            Let's build something
            <span> reliable.</span>
          </h1>

          <p>
            Interested in DevOps, automation, CI/CD, cloud technologies,
            or engineering workflow automation? Feel free to connect.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-layout">

          {/* Left Side */}
          <div className="contact-info">

            <div className="contact-card primary-contact">
              <div className="contact-icon">@</div>

              <div>
                <span className="contact-label">EMAIL</span>

                <a href="mailto:havaldarsamreenbanu@gmail.com">
                  havaldarsamreenbanu@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">&lt;/&gt;</div>

              <div>
                <span className="contact-label">FOCUS</span>

                <p>
                  DevOps Engineering<br />
                  Ansible Automation<br />
                  CI/CD & Cloud
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">⌘</div>

              <div>
                <span className="contact-label">ENGINEERING INTERESTS</span>

                <p>
                  Automation, containers, cloud technologies,
                  AI-assisted engineering and reliable delivery workflows.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="contact-terminal">

            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>samreen@devops:~$</span>
            </div>

            <div className="terminal-body">

              <p>
                <span className="terminal-prompt">$</span>{" "}
                whoami
              </p>

              <p className="terminal-output">
                DevOps / Ansible Automation Engineer
              </p>

              <p>
                <span className="terminal-prompt">$</span>{" "}
                focus --current
              </p>

              <p className="terminal-output">
                Automation • CI/CD • Linux • Docker • AWS
              </p>

              <p>
                <span className="terminal-prompt">$</span>{" "}
                domain --experience
              </p>

              <p className="terminal-output">
                ADMS • SCADA • DMS • OMS
              </p>

              <p>
                <span className="terminal-prompt">$</span>{" "}
                connect
              </p>

              <p className="terminal-output terminal-success">
                Ready for the next engineering challenge_
              </p>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="contact-cta">

          <div>
            <span className="page-eyebrow">OPEN TO CONNECTIONS</span>

            <h2>
              Automation starts with
              <span> a conversation.</span>
            </h2>
          </div>

          <a
            className="btn btn-primary"
            href="mailto:havaldarsamreenbanu@gmail.com"
          >
            Send an Email
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;