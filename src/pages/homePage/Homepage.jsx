// useState lets this component remember small bits of state (here: the active
// carousel slide and the selected programme tab) between re-renders.
import { useState } from "react";
// Link is React Router's way of navigating between pages without a full reload.
import { Link } from "react-router-dom";
// All the styling for this page lives in Home.css.
import "./Home.css";
// Vite lets us import images like modules. Each import becomes a URL string we
// can drop straight into an <img src={...} />.
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


// These arrays/objects below hold the page's content. Keeping the data separate
// from the markup means we can loop over it with .map() instead of copy-pasting
// the same JSX over and over — change the data here and the UI updates itself.

// The four "what students create" chips shown in the offer section.
const learningAreas = [
  { title: "Animation", icon: animationIcon },
  { title: "Games", icon: gamesIcon },
  { title: "Chatbots", icon: chatbotsIcon },
  { title: "Augmented Reality", icon: augRealityIcon },
];

// The laptop images that cycle through the showcase carousel.
const showcaseSlides = [laptop1, laptop2, laptop3, laptop4];

// The four skill cards in the "more than writing code" section.
const competencyCards = [
  { image: group1, title: "Creativity & Individuality" },
  { image: group3, title: "Critical Thinking & Problem Solving" },
  { image: group4, title: "Communication & Collaboration" },
  { image: group2, title: "Technology & Future Focus" },
];

// The five bullet points shown only when the "Key Competencies" tab is active.
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

// The tab strip in the programme section. Each entry carries the text that gets
// swapped into the panel below when its tab is clicked. The "id" is how we know
// which tab is currently selected.
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
  // Which carousel image is showing. Starts at 0 (the first one). Calling
  // setActiveSlide re-renders the component with the new index.
  const [activeSlide, setActiveSlide] = useState(0);
  // Which programme tab is selected. We default to the "key-competencies" tab.
  const [activeTab, setActiveTab] = useState("key-competencies");
  // Look up the data object for the currently selected tab. The ?? (nullish
  // coalescing) is a safety net: if find() somehow returns nothing, fall back
  // to the third tab so the panel never renders blank.
  const currentTab =
    programmeTabs.find((tab) => tab.id === activeTab) ?? programmeTabs[2];
  // Everything returned below is JSX — HTML-like markup React turns into DOM.
  return (
    <main className="home-page">
      {/* Hero: the big intro banner with the headline and call-to-action buttons. */}
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
                {/* Link routes to the signup page client-side (no page refresh). */}
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

      {/* Offer: explains the programme and shows the rotating laptop showcase.
          The id="programme" lets the "Learn More" anchor jump down to here. */}
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
          {/* Loop over the learningAreas data to render one chip per item.
              React needs a unique "key" on each looped element so it can track
              them efficiently — we use the title since it's unique here. */}
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
          {/* The carousel: we only ever render one image — whichever index
              activeSlide currently points at. The dots below change that index. */}
          <div className="home-showcase">
            <img
              src={showcaseSlides[activeSlide]}
              alt={`Student project example ${activeSlide + 1}`}
              className="home-showcase__image"
            />
          </div>
          {/* One clickable dot per slide. Clicking a dot sets activeSlide to its
              index, which swaps the image above. The ternary on className adds an
              "--active" modifier to whichever dot matches the current slide. */}
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

      {/* Skills: the row of four competency cards under the tagline. */}
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

      {/* Programme: the tab strip. Each button updates activeTab, which controls
          the content shown in the competency panel section below. */}
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
              // aria-selected tells screen readers which tab is active.
              aria-selected={activeTab === tab.id}
              className={
                activeTab === tab.id
                  ? "home-tab home-tab--active"
                  : "home-tab"
              }
              // Clicking remembers this tab's id as the active one.
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Competency panel: shows the heading/intro for whichever tab is active.
          currentTab was computed up top, so this updates as the tabs change. */}
      <section className="home-competency-panel">
        <div className="home-competency-panel__inner">
          <h3 className="home-competency-panel__title">{currentTab.heading}</h3>
          <p className="home-competency-panel__intro">{currentTab.intro}</p>

          {/* Conditional render: the &&  means "only show the list when the
              key-competencies tab is active". On other tabs this is skipped. */}
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

      {/* CTA: the closing "what are you waiting for?" banner with sign-up button. */}
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

// Make this component available to the router so it can be shown at "/".
export default Homepage;


