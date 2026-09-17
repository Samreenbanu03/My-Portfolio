function Certifications() {
    const certifications = [
        {
            category: "CLOUD",
            title: "AWS Certified Cloud Practitioner",
            description:
                "Foundational certification covering AWS cloud concepts, services, security, architecture and pricing.",
            icon: "AWS",
        },
        {
            category: "CLOUD",
            title: "Microsoft Certified: Azure Fundamentals",
            description:
                "Foundational certification covering Microsoft Azure cloud concepts, services, architecture and core cloud principles.",
            icon: "AZ",
        },
        {
            category: "AI",
            title: "Claude 101",
            description:
                "Certification focused on foundational concepts and practical usage of Claude for AI-assisted workflows.",
            icon: "AI",
        },
        {
            category: "AI",
            title: "Claude Certified Associate – Foundations",
            description:
                "Foundation-level certification demonstrating knowledge of Claude and AI-assisted productivity and engineering workflows.",
            icon: "AI",
        },
        {
            category: "QUALITY",
            title: "ISTQB Certified Tester – Foundation Level 4.0",
            description:
                "Foundation-level certification covering software testing principles, practices and quality fundamentals.",
            icon: "QA",
        },
    ];

    const education = [
        {
            degree: "B.E. Electrical & Electronics Engineering",
            institution: "KLE Technological University, Hubballi",
            period: "2020 – 2024",
            result: "CGPA 8.88 / 10",
        },
        {
            degree: "PUC Science",
            institution: "JSS R S Hukkerikar PU College, Dharwad",
            period: "2018 – 2020",
            result: "88.66%",
        },
        {
            degree: "SSLC",
            institution: "Adarsha Vidyalaya, Dharwad",
            period: "2018",
            result: "93.28%",
        },
    ];

    const achievements = [
        {
            title: "1st Place — Firm Blogathon",
            description:
                "Recognized for a technical blog covering SCADA and ADMS functionalities, published on the firm's SharePoint.",
        },
        {
            title: "IEEE AIKIIE-2023 — Paper Presentation",
            description:
                "Presented the paper “Lithium-ion Battery State of Health Estimation Using SVR” at IEEE AIKIIE-2023, Ballari.",
        },
        {
            title: "ICIMS 2024 — Best Paper",
            description:
                "Presented and awarded Best Paper for “Position Estimation of Self-Driving Car Using Kalman Filter Algorithm” at ICIMS 2024.",
        },
    ];

    return (
        <section className="certifications-page">
            <div className="certifications-container">

                {/* Header */}
                <div className="page-intro certifications-intro">
                    <span className="page-eyebrow">CREDENTIALS & ACHIEVEMENTS</span>

                    <h1>
                        Engineering backed by
                        <span> continuous learning.</span>
                    </h1>

                    <p>
                        Certifications, academic foundations and technical achievements
                        that support my work across DevOps, cloud, automation, AI and
                        software engineering.
                    </p>
                </div>

                {/* Certifications */}
                <section className="certifications-section">

                    <div className="section-heading-row">
                        <div>
                            <span className="section-label">CERTIFICATIONS</span>

                            <h2>
                                Cloud, AI & Engineering
                            </h2>
                        </div>

                        <span className="section-count">
                            05 CREDENTIALS
                        </span>
                    </div>

                    <div className="certifications-grid">

                        {certifications.map((certification) => (
                            <article
                                className="certification-card"
                                key={certification.title}
                            >
                                <div className="certification-top">
                                    <div className="certification-icon">
                                        {certification.icon}
                                    </div>

                                    <span className="certification-category">
                                        {certification.category}
                                    </span>
                                </div>

                                <h3>{certification.title}</h3>

                                <p>{certification.description}</p>

                                <div className="certification-line"></div>

                                <span className="certification-status">
                                    CERTIFIED
                                </span>
                            </article>
                        ))}

                    </div>

                </section>

                {/* Education */}
                <section className="education-section">

                    <div className="section-heading-row">
                        <div>
                            <span className="section-label">EDUCATION</span>

                            <h2>
                                Engineering foundation
                            </h2>
                        </div>
                    </div>

                    <div className="education-list">

                        {education.map((item) => (
                            <article
                                className="education-card"
                                key={item.degree}
                            >
                                <div className="education-main">
                                    <h3>{item.degree}</h3>

                                    <p>{item.institution}</p>
                                </div>

                                <div className="education-meta">
                                    <span>{item.period}</span>
                                    <strong>{item.result}</strong>
                                </div>
                            </article>
                        ))}

                    </div>

                </section>

                {/* Achievements */}
                <section className="achievements-section">

                    <div className="section-heading-row">
                        <div>
                            <span className="section-label">ACHIEVEMENTS</span>

                            <h2>
                                Beyond certifications
                            </h2>
                        </div>
                    </div>

                    <div className="achievements-grid">

                        {achievements.map((achievement) => (
                            <article
                                className="achievement-card"
                                key={achievement.title}
                            >
                                <span className="achievement-marker">
                                    +
                                </span>

                                <div>
                                    <h3>{achievement.title}</h3>

                                    <p>{achievement.description}</p>
                                </div>
                            </article>
                        ))}

                    </div>

                </section>

                {/* Learning Path */}
                <section className="learning-path">

                    <span className="section-label">
                        ENGINEERING JOURNEY
                    </span>

                    <div className="learning-flow">

                        <div className="learning-node">
                            <span>01</span>
                            <strong>Engineering</strong>
                        </div>

                        <div className="learning-connector"></div>

                        <div className="learning-node">
                            <span>02</span>
                            <strong>Automation</strong>
                        </div>

                        <div className="learning-connector"></div>

                        <div className="learning-node">
                            <span>03</span>
                            <strong>DevOps</strong>
                        </div>

                        <div className="learning-connector"></div>

                        <div className="learning-node">
                            <span>04</span>
                            <strong>Cloud & AI</strong>
                        </div>

                    </div>

                </section>

                {/* Closing */}
                <div className="certifications-closing">

                    <span className="closing-line"></span>

                    <p>
                        Credentials matter. Practical engineering matters more.
                    </p>

                    <span className="closing-line"></span>

                </div>

            </div>
        </section>
    );
}

export default Certifications;