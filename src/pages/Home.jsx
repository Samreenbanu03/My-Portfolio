import { Link } from "react-router-dom";

import DevOpsBackground from "../components/DevOpsBackground";

function Home() {
  return (
    <section className="home">

      {/* Animated Background */}

      <DevOpsBackground />


      {/* Main Content */}

      <div className="home-container">


        {/* =====================================
            LEFT — HERO CONTENT
        ===================================== */}

        <div className="hero-content">

          <p className="hero-eyebrow">
            DEVOPS ENGINEER
          </p>


          <h1>

            Building reliable

            <span>
              {" "}delivery systems.
            </span>

          </h1>


          <p className="hero-description">

            Automation, CI/CD, containers and cloud
            technologies for reliable and repeatable
            software delivery.

          </p>


          {/* Buttons */}

          <div className="hero-actions">

            <Link
              to="/projects"
              className="button button-primary"
            >
              Explore Projects
            </Link>


            <Link
              to="/contact"
              className="button button-secondary"
            >
              Get In Touch
            </Link>

          </div>


          {/* Technologies */}

          <div className="hero-technologies">

            <span>
              Automation
            </span>

            <span>
              CI/CD
            </span>

            <span>
              Docker
            </span>

            <span>
              AWS
            </span>

            <span>
              Linux
            </span>

          </div>

        </div>


        {/* =====================================
            RIGHT — DEVOPS ARCHITECTURE
        ===================================== */}

        <div className="devops-visual">

          <div className="architecture">


            {/* =================================
                GITHUB
            ================================= */}

            <div className="architecture-node github">

              <div className="node-icon">
                &lt;/&gt;
              </div>

              <div className="node-content">

                <strong>
                  GitHub
                </strong>

                <small>
                  Source Control
                </small>

              </div>

            </div>


            {/* GitHub → CI/CD */}

            <div className="flow-line flow-one">

              <span></span>

            </div>


            {/* =================================
                CI/CD
            ================================= */}

            <div className="architecture-node cicd">

              <div className="node-icon">
                ⚙
              </div>

              <div className="node-content">

                <strong>
                  CI / CD
                </strong>

                <small>
                  Jenkins · Actions
                </small>

              </div>

            </div>


            {/* CI/CD → Automation */}

            <div className="flow-line flow-two">

              <span></span>

            </div>


            {/* =================================
                AUTOMATION
            ================================= */}

            <div className="architecture-node automation">

              <div className="node-icon">
                ◇
              </div>

              <div className="node-content">

                <strong>
                  Automation
                </strong>

                <small>
                  Ansible
                </small>

              </div>

            </div>


            {/* =================================
                DOCKER
            ================================= */}

            <div className="side-node docker-node">

              <div className="side-icon">
                ◈
              </div>

              <div className="node-content">

                <strong>
                  Docker
                </strong>

                <small>
                  Containers
                </small>

              </div>

            </div>


            {/* =================================
                AWS
            ================================= */}

            <div className="side-node aws-node">

              <div className="side-icon">
                ☁
              </div>

              <div className="node-content">

                <strong>
                  AWS
                </strong>

                <small>
                  Cloud
                </small>

              </div>

            </div>


            {/* Automation → Application */}

            <div className="deployment-line">

              <span></span>

            </div>


            {/* =================================
                APPLICATION
            ================================= */}

            <div className="architecture-node application">

              <div className="node-icon">
                ▣
              </div>

              <div className="node-content">

                <strong>
                  Application
                </strong>

                <small>
                  Deployment
                </small>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;