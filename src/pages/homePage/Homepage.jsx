import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
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


// These arrays/objects hold the page's content. Keeping the data separate
// from the markup means we can loop over it with .map(). 


// the four learning areas shown in the offer section.
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

// The tab strip in the programme section. Each entry carries the text that gets swapped into the panel below when its tab is clicked.
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

  // Which carousel image is showing. Starts at 0 (the first one). CallingsetActiveSlide rerender the component with the new index.
  const [activeSlide, setActiveSlide] = useState(0);

  // Which programme tab is selected. We default to the "key-competencies" tab.
  const [activeTab, setActiveTab] = useState("key-competencies");

  // looking for data of the currently selected tab or nullish coalescing (??) operator to return undefined if not found
  const currentTab = programmeTabs.find((tab) => tab.id === activeTab) ?? programmeTabs[2];


  
  // Everything returned below is JSX markup that turns into DOM.
  return (
    <main className={styles["home-page"]}>
      {/* Hero: the big intro banner with the headline and call-to-action buttons. */}
      <section className={styles["home-hero"]}>
        <div className={styles["home-hero_inner"]}>
          <div className={styles["home-hero_content"]}>
            <h1>
              Prepare young minds for a better <span className={styles.highlight}>future.</span>
            </h1>
            <p className={styles["home-hero_text"]}>
              Let us help you advance students in Digital Technologies and other
              learning areas with our project-based learning programme.
            </p>

            <div className={styles["home-hero_actions"]}>
              <a className={`${styles.btn} ${styles["btn-secondary"]}`} href="#programme">
                Learn More
              </a>
              <div className={styles["home-hero_signup"]}>
                {/* Link routes to the signup page client-side */}
                <Link className={`${styles.btn} ${styles["btn-primary"]}`} to="/login">
                  Sign Up
                </Link>
                <p className={styles["subscription-info"]}>
                  *Basic subscription includes the first 15 projects free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer: explains the programme and shows the rotating laptop showcase.
          The id="programme" lets the "Learn More" anchor jump down to here. */}
      <section className={styles["home-offer"]} id="programme">
        <div className={styles["home-offer_copy"]}>
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
          <div className={styles["home-chip-grid"]}>
            {learningAreas.map((item) => (
              <div key={item.title} className={styles["home-chip-card"]}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className={styles["home-chip-card_icon-image"]}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles["home-offer_visual"]}>
          {/* The carousel: we only ever render one image — whichever index
              activeSlide currently points at. The dots below change that index. */}
          <div className={styles["home-showcase"]}>
            <img
              src={showcaseSlides[activeSlide]}
              alt={`Student project example ${activeSlide + 1}`}
              className={styles["home-showcase_image"]}
            />
          </div>
          {/* One clickable dot per slide. Clicking a dot sets activeSlide to its
              index, which swaps the image above. The ternary on className adds an
              "--active" modifier to whichever dot matches the current slide. */}
          <div className={styles["home-showcase_dots"]}>
            {showcaseSlides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                aria-label={`Show project example ${index + 1}`}
                aria-current={index === activeSlide}
                className={
                  index === activeSlide
                    ? `${styles["home-showcase_dot"]} ${styles["home-showcase_dot-active"]}`
                    : styles["home-showcase_dot"]
                }
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills: the row of four competency cards under the tagline. */}
      <section className={styles["home-skills"]}>
        <p className={styles["home-skills_tagline"]}>
          Teaching kids programming and digital skills is <em>MORE</em> than just
          writing code.
        </p>

        <div className={styles["home-skills_grid"]}>
          {competencyCards.map((card) => (
            <article key={card.title} className={styles["home-skills_card"]}>
              <img src={card.image} alt={card.title} />
            </article>
          ))}
        </div>
      </section>

      {/* Programme: the tab strip. Each button updates activeTab, which controls
          the content shown in the competency panel section below. */}
      <section className={styles["home-programme"]}>
        <h2 className={styles["home-programme_title"]}>
          How our programme helps teachers and schools
        </h2>

        <div className={styles["home-tabs"]} role="tablist" aria-label="Programme highlights">
          {programmeTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              // aria-selected tells screen readers which tab is active.
              aria-selected={activeTab === tab.id}
              className={
                activeTab === tab.id
                  ? `${styles["home-tab"]} ${styles["home-tab-active"]}`
                  : styles["home-tab"]
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
      <section className={styles["home-competency-panel"]}>
        <div className={styles["home-competency-panel_inner"]}>
          <h3 className={styles["home-competency-panel_title"]}>{currentTab.heading}</h3>
          <p className={styles["home-competency-panel_intro"]}>{currentTab.intro}</p>

          {/* Conditional render: the &&  means "only show the list when the
              key-competencies tab is active". On other tabs this is skipped. */}
          {activeTab === "key-competencies" && (
            <ul className={styles["home-competency-list"]}>
              {keyCompetencies.map((item) => (
                <li key={item.title} className={styles["home-competency-list_item"]}>
                  <img
                    src={star}
                    alt=""
                    className={styles["home-competency-list_icon"]}
                  />
                  <p className={styles["home-competency-list_text"]}>
                    <strong>{item.title}</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* CTA: the closing "what are you waiting for?" banner with sign-up button. */}
      <section className={styles["home-cta"]}>
        <div className={styles["home-cta_inner"]}>
          <img
            src={classroom}
            alt="Teacher working with students in a classroom"
            className={styles["home-cta_image"]}
          />

          <div className={styles["home-cta_content"]}>
            <h2 className={styles["home-cta_title"]}>What are you waiting for?</h2>
            <h3 className={styles["home-cta_subtitle"]}>
              Start teaching Digital Technologies today.
            </h3>
            <p className={styles["home-cta_text"]}>
              If you need more information, we are happy to answer any questions
              you may have.
            </p>

            <div className={styles["home-cta_actions"]}>
              <a className={`${styles.btn} ${styles["btn-secondary"]}`} href="#programme">
                Enquire Now
              </a>
              <Link className={`${styles.btn} ${styles["btn-primary"]}`} to="/login">
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


