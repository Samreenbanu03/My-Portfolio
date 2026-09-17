function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Automation & Configuration",
      description:
        "Automation technologies and configuration-management concepts used to make application and operational workflows repeatable.",
      skills: [
        "Ansible",
        "Playbooks",
        "Modules",
        "Roles",
        "Variables",
        "YAML",
        "Jinja2",
        "Handlers",
        "Facts",
        "Idempotency",
        "Configuration Management",
        "Deployment Automation",
      ],
      level: "CORE",
    },

    {
      number: "02",
      title: "CI/CD & Source Control",
      description:
        "Source-control and pipeline technologies used across application development and delivery workflows.",
      skills: [
        "Git",
        "GitHub",
        "Jenkins",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Source Code Management",
      ],
      level: "CORE",
    },

    {
      number: "03",
      title: "Linux & Scripting",
      description:
        "Linux/Unix fundamentals used for automation, application operations, troubleshooting and system-level tasks.",
      skills: [
        "Linux / Unix",
        "Shell Scripting",
        "Bash",
        "SSH",
        "Services",
        "Processes",
        "Logs",
        "Troubleshooting",
      ],
      level: "CORE",
    },

    {
      number: "04",
      title: "Containers & Cloud",
      description:
        "Containerization and cloud technologies supporting application environments and deployment activities.",
      skills: [
        "Docker",
        "Containerization",
        "AWS",
        "Cloud Fundamentals",
      ],
      level: "CORE",
    },

    {
      number: "05",
      title: "DevOps Fundamentals",
      description:
        "Broader DevOps concepts that complement automation and CI/CD knowledge.",
      skills: [
        "Infrastructure as Code",
        "Kubernetes",
        "Terraform",
        "Helm",
        "Monitoring",
        "Observability",
        "DevSecOps",
      ],
      level: "FUNDAMENTALS",
    },

    {
      number: "06",
      title: "AI & Engineering Automation",
      description:
        "AI-focused engineering workflows explored through internal automation and intelligent workflow development.",
      skills: [
        "Generative AI",
        "Custom GPT",
        "AI-assisted Code Review",
        "Workflow Automation",
        "Data Model Dictionary",
      ],
      level: "ENGINEERING",
    },

    {
      number: "07",
      title: "Power Utilities",
      description:
        "Domain experience supporting ADMS solutions and utility application workflows.",
      skills: [
        "ADMS",
        "SCADA",
        "DMS",
        "OMS",
        "Power Utilities",
        "Pre-FAT",
        "FAT",
        "SAT",
      ],
      level: "DOMAIN",
    },

    {
      number: "08",
      title: "Tools & Practices",
      description:
        "Engineering tools and delivery practices used during application development and support.",
      skills: [
        "Jira",
        "VS Code",
        "Agile",
        "Scrum",
        "RCA",
        "Defect Analysis",
        "Cross-functional Collaboration",
      ],
      level: "PRACTICES",
    },
  ];

  return (
    <section className="skills-page">

      <div className="skills-container">

        {/* Header */}

        <div className="skills-heading">

          <p className="section-eyebrow">
            TECHNICAL STACK
          </p>

          <h1>
            Tools I use to
            <span> automate and deliver.</span>
          </h1>

          <p>
            My technical experience spans automation, CI/CD, Linux,
            containers, cloud technologies, AI-assisted engineering
            workflows and power-utility application environments.
          </p>

        </div>


        {/* Skill Architecture */}

        <div className="skills-overview">

          <div className="overview-line"></div>

          <div className="overview-node">
            <span>01</span>
            <strong>Automation</strong>
            <small>Ansible • YAML</small>
          </div>

          <div className="overview-node">
            <span>02</span>
            <strong>CI/CD</strong>
            <small>Jenkins • GitHub</small>
          </div>

          <div className="overview-node">
            <span>03</span>
            <strong>Infrastructure</strong>
            <small>Linux • Docker • AWS</small>
          </div>

          <div className="overview-node">
            <span>04</span>
            <strong>Domain</strong>
            <small>ADMS • SCADA</small>
          </div>

        </div>


        {/* Skill Cards */}

        <div className="skills-grid">

          {skillGroups.map((group) => (

            <article
              className="skill-card"
              key={group.number}
            >

              <div className="skill-card-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-level">
                  {group.level}
                </span>

              </div>


              <h2>
                {group.title}
              </h2>


              <p className="skill-description">
                {group.description}
              </p>


              <div className="skill-tags">

                {group.skills.map((skill) => (

                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>


        {/* Skill Note */}

        <div className="skills-note">

          <div className="note-icon">
            /
          </div>

          <div>

            <strong>
              How I approach DevOps
            </strong>

            <p>
              Automation is the common thread across my technical
              work — from Ansible-based application tasks and Linux
              operations to CI/CD workflows, containerized environments
              and engineering automation.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;