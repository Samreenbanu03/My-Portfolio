import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      number: "01",
      type: "AUTOMATION",
      title: "Ansible Application Automation",
      description:
        "Automation workflows using Ansible playbooks, modules and YAML configurations to support application deployment and operational tasks.",
      technologies: [
        "Ansible",
        "YAML",
        "Jinja2",
        "Linux",
        "Shell",
      ],
      details: [
        "Playbook-based automation",
        "Configuration management",
        "Reusable automation patterns",
        "Idempotent execution",
        "Deployment automation",
      ],
      status: "HANDS-ON",
    },

    {
      number: "02",
      type: "CI/CD",
      title: "CI/CD Pipeline Automation",
      description:
        "Hands-on work with source-control and CI/CD technologies for automating software delivery workflows.",
      technologies: [
        "Git",
        "GitHub",
        "Jenkins",
        "GitHub Actions",
        "CI/CD",
      ],
      details: [
        "Source-control workflows",
        "Pipeline automation",
        "Build and delivery concepts",
        "Git-based development workflows",
      ],
      status: "HANDS-ON",
    },

    {
      number: "03",
      type: "CONTAINERS",
      title: "Containerized Application Environments",
      description:
        "Hands-on exposure to Docker and containerization for application environments and deployment activities.",
      technologies: [
        "Docker",
        "Containers",
        "Linux",
        "Deployment",
      ],
      details: [
        "Container-based environments",
        "Application deployment",
        "Containerization concepts",
        "Environment management",
      ],
      status: "HANDS-ON",
    },

    {
      number: "04",
      type: "AI ENGINEERING",
      title: "AI-Assisted Pull Request Review",
      description:
        "An internal engineering automation initiative that uses an AI agent to review pull-request changes and support the review workflow.",
      technologies: [
        "Generative AI",
        "AI Agent",
        "GitHub",
        "Code Review",
        "Workflow Automation",
      ],
      details: [
        "Analyzes pull-request changes",
        "Generates a review document",
        "Adds review comments",
        "Automates part of the review workflow",
      ],
      status: "ENGINEERING",
    },
  ];

  return (
    <section className="projects-page">

      <div className="projects-container">

        {/* Header */}

        <div className="projects-heading">

          <p className="section-eyebrow">
            ENGINEERING WORK
          </p>

          <h1>
            Automation,
            <span> delivery & engineering workflows.</span>
          </h1>

          <p>
            A collection of automation, CI/CD, containerization and
            AI-assisted engineering work aligned with my DevOps focus.
          </p>

        </div>


        {/* Projects */}

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-card-header">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

              </div>


              <div className="project-status">
                <span></span>
                {project.status}
              </div>


              <h2>
                {project.title}
              </h2>


              <p className="project-description">
                {project.description}
              </p>


              <div className="project-details">

                {project.details.map((detail) => (

                  <div
                    className="project-detail"
                    key={detail}
                  >
                    <span>→</span>
                    {detail}
                  </div>

                ))}

              </div>


              <div className="project-technologies">

                {project.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>


        {/* Domain Project */}

        <section className="project-domain">

          <div className="project-domain-content">

            <p className="section-eyebrow">
              DOMAIN ENGINEERING
            </p>

            <h2>
              ADMS / SCADA Application Environment
            </h2>

            <p>
              My professional experience includes supporting Advanced
              Distribution Management System solutions for a leading U.S.
              power utility, with exposure across SCADA, DMS and OMS.
              This domain knowledge complements my DevOps and automation
              work.
            </p>


            <div className="domain-technologies">

              <span>ADMS</span>
              <span>SCADA</span>
              <span>DMS</span>
              <span>OMS</span>
              <span>Pre-FAT</span>
              <span>FAT</span>
              <span>SAT</span>

            </div>

          </div>


          <div className="domain-visual">

            <div className="domain-circle circle-one">
              <span>SCADA</span>
            </div>

            <div className="domain-circle circle-two">
              <span>DMS</span>
            </div>

            <div className="domain-circle circle-three">
              <span>OMS</span>
            </div>

            <div className="domain-center">
              ADMS
            </div>

          </div>

        </section>


        {/* More Work */}

        <section className="projects-footer">

          <div>

            <p className="section-eyebrow">
              NEXT
            </p>

            <h2>
              Explore the automation workflow
            </h2>

          </div>

          <Link
            to="/automation"
            className="button button-primary"
          >
            View Automation →
          </Link>

        </section>

      </div>

    </section>
  );
}

export default Projects;