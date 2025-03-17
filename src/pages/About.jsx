// src/pages/About.jsx
import React from "react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Robert Anderson",
      title: "CEO & Founder",
      image: "/images/team-1.jpg",
      bio: "With over 20 years of experience in the plumbing industry, Robert founded LuxeFlow with a vision to combine luxury design with eco-friendly technology.",
    },
    {
      id: 2,
      name: "Elena Chen",
      title: "Head of Design",
      image: "/images/team-2.jpg",
      bio: "Elena brings her background in industrial design and architecture to create fixtures that are both beautiful and functional.",
    },
    {
      id: 3,
      name: "James Rodriguez",
      title: "Chief Technology Officer",
      image: "/images/team-3.jpg",
      bio: "James leads our engineering team, focusing on innovative water-saving technologies without compromising performance.",
    },
    {
      id: 4,
      name: "Sophie Mitchell",
      title: "Customer Experience Director",
      image: "/images/team-4.jpg",
      bio: "Sophie ensures that every customer interaction with LuxeFlow exceeds expectations, from browsing to installation.",
    },
  ];

  const milestones = [
    {
      year: 2010,
      title: "Company Founded",
      description:
        "LuxeFlow was established with a mission to redefine luxury bathroom fixtures.",
    },
    {
      year: 2013,
      title: "First Eco-Friendly Collection",
      description:
        "Launched our first water-saving collection, reducing water usage by 30% without compromising performance.",
    },
    {
      year: 2016,
      title: "International Expansion",
      description:
        "Opened showrooms in major cities across North America and Europe.",
    },
    {
      year: 2019,
      title: "Design Excellence Award",
      description:
        "Received industry recognition for our innovative designs and sustainability efforts.",
    },
    {
      year: 2022,
      title: "Smart Home Integration",
      description:
        "Introduced smart fixtures with digital controls and home automation capabilities.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About LuxeFlow</h1>
          <p>Crafting premium bathroom and kitchen fixtures since 2010</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="section-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              LuxeFlow began with a simple idea: bathroom fixtures should be
              both beautiful and sustainable. Founded in 2010 by Robert
              Anderson, we've grown from a small workshop to an international
              brand known for quality craftsmanship and innovative design.
            </p>
            <p>
              Our journey has been guided by a commitment to excellence in every
              detail. From the precise engineering of our water-saving
              technology to the elegant finishing of our products, we maintain
              the highest standards at every step.
            </p>
            <p>
              Today, LuxeFlow fixtures grace homes, hotels, and commercial
              spaces around the world. As we continue to grow, we remain
              dedicated to our founding principles of quality, innovation, and
              sustainability.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about-story.jpg" alt="LuxeFlow workshop" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-values">
        <div className="section-container">
          <div className="mission-content">
            <h2>Our Mission & Values</h2>

            <div className="mission-statement">
              <h3>Mission</h3>
              <p>
                To create exceptional bathroom and kitchen fixtures that enhance
                everyday experiences while preserving our planet's most precious
                resource.
              </p>
            </div>

            <div className="values">
              <h3>Core Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-gem"></i>
                  </div>
                  <h4>Quality</h4>
                  <p>
                    We use only the finest materials and craftsmanship in every
                    product we create.
                  </p>
                </div>

                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h4>Innovation</h4>
                  <p>
                    We continuously push boundaries to develop new technologies
                    and designs.
                  </p>
                </div>

                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h4>Sustainability</h4>
                  <p>
                    We prioritize water conservation and eco-friendly
                    manufacturing practices.
                  </p>
                </div>

                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h4>Customer Focus</h4>
                  <p>
                    We design with our customers' needs and preferences at the
                    forefront.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team">
        <div className="section-container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            The talented individuals behind LuxeFlow's success
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img
                    src={member.image || "/images/placeholder.jpg"}
                    alt={member.name}
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="company-timeline">
        <div className="section-container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="manufacturing">
        <div className="section-container">
          <div className="manufacturing-image">
            <img
              src="/images/manufacturing.jpg"
              alt="LuxeFlow manufacturing facility"
            />
          </div>
          <div className="manufacturing-content">
            <h2>Our Manufacturing Process</h2>
            <p>
              At LuxeFlow, we maintain control over every aspect of production
              to ensure the highest quality standards. Our state-of-the-art
              manufacturing facility combines traditional craftsmanship with
              cutting-edge technology.
            </p>
            <ul className="process-steps">
              <li>
                <span className="step-number">01</span>
                <h4>Design & Engineering</h4>
                <p>
                  Our designers and engineers collaborate to create products
                  that are both beautiful and functional.
                </p>
              </li>
              <li>
                <span className="step-number">02</span>
                <h4>Material Selection</h4>
                <p>
                  We source the finest materials for durability and aesthetic
                  appeal.
                </p>
              </li>
              <li>
                <span className="step-number">03</span>
                <h4>Precision Manufacturing</h4>
                <p>
                  Advanced CNC machines create components with exacting
                  tolerances.
                </p>
              </li>
              <li>
                <span className="step-number">04</span>
                <h4>Quality Testing</h4>
                <p>
                  Each product undergoes rigorous testing to ensure performance
                  and longevity.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability">
        <div className="section-container">
          <h2>Our Commitment to Sustainability</h2>
          <div className="sustainability-grid">
            <div className="sustainability-item">
              <div className="sustainability-icon">
                <i className="fas fa-tint"></i>
              </div>
              <h3>Water Conservation</h3>
              <p>
                Our fixtures are designed to reduce water usage by up to 30%
                without compromising performance.
              </p>
            </div>

            <div className="sustainability-item">
              <div className="sustainability-icon">
                <i className="fas fa-recycle"></i>
              </div>
              <h3>Recycled Materials</h3>
              <p>
                We incorporate recycled brass and other materials in our
                manufacturing process.
              </p>
            </div>

            <div className="sustainability-item">
              <div className="sustainability-icon">
                <i className="fas fa-box"></i>
              </div>
              <h3>Eco-Packaging</h3>
              <p>
                Our products are packaged in recycled and biodegradable
                materials.
              </p>
            </div>

            <div className="sustainability-item">
              <div className="sustainability-icon">
                <i className="fas fa-solar-panel"></i>
              </div>
              <h3>Green Manufacturing</h3>
              <p>
                Our facility is powered by renewable energy and employs
                energy-efficient processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Join Our Journey</h2>
          <p>
            Experience the perfect blend of luxury and sustainability with
            LuxeFlow products.
          </p>
          <div className="cta-buttons">
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
