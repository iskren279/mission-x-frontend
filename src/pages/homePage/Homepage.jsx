import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import laptop1 from "../../assets/Home/laptop1.png";
import laptop2 from "../../assets/Home/laptop2.png";
import laptop3 from "../../assets/Home/laptop3.png";
import laptop4 from "../../assets/Home/laptop4.png";
import animationIcon from "../../assets/Home/animation.png";
import gamesIcon from "../../assets/Home/games.png";
import chatbotsIcon from "../../assets/Home/chatbots.png";
import augRealityIcon from "../../assets/Home/augreality.png";
import group1 from "../../assets/Home/group1.png";
import group2 from "../../assets/Home/group2.png";
import group3 from "../../assets/Home/group3.png";
import group4 from "../../assets/Home/group4.png";
import classroom from "../../assets/Home/classroom.png";
import star from "../../assets/Home/star.png";


const learningAreas = [
  { title: "Animation", icon: animationIcon },
  { title: "Games", icon: gamesIcon },
  { title: "Chatbots", icon: chatbotsIcon },
  { title: "Augmented Reality", icon: augRealityIcon },
];

const showcaseSlides = [laptop1, laptop2, laptop3, laptop4];

const competencyCards = [
  { image: group1, title: "Creativity & Individuality" },
  { image: group3, title: "Critical Thinking & Problem Solving" },
  { image: group4, title: "Communication & Collaboration" },
  { image: group2, title: "Technology & Future Focus" },
];

const keyCompetencies = [
  {
    title: "THINKING",
    text: "In particular the programme focused on problem solving, design thinking and computational thinking.",
  },
  {
    title: "DISCERNING CODES",
    text: "Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.",
  },
  {
    title: "SELF-MANAGEMENT",
    text: "Projects and challenges are designed to motivate students to explore and experiment with self-motivation",
  },
  {
    title: "RELATIONSHIPS WITH PEERS",
    text: "The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.",
  },
  {
    title: "PARTICIPATION AND COLLABORATION",
    text: "The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people",
  },
];

const programmeTabs = [
  {
    id: "learning-pathways",
    label: "Learning Pathways",
    heading: "Build clear learning pathways",
    intro:
      "Students progress through a structured series of projects that build on each other, moving from beginner concepts to advanced digital creation at their own pace.",
  },
  {
    id: "digital-technologies",
    label: "Digital Technologies",
    heading: "Aligned with Digital Technologies",
    intro:
      "The programme aligns with the Digital Technologies curriculum, teaching computational thinking and how to design and develop digital outcomes through hands-on projects.",
  },
  {
    id: "key-competencies",
    label: "Key Competencies",
    heading: "Enhance key competencies",
    intro:
      "The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:",
  },
  {
    id: "ir4",
    label: "IR4.0",
    heading: "Ready for Industry 4.0",
    intro:
      "We prepare students for the Fourth Industrial Revolution by building the creativity, adaptability and technical skills needed for the future of work.",
  },
];

const Homepage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("key-competencies");
  const currentTab =
    programmeTabs.find((tab) => tab.id === activeTab) ?? programmeTabs[2];
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <h1>
              Prepare young minds for a better <span className="highlight">future.</span>
            </h1>
            <p className="home-hero__text">
              Let us help you advance students in Digital Technologies and other
              learning areas with our project-based learning programme.
            </p>

            <div className="home-hero__actions">
              <a className="btn btn--secondary" href="#programme">
                Learn More
              </a>
              <div className="home-hero__signup">
                <Link className="btn btn--primary" to="/login-signup">
                  Sign Up
                </Link>
                <p className="subscription-info">
                  *Basic subscription includes the first 15 projects free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-offer" id="programme">
        <div className="home-offer__copy">
          <h2>What we offer</h2>
          <p>
            The Creative Problem Solving programme is a series of digital
            creation projects aimed to encourage self-motivation and student
            agency, designed by New Zealand&apos;s leading IT industry experts and
            schools.
          </p>

          <h3>What will students create?</h3>
          <div className="home-chip-grid">
            {learningAreas.map((item) => (
              <div key={item.title} className="home-chip-card">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="home-chip-card__icon-image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="home-offer__visual">
          <div className="home-showcase">
            <img
              src={showcaseSlides[activeSlide]}
              alt={`Student project example ${activeSlide + 1}`}
              className="home-showcase__image"
            />
          </div>
          <div className="home-showcase__dots">
            {showcaseSlides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                aria-label={`Show project example ${index + 1}`}
                aria-current={index === activeSlide}
                className={
                  index === activeSlide
                    ? "home-showcase__dot home-showcase__dot--active"
                    : "home-showcase__dot"
                }
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-skills">
        <p className="home-skills__tagline">
          Teaching kids programming and digital skills is <em>MORE</em> than just
          writing code.
        </p>

        <div className="home-skills__grid">
          {competencyCards.map((card) => (
            <article key={card.title} className="home-skills__card">
              <img src={card.image} alt={card.title} />
            </article>
          ))}
        </div>
      </section>

      <section className="home-programme">
        <h2 className="home-programme__title">
          How our programme helps teachers and schools
        </h2>

        <div className="home-tabs" role="tablist" aria-label="Programme highlights">
          {programmeTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={
                activeTab === tab.id
                  ? "home-tab home-tab--active"
                  : "home-tab"
              }
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <section className="home-competency-panel">
        <div className="home-competency-panel__inner">
          <h3 className="home-competency-panel__title">{currentTab.heading}</h3>
          <p className="home-competency-panel__intro">{currentTab.intro}</p>

          {activeTab === "key-competencies" && (
            <ul className="home-competency-list">
              {keyCompetencies.map((item) => (
                <li key={item.title} className="home-competency-list__item">
                  <img
                    src={star}
                    alt=""
                    className="home-competency-list__icon"
                  />
                  <p className="home-competency-list__text">
                    <strong>{item.title}</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__inner">
          <img
            src={classroom}
            alt="Teacher working with students in a classroom"
            className="home-cta__image"
          />

          <div className="home-cta__content">
            <h2 className="home-cta__title">What are you waiting for?</h2>
            <h3 className="home-cta__subtitle">
              Start teaching Digital Technologies today.
            </h3>
            <p className="home-cta__text">
              If you need more information, we are happy to answer any questions
              you may have.
            </p>

            <div className="home-cta__actions">
              <a className="btn btn--secondary" href="#programme">
                Enquire Now
              </a>
              <Link className="btn btn--primary" to="/login-signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;


