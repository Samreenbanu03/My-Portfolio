function Experience() {
  return (
    <section className="experience-page">

      <div className="experience-container">

        {/* Page Header */}

        <div className="experience-heading">

          <p className="section-eyebrow">
            PROFESSIONAL EXPERIENCE
          </p>

          <h1>
            Engineering experience
            <span> in real project environments.</span>
          </h1>

          <p>
            My experience combines DevOps and automation practices with
            application engineering and power-utility domain knowledge,
            supporting ADMS solutions and delivery activities.
          </p>

        </div>


        {/* Experience Timeline */}

        <div className="experience-timeline">

          <div className="timeline-line"></div>


          {/* Experience Item */}

          <article className="experience-item">

            <div className="timeline-marker">
              <span></span>
            </div>


            <div className="experience-content">

              <div className="experience-top">

                <div>

                  <p className="experience-period">
                    FEB 2024 — PRESENT
                  </p>

                  <h2>
                    Associate
                  </h2>

                  <h3>
                    PwC AC — Technology & Transformation
                  </h3>

                </div>


                <div className="experience-location">
                  Hyderabad, Telangana
                </div>

              </div>


              {/* Role Overview */}

              <div className="experience-overview">

                <p>
                  Working in technology and transformation environments
                  with a focus on application automation, DevOps practices
                  and support for Advanced Distribution Management System
                  (ADMS) solutions for a leading U.S. power utility.
                </p>

              </div>


              {/* Responsibility Grid */}

              <div className="experience-sections">


                <div className="experience-section">

                  <div className="experience-section-label">
                    01 / AUTOMATION
                  </div>

                  <h4>
                    Application & Operational Automation
                  </h4>

                  <ul>

                    <li>
                      Automate application deployment and operational
                      tasks using Ansible playbooks, modules and YAML
                      configurations.
                    </li>

                    <li>
                      Work with reusable automation patterns,
                      configuration management concepts and
                      repeatable deployment workflows.
                    </li>

                    <li>
                      Contribute to automation for demo-instance
                      setup and maintenance to improve reliability
                      and productivity.
                    </li>

                  </ul>

                </div>


                <div className="experience-section">

                  <div className="experience-section-label">
                    02 / DEVOPS
                  </div>

                  <h4>
                    CI/CD & Application Environments
                  </h4>

                  <ul>

                    <li>
                      Work with Git and GitHub for source-control
                      workflows.
                    </li>

                    <li>
                      Use Jenkins and GitHub Actions across CI/CD
                      and pipeline automation workflows.
                    </li>

                    <li>
                      Work with Docker and containerization for
                      application environments and deployment
                      activities.
                    </li>

                    <li>
                      Use Linux/Unix environments and shell scripting
                      for application operations and system-level tasks.
                    </li>

                  </ul>

                </div>


                <div className="experience-section">

                  <div className="experience-section-label">
                    03 / ADMS
                  </div>

                  <h4>
                    Utility Application Engineering
                  </h4>

                  <ul>

                    <li>
                      Support ADMS solutions involving SCADA,
                      Distribution Management System (DMS) and
                      Outage Management System (OMS).
                    </li>

                    <li>
                      Participate in Pre-FAT, FAT and SAT activities
                      to validate application functionality.
                    </li>

                    <li>
                      Work with technical and client teams during
                      application validation and delivery activities.
                    </li>

                  </ul>

                </div>


                <div className="experience-section">

                  <div className="experience-section-label">
                    04 / ENGINEERING
                  </div>

                  <h4>
                    Troubleshooting & Delivery
                  </h4>

                  <ul>

                    <li>
                      Investigate customer-reported defects and
                      perform root-cause analysis.
                    </li>

                    <li>
                      Analyze application issues and coordinate
                      resolution with cross-functional teams.
                    </li>

                    <li>
                      Work within Agile sprint workflows using Jira
                      for tracking, defect management and delivery
                      coordination.
                    </li>

                  </ul>

                </div>

              </div>


              {/* Technology Strip */}

              <div className="experience-stack">

                <span>Ansible</span>
                <span>YAML</span>
                <span>Linux</span>
                <span>Shell</span>
                <span>Git</span>
                <span>Jenkins</span>
                <span>GitHub Actions</span>
                <span>Docker</span>
                <span>AWS</span>
                <span>Jira</span>

              </div>

            </div>

          </article>

        </div>


        {/* Domain Experience */}

        <section className="domain-experience">

          <div className="domain-heading">

            <p className="section-eyebrow">
              DOMAIN EXPERIENCE
            </p>

            <h2>
              Power-utility application environment
            </h2>

            <p>
              Alongside DevOps and automation activities, my project
              experience includes supporting ADMS implementation and
              application workflows in the power-utility domain.
            </p>

          </div>


          <div className="domain-flow">

            <div className="domain-node">

              <strong>
                SCADA
              </strong>

              <span>
                Supervisory Control
              </span>

            </div>


            <div className="domain-arrow">
              →
            </div>


            <div className="domain-node">

              <strong>
                DMS
              </strong>

              <span>
                Distribution Management
              </span>

            </div>


            <div className="domain-arrow">
              →
            </div>


            <div className="domain-node">

              <strong>
                OMS
              </strong>

              <span>
                Outage Management
              </span>

            </div>


            <div className="domain-arrow">
              →
            </div>


            <div className="domain-node domain-main">

              <strong>
                ADMS
              </strong>

              <span>
                Integrated Utility Platform
              </span>

            </div>

          </div>

        </section>


        {/* Working Model */}

        <section className="working-model">

          <div>

            <p className="section-eyebrow">
              WORKING MODEL
            </p>

            <h2>
              Automation + collaboration + troubleshooting
            </h2>

          </div>


          <div className="working-points">

            <div>
              <span>01</span>
              <p>
                Automate repeatable operational tasks.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Validate applications across delivery stages.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Investigate defects through structured analysis.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Collaborate across technical and client teams.
              </p>
            </div>

          </div>

        </section>

      </div>

    </section>
  );
}

export default Experience;