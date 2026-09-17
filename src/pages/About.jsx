function About() {
  return (
    <section className="about-page">

      <div className="about-container">

        {/* Page Heading */}
        <div className="about-heading">

          <p className="section-eyebrow">
            ABOUT ME
          </p>

          <h1>
            DevOps, Automation
            <span> & Engineering</span>
          </h1>

          <p className="about-intro">
            I am Samreenbanu M Havaldar, a DevOps and automation-focused
            Associate Developer with 2+ years of IT experience, working
            across automation, CI/CD, Linux environments, containers and
            cloud technologies.
          </p>

        </div>


        {/* Main Profile */}
        <div className="about-grid">

          {/* Left - Profile */}
          <div className="about-profile">

            <div className="about-card">

              <div className="card-label">
                PROFESSIONAL PROFILE
              </div>

              <h2>
                Automation with a
                <span> domain perspective.</span>
              </h2>

              <p>
                My professional experience combines DevOps automation
                with power-utility application environments. I work with
                Ansible-based automation and support Advanced Distribution
                Management System (ADMS) solutions involving SCADA,
                Distribution Management System (DMS) and Outage Management
                System (OMS).
              </p>

              <p>
                My work includes automation using Ansible playbooks,
                modules and YAML configurations, Linux/Unix environments,
                shell scripting, Git-based workflows, CI/CD tools,
                Docker and AWS cloud environments.
              </p>

              <p>
                I also work on application validation, customer-reported
                defect investigation, root-cause analysis and Agile
                delivery activities across Pre-FAT, FAT and SAT.
              </p>

            </div>

          </div>


          {/* Right - Highlights */}
          <div className="about-highlights">

            <div className="highlight-card">

              <span className="highlight-number">
                2+
              </span>

              <div>
                <strong>
                  Years of IT Experience
                </strong>

                <p>
                  Experience across application support,
                  automation and engineering workflows.
                </p>
              </div>

            </div>


            <div className="highlight-card">

              <span className="highlight-symbol">
                &lt;/&gt;
              </span>

              <div>
                <strong>
                  Automation
                </strong>

                <p>
                  Ansible, YAML, Linux, shell scripting
                  and deployment automation.
                </p>
              </div>

            </div>


            <div className="highlight-card">

              <span className="highlight-symbol">
                CI
              </span>

              <div>
                <strong>
                  CI/CD
                </strong>

                <p>
                  Git, Jenkins and GitHub Actions
                  across CI/CD workflows.
                </p>
              </div>

            </div>


            <div className="highlight-card">

              <span className="highlight-symbol">
                ⚡
              </span>

              <div>
                <strong>
                  ADMS / SCADA
                </strong>

                <p>
                  Power-utility application experience
                  across SCADA, DMS and OMS.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* Technical Focus */}
        <div className="about-focus">

          <div className="focus-header">

            <p className="section-eyebrow">
              CURRENT FOCUS
            </p>

            <h2>
              Areas I work with
            </h2>

          </div>


          <div className="focus-grid">

            <div className="focus-item">

              <span>01</span>

              <h3>
                Automation
              </h3>

              <p>
                Ansible playbooks, modules, variables, roles,
                templates, Jinja2 and idempotent automation.
              </p>

            </div>


            <div className="focus-item">

              <span>02</span>

              <h3>
                CI/CD
              </h3>

              <p>
                Git, Jenkins and GitHub Actions for source
                control and pipeline automation workflows.
              </p>

            </div>


            <div className="focus-item">

              <span>03</span>

              <h3>
                Containers & Cloud
              </h3>

              <p>
                Docker containerization and AWS cloud
                fundamentals supporting application environments.
              </p>

            </div>


            <div className="focus-item">

              <span>04</span>

              <h3>
                AI Engineering
              </h3>

              <p>
                AI-assisted engineering workflows including
                automated pull-request review and intelligent
                workflow experimentation.
              </p>

            </div>

          </div>

        </div>


        {/* Education */}
        <div className="about-education">

          <div>

            <p className="section-eyebrow">
              EDUCATION
            </p>

            <h2>
              Electrical & Electronics Engineering
            </h2>

          </div>

          <div className="education-details">

            <strong>
              KLE Technological University
            </strong>

            <span>
              Hubballi • 2020 – 2024
            </span>

            <span>
              CGPA: 8.88 / 10
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;