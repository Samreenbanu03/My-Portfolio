function Automation() {
  return (
    <section className="automation-page">

      {/* PAGE INTRO */}

      <div className="automation-container">

        <div className="automation-intro">

          <p className="page-eyebrow">
            AUTOMATION ENGINEERING
          </p>

          <h1>
            Turning repetitive
            <span> operations into automation.</span>
          </h1>

          <p className="automation-lead">
            Ansible-based automation for repeatable application
            deployment, configuration management and operational
            workflows across Linux/Unix environments.
          </p>

        </div>


        {/* AUTOMATION WORKFLOW */}

        <div className="automation-workflow">

          <div className="section-heading">

            <span>
              01
            </span>

            <div>
              <h2>
                Automation Workflow
              </h2>

              <p>
                A structured approach to executing repeatable
                operational tasks.
              </p>
            </div>

          </div>


          <div className="workflow">

            <div className="workflow-node">

              <div className="workflow-number">
                01
              </div>

              <div>
                <strong>
                  Targets
                </strong>

                <p>
                  Define the systems or application
                  environments that automation will operate on.
                </p>
              </div>

            </div>


            <div className="workflow-connector">
              <span></span>
            </div>


            <div className="workflow-node">

              <div className="workflow-number">
                02
              </div>

              <div>
                <strong>
                  Playbook
                </strong>

                <p>
                  Express the desired automation workflow
                  using readable YAML.
                </p>
              </div>

            </div>


            <div className="workflow-connector">
              <span></span>
            </div>


            <div className="workflow-node">

              <div className="workflow-number">
                03
              </div>

              <div>
                <strong>
                  Tasks & Modules
                </strong>

                <p>
                  Break the workflow into reusable tasks
                  using appropriate Ansible modules.
                </p>
              </div>

            </div>


            <div className="workflow-connector">
              <span></span>
            </div>


            <div className="workflow-node">

              <div className="workflow-number">
                04
              </div>

              <div>
                <strong>
                  Configuration
                </strong>

                <p>
                  Use variables, facts, handlers and
                  Jinja2 templates to control behavior.
                </p>
              </div>

            </div>


            <div className="workflow-connector">
              <span></span>
            </div>


            <div className="workflow-node">

              <div className="workflow-number">
                05
              </div>

              <div>
                <strong>
                  Idempotent Execution
                </strong>

                <p>
                  Ensure repeated execution produces a
                  predictable desired state.
                </p>
              </div>

            </div>


            <div className="workflow-connector">
              <span></span>
            </div>


            <div className="workflow-node workflow-final">

              <div className="workflow-number">
                06
              </div>

              <div>
                <strong>
                  Application / Operations
                </strong>

                <p>
                  Automate application deployment and
                  operational activities consistently.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ANSIBLE CONCEPTS */}

        <div className="automation-concepts">

          <div className="section-heading">

            <span>
              02
            </span>

            <div>
              <h2>
                Ansible Building Blocks
              </h2>

              <p>
                Core concepts used to structure maintainable
                automation.
              </p>
            </div>

          </div>


          <div className="concept-grid">

            <article className="concept-card">

              <div className="concept-icon">
                YML
              </div>

              <h3>
                YAML Playbooks
              </h3>

              <p>
                Define automation workflows in a readable
                declarative format.
              </p>

            </article>


            <article className="concept-card">

              <div className="concept-icon">
                MOD
              </div>

              <h3>
                Modules
              </h3>

              <p>
                Use purpose-built modules to perform
                configuration and operational tasks.
              </p>

            </article>


            <article className="concept-card">

              <div className="concept-icon">
                VAR
              </div>

              <h3>
                Variables & Facts
              </h3>

              <p>
                Separate configuration values from automation
                logic and use system facts during execution.
              </p>

            </article>


            <article className="concept-card">

              <div className="concept-icon">
                J2
              </div>

              <h3>
                Jinja2 Templates
              </h3>

              <p>
                Generate configuration content dynamically
                using variables and templates.
              </p>

            </article>


            <article className="concept-card">

              <div className="concept-icon">
                ROL
              </div>

              <h3>
                Roles
              </h3>

              <p>
                Organize reusable automation components into
                structured and maintainable roles.
              </p>

            </article>


            <article className="concept-card">

              <div className="concept-icon">
                IDE
              </div>

              <h3>
                Idempotency
              </h3>

              <p>
                Design automation so repeated execution
                maintains the intended system state.
              </p>

            </article>

          </div>

        </div>


        {/* PRACTICAL APPLICATION */}

        <div className="automation-application">

          <div className="application-content">

            <p className="card-label">
              PRACTICAL APPLICATION
            </p>

            <h2>
              Automation beyond configuration
            </h2>

            <p>
              My automation work includes application deployment
              and operational tasks using Ansible playbooks,
              modules and YAML configurations. I have also
              initiated automation for demo-instance setup and
              maintenance to make recurring activities more
              repeatable.
            </p>

            <div className="application-tags">

              <span>
                Application Deployment
              </span>

              <span>
                Configuration Management
              </span>

              <span>
                Operational Automation
              </span>

              <span>
                Linux / Unix
              </span>

              <span>
                SSH
              </span>

            </div>

          </div>


          <div className="automation-terminal">

            <div className="terminal-header">

              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>

              <small>
                ansible-workflow
              </small>

            </div>


            <div className="terminal-body">

              <p>
                <span className="terminal-command">
                  $
                </span>{" "}
                ansible-playbook deployment.yml
              </p>

              <p className="terminal-muted">
                PLAY [Application Deployment]
              </p>

              <p className="terminal-success">
                TASK [Apply configuration]
              </p>

              <p className="terminal-success">
                TASK [Execute deployment]
              </p>

              <p className="terminal-success">
                TASK [Validate application state]
              </p>

              <p className="terminal-muted">
                PLAY RECAP
              </p>

              <p>
                <span className="terminal-success">
                  automation completed
                </span>
              </p>

            </div>

          </div>

        </div>


        {/* CLOSING */}

        <div className="automation-closing">

          <p className="page-eyebrow">
            ENGINEERING PRINCIPLE
          </p>

          <h2>
            Automate the repeatable.
            <span> Keep the workflow predictable.</span>
          </h2>

        </div>

      </div>

    </section>
  );
}

export default Automation;