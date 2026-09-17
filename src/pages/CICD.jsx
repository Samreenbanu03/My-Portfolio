function CICD() {
  return (
    <section className="cicd-page">

      <div className="cicd-container">

        {/* INTRO */}

        <div className="cicd-intro">

          <p className="page-eyebrow">
            CI / CD ENGINEERING
          </p>

          <h1>
            From source code
            <span> to reliable delivery.</span>
          </h1>

          <p className="cicd-lead">
            CI/CD workflows connect source control, automated
            validation, application packaging and deployment
            into a repeatable software delivery process.
          </p>

        </div>


        {/* PIPELINE */}

        <div className="cicd-section">

          <div className="section-heading">

            <span>
              01
            </span>

            <div>
              <h2>
                Delivery Pipeline
              </h2>

              <p>
                A conceptual view of the CI/CD workflow I work
                with across Git, Jenkins and GitHub Actions.
              </p>
            </div>

          </div>


          <div className="pipeline">

            <div className="pipeline-card">

              <div className="pipeline-icon">
                GIT
              </div>

              <span className="pipeline-step">
                01
              </span>

              <h3>
                Source
              </h3>

              <p>
                Code changes are maintained in Git and
                GitHub repositories.
              </p>

            </div>


            <div className="pipeline-arrow">
              <span>→</span>
            </div>


            <div className="pipeline-card">

              <div className="pipeline-icon">
                CI
              </div>

              <span className="pipeline-step">
                02
              </span>

              <h3>
                Trigger
              </h3>

              <p>
                Repository changes initiate an automated
                CI/CD workflow.
              </p>

            </div>


            <div className="pipeline-arrow">
              <span>→</span>
            </div>


            <div className="pipeline-card pipeline-highlight">

              <div className="pipeline-icon">
                ⚙
              </div>

              <span className="pipeline-step">
                03
              </span>

              <h3>
                Jenkins / Actions
              </h3>

              <p>
                Jenkins and GitHub Actions orchestrate
                automated pipeline stages.
              </p>

            </div>


            <div className="pipeline-arrow">
              <span>→</span>
            </div>


            <div className="pipeline-card">

              <div className="pipeline-icon">
                ✓
              </div>

              <span className="pipeline-step">
                04
              </span>

              <h3>
                Validate
              </h3>

              <p>
                Automated stages can perform builds,
                checks and validation before delivery.
              </p>

            </div>


            <div className="pipeline-arrow">
              <span>→</span>
            </div>


            <div className="pipeline-card">

              <div className="pipeline-icon">
                DOC
              </div>

              <span className="pipeline-step">
                05
              </span>

              <h3>
                Package
              </h3>

              <p>
                Docker provides containerized application
                environments for consistent delivery.
              </p>

            </div>


            <div className="pipeline-arrow">
              <span>→</span>
            </div>


            <div className="pipeline-card pipeline-final">

              <div className="pipeline-icon">
                🚀
              </div>

              <span className="pipeline-step">
                06
              </span>

              <h3>
                Deploy
              </h3>

              <p>
                The validated application moves toward
                its target deployment environment.
              </p>

            </div>

          </div>

        </div>


        {/* CI/CD TOOLS */}

        <div className="cicd-tools">

          <div className="section-heading">

            <span>
              02
            </span>

            <div>
              <h2>
                CI/CD Tooling
              </h2>

              <p>
                Technologies used across source control and
                pipeline automation workflows.
              </p>
            </div>

          </div>


          <div className="cicd-tool-grid">

            <article className="cicd-tool-card">

              <div className="tool-header">

                <span className="tool-symbol">
                  GH
                </span>

                <span className="tool-status">
                  SCM
                </span>

              </div>

              <h3>
                Git & GitHub
              </h3>

              <p>
                Source control, repository workflows and
                collaboration around application changes.
              </p>

              <div className="tool-tags">

                <span>Git</span>
                <span>GitHub</span>
                <span>SCM</span>

              </div>

            </article>


            <article className="cicd-tool-card featured">

              <div className="tool-header">

                <span className="tool-symbol">
                  J
                </span>

                <span className="tool-status">
                  CI / CD
                </span>

              </div>

              <h3>
                Jenkins
              </h3>

              <p>
                Pipeline orchestration for automated build,
                validation and delivery workflows.
              </p>

              <div className="tool-tags">

                <span>Pipelines</span>
                <span>Automation</span>
                <span>CI/CD</span>

              </div>

            </article>


            <article className="cicd-tool-card">

              <div className="tool-header">

                <span className="tool-symbol">
                  ◇
                </span>

                <span className="tool-status">
                  CI / CD
                </span>

              </div>

              <h3>
                GitHub Actions
              </h3>

              <p>
                Repository-integrated workflows for automating
                development and delivery processes.
              </p>

              <div className="tool-tags">

                <span>Workflows</span>
                <span>Actions</span>
                <span>Automation</span>

              </div>

            </article>


            <article className="cicd-tool-card">

              <div className="tool-header">

                <span className="tool-symbol">
                  DK
                </span>

                <span className="tool-status">
                  CONTAINER
                </span>

              </div>

              <h3>
                Docker
              </h3>

              <p>
                Containerization helps package applications
                into consistent deployment environments.
              </p>

              <div className="tool-tags">

                <span>Images</span>
                <span>Containers</span>
                <span>Deployment</span>

              </div>

            </article>

          </div>

        </div>


        {/* DELIVERY PRINCIPLES */}

        <div className="delivery-principles">

          <div className="principle-content">

            <p className="card-label">
              DELIVERY PRINCIPLES
            </p>

            <h2>
              Automation should make
              delivery repeatable.
            </h2>

            <p>
              CI/CD reduces dependency on manual execution by
              turning repeatable software delivery activities
              into defined pipeline stages.
            </p>

          </div>


          <div className="principle-list">

            <div className="principle-item">

              <span>
                01
              </span>

              <div>
                <strong>
                  Source-controlled
                </strong>

                <p>
                  Pipeline definitions and application changes
                  remain traceable through source control.
                </p>
              </div>

            </div>


            <div className="principle-item">

              <span>
                02
              </span>

              <div>
                <strong>
                  Automated
                </strong>

                <p>
                  Repetitive build and delivery activities can
                  be executed consistently.
                </p>
              </div>

            </div>


            <div className="principle-item">

              <span>
                03
              </span>

              <div>
                <strong>
                  Observable
                </strong>

                <p>
                  Pipeline stages provide visibility into the
                  progress and outcome of delivery workflows.
                </p>
              </div>

            </div>


            <div className="principle-item">

              <span>
                04
              </span>

              <div>
                <strong>
                  Repeatable
                </strong>

                <p>
                  The same defined workflow can be executed
                  consistently across delivery cycles.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* PIPELINE TERMINAL */}

        <div className="cicd-terminal-section">

          <div className="terminal-intro">

            <p className="page-eyebrow">
              PIPELINE VIEW
            </p>

            <h2>
              A delivery workflow,
              <span> expressed as stages.</span>
            </h2>

          </div>


          <div className="cicd-terminal">

            <div className="terminal-header">

              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>

              <small>
                ci-cd-pipeline
              </small>

            </div>


            <div className="cicd-terminal-body">

              <div className="terminal-row">

                <span className="terminal-index">
                  01
                </span>

                <span>
                  Checkout source
                </span>

                <strong>
                  COMPLETE
                </strong>

              </div>


              <div className="terminal-row">

                <span className="terminal-index">
                  02
                </span>

                <span>
                  Build / validate
                </span>

                <strong>
                  COMPLETE
                </strong>

              </div>


              <div className="terminal-row">

                <span className="terminal-index">
                  03
                </span>

                <span>
                  Package application
                </span>

                <strong>
                  COMPLETE
                </strong>

              </div>


              <div className="terminal-row">

                <span className="terminal-index">
                  04
                </span>

                <span>
                  Prepare deployment
                </span>

                <strong>
                  COMPLETE
                </strong>

              </div>


              <div className="terminal-row terminal-row-final">

                <span className="terminal-index">
                  05
                </span>

                <span>
                  Deploy
                </span>

                <strong>
                  READY
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* CLOSING */}

        <div className="cicd-closing">

          <p className="page-eyebrow">
            ENGINEERING APPROACH
          </p>

          <h2>
            Connect every stage.
            <span> Automate what repeats.</span>
          </h2>

        </div>

      </div>

    </section>
  );
}

export default CICD;