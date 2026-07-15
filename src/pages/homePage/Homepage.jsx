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
import Navbar from "../projectLibrary/ProjectLibraryNavbar";
import Footer from "../projectLibrary/ProjectLibraryFooter";

// These arrays/objects hold the page's content. Keeping the data separate
// from the markup means we can loop over it with .map().

// the four learning areas shown in the offer section.
// "What will students create?" section.
const learningAreas = [
  { title: "Animation", icon: animationIcon },
  { title: "Games", icon: gamesIcon },
  { title: "Chatbots", icon: chatbotsIcon },
  { title: "Augmented Reality", icon: augRealityIcon },
];

// The laptop images that slides in the carousel.
const showcaseSlides = [laptop1, laptop2, laptop3, laptop4];

// The four skill cards displayed in the skills section.
const competencyCards = [
  { image: group1, title: "Creativity & Individuality" },
  { image: group3, title: "Critical Thinking & Problem Solving" },
  { image: group4, title: "Communication & Collaboration" },
  { image: group2, title: "Technology & Future Focus" },
];

// Information displayed when the "Key Competencies" tab is selected.
const keyCompetencies = [
  {
    title: "THINKING",
    text: "In particular the programme focused on problem solving, design thinking and computational thinking.",
  },
  {
    title: "DISCERNING CODES",
    text: "Analyzing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.",
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

// Data for each tab in the programme section when a user clicks a tab, it will displays the matching heading.
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
  // Keeps track of which slideshow image is currently visible starts at (0) with the first image in the array.
  // When setActiveSlide() runs, it will update the screen automatically.
  const [activeSlide, setActiveSlide] = useState(0);

  // Stores the currently selected tab when page first loads, the key competencies will selected by default.
  const [activeTab, setActiveTab] = useState("key-competencies");

  // looking for data of the currently selected tab or nullish coalescing (??) operator to return undefined if not found
  const currentTab =
    programmeTabs.find((tab) => tab.id === activeTab) ?? programmeTabs[2];

  // Everything returned below is JSX markup HTML DOM.
  return (
    <>
      <Navbar />
      <main className={styles["home-page"]}>
        {/* Hero: the big intro banner with the headline and call-to-action buttons. */}
        <section className={styles["home-hero"]}>
          <div className={styles["home-hero_inner"]}>
            <div className={styles["home-hero_content"]}>
              <h1>
                Prepare young minds for a better{" "}
                <span className={styles.highlight}>future.</span>
              </h1>
              <p className={styles["home-hero_text"]}>
                Let us help you advance students in Digital Technologies and
                other learning areas with our project-based learning programme.
              </p>

              <div className={styles["home-hero_actions"]}>
                <a
                  className={`${styles.btn} ${styles["btn-secondary"]}`}
                  href="#programme"
                >
                  Learn More
                </a>
                <div className={styles["home-hero_signup"]}>
                  {/* Link routes to the signup page client-side */}
                  <Link
                    className={`${styles.btn} ${styles["btn-primary"]}`}
                    to="/login"
                  >
                    Sign Up
                  </Link>
                  <p className={styles["subscription-info"]}>
                    *Basic subscription includes the first 15 projects free of
                    charge.
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
              agency, designed by New Zealand's leading IT industry experts and
              schools.
            </p>

            <h3>What will students create?</h3>
            {/* Create one card for each item inside learningAreas .map() loops through the array
           and creates a new JSX element for every object. */}
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
            {/* The carousel: only shows one image of current index activeSlide is pointing at. The dots below change that index.*/}
            <div className={styles["home-showcase"]}>
              <img
                src={showcaseSlides[activeSlide]}
                alt={`Student project example ${activeSlide + 1}`}
                className={styles["home-showcase_image"]}
              />
            </div>
            {/* Create one navigation button for each slide when a button is clicked, it will update the screen automatically.*/}
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
            Teaching kids programming and digital skills is <em>MORE</em> than
            just writing code.
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

          <div
            className={styles["home-tabs"]}
            role="tablist"
            aria-label="Programme highlights"
          >
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
            <h3 className={styles["home-competency-panel_title"]}>
              {currentTab.heading}
            </h3>
            <p className={styles["home-competency-panel_intro"]}>
              {currentTab.intro}
            </p>

            {/* Conditional render: the &&  means "only show when the condition is true if 
           activeTab is equal to key-competencies then show the list else hide the list. */}
            {activeTab === "key-competencies" && (
              <ul className={styles["home-competency-list"]}>
                {keyCompetencies.map((item) => (
                  <li
                    key={item.title}
                    className={styles["home-competency-list_item"]}
                  >
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

        {/* Call to action section: the closing "what are you waiting for?" banner with sign-up button. */}
        <section className={styles["home-cta"]}>
          <div className={styles["home-cta_inner"]}>
            <img
              src={classroom}
              alt="Teacher working with students in a classroom"
              className={styles["home-cta_image"]}
            />

            <div className={styles["home-cta_content"]}>
              <h2 className={styles["home-cta_title"]}>
                What are you waiting for?
              </h2>
              <h3 className={styles["home-cta_subtitle"]}>
                Start teaching Digital Technologies today.
              </h3>
              <p className={styles["home-cta_text"]}>
                If you need more information, we are happy to answer any
                questions you may have.
              </p>

              <div className={styles["home-cta_actions"]}>
                <a
                  className={`${styles.btn} ${styles["btn-secondary"]}`}
                  href="#programme"
                >
                  Enquire Now
                </a>
                <Link
                  className={`${styles.btn} ${styles["btn-primary"]}`}
                  to="/login"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
