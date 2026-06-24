import React, { useState } from "react";
import { Route, useNavigate } from "react-router";

import "./ProjectLibrary.css";

import ProjectLibraryNavbar from "./ProjectLibraryNavbar";
import ProjectLibraryFooter from "./ProjectLibraryFooter";


export default function ProjectLibrary() {

    const navigate = useNavigate();
    
    const projects = [
    {
        title: "Introduction",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Animation",
        year: "1-4",
        subject: "Computer Science",
        image: "/images/projects/Project01.png",
        route: "/student-dashboard"
    },
    {
        title: "My Birthday",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Game",
        year: "1-4",
        subject: "Art",
        image: "/images/projects/Project02.png"
    },
    {
        title: "10 Block Challenge",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Animation",
        year: "5-6",
        subject: "Maths",
        image: "/images/projects/Project03.png"
    },
    {
        title: "Build a Band",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Game",
        year: "7-8",
        subject: "Music",
        image: "/images/projects/Project04.png"
    },
    {
        title: "The Bear and the Monkey",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Game",
        year: "1-4",
        subject: "Computer Science",
        image: "/images/projects/Project05.png"
    },
    {
        title: "Debugging",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Game",
        year: "5-6",
        subject: "Computer Science",
        image: "/images/projects/Project06.png"
    },
    {
        title: "About Me",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Chatbot",
        year: "5-6",
        subject: "Language",
        image: "/images/projects/Project07.png"
    },
    {
        title: "I am Here!",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Animation",
        year: "5-6",
        subject: "Language",
        image: "/images/projects/Project08.png"
    },
    {
        title: "Funny Faces",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Game",
        year: "7-8",
        subject: "Art",
        image: "/images/projects/Project09.png"
    },
    {
        title: "It Tickles!",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Game",
        year: "7-8",
        subject: "Science",
        image: "/images/projects/Project10.png"
    },
    {
        title: "Penguin in a Desert",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Animation",
        year: "7-8",
        subject: "Science",
        image: "/images/projects/Project11.png"
    },
    {
        title: "Time Travel",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Augmented Reality",
        year: "1-4",
        subject: "Maths",
        image: "/images/projects/Project12.png"
    },
    {
        title: "Birthday Card",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Animation",
        year: "7-8",
        subject: "Art",
        image: "/images/projects/Project13.png"
    },
    {
        title: "The Lion and the Mouse Part 1",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Animation",
        year: "1-4",
        subject: "Music",
        image: "/images/projects/Project14.png"
    },
    {
        title: "The Lion and the Mouse Part 2",
        difficulty: "Beginner",
        subscription: "Free",
        type: "Animation",
        year: "5-6",
        subject: "Music",
        image: "/images/projects/Project15.png"
    }
];

const [filters, setFilters] = useState({
    free: false,
    premium: false,

    animation: false,
    game: false,
    chatbot: false,

    year1to4: false,
    year5to6: false,
    year7to8: false,

    computerScience: false,
    maths: false,
    science: false,
    art: false,
    language: false,
    music: false
});

function handleFilterChange(filterName) {
    setFilters({
        ...filters,
        [filterName]: !filters[filterName]
    });
}

const [difficulty, setDifficulty] = useState("Beginner");

const [projectsShown, setProjectsShown] = useState("All");

const filteredProjects = projects.filter(project => {

  if (project.difficulty !== difficulty) {
        return false;
    }


    if (
        filters.free &&
        project.subscription !== "Free"
    ) {
        return false;
    }

    if (
        filters.premium &&
        project.subscription !== "Premium"
    ) {
        return false;
    }

    if (
        filters.animation &&
        project.type !== "Animation"
    ) {
        return false;
    }

    if (
        filters.game &&
        project.type !== "Game"
    ) {
        return false;
    }

    if (
        filters.chatbot &&
        project.type !== "Chatbot"
    ) {
        return false;
    }

    if (
    filters.year1to4 &&
    project.year !== "1-4"
) {
    return false;
}

if (
    filters.year5to6 &&
    project.year !== "5-6"
) {
    return false;
}

if (
    filters.year7to8 &&
    project.year !== "7-8"
) {
    return false;
}

    if (
    filters.computerScience &&
    project.subject !== "Computer Science"
) {
    return false;
}

if (
    filters.maths &&
    project.subject !== "Maths"
) {
    return false;
}

if (
    filters.science &&
    project.subject !== "Science"
) {
    return false;
}

if (
    filters.art &&
    project.subject !== "Art"
) {
    return false;
}

if (
    filters.language &&
    project.subject !== "Language"
) {
    return false;
}

if (
    filters.music &&
    project.subject !== "Music"
) {
    return false;
}

    return true;
    
});

const displayedProjects =
    projectsShown === "All"
        ? filteredProjects
        : filteredProjects.slice(0, projectsShown);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


    return (
        <div className="project-library-container">

            <ProjectLibraryNavbar />

            <main className="projects-page">

                <div className="projects-content">

                    {/* FILTERS */}

                    <aside className="filters">

                        <div className="filter-section">

                            <h4>SUBSCRIPTION</h4>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.free}
                                onChange={() => handleFilterChange("free")}
                            />
                                Free
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.premium}
                                onChange={() => handleFilterChange("premium")}
                            />
                                Premium
                            </label>

                        </div>

                        <div className="filter-section">

                            <h4>ACTIVITY TYPE</h4>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.animation}
                                onChange={() => handleFilterChange("animation")}
                            />
                                Animation
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.game}
                                onChange={() => handleFilterChange("game")}
                            />
                                Game
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.chatbot}
                                onChange={() => handleFilterChange("chatbot")}
                            />
                                Chatbot
                            </label>

                        </div>

                        <div className="filter-section">

                            <h4>YEAR LEVEL</h4>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.year1to4}
                                onChange={() => handleFilterChange("year1to4")}
                            />
                                1 - 4
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.year5to6}
                                onChange={() => handleFilterChange("year5to6")}
                            />
                                5 - 6
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.year7to8}
                                onChange={() => handleFilterChange("year7to8")}
                            />
                                7 - 8
                            </label>

                        </div>

                        <div className="filter-section">

                            <h4>SUBJECT MATTER</h4>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.computerScience}
                                onChange={() => handleFilterChange("computerScience")}
                            />
                                Computer Science
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.maths}
                                onChange={() => handleFilterChange("maths")}
                            />
                                Maths
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.science}
                                onChange={() => handleFilterChange("science")}
                            />
                                Science
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.art}
                                onChange={() => handleFilterChange("art")}
                            />
                                Art
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.language}
                                onChange={() => handleFilterChange("language")}
                            />
                                Language
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                checked={filters.music}
                                onChange={() => handleFilterChange("music")}
                            />
                                Music
                            </label>

                        </div>

                    </aside>

                    {/* PROJECT GRID */}

                  <section className="projects-area">

                    <div className="projects-header">

                        <h1>PROJECTS</h1>

                        <p>
                            Welcome to the project library.
                            You can use the filters on the left
                            to help you search for specific projects.
                        </p>

                    </div>

                    <div className="projects-top-bar">

                    <div className="difficulty-tabs">

                        <button
                            className={difficulty === "Beginner" ? "active-tab" : ""}
                            onClick={() => setDifficulty("Beginner")}
                        >
                            BEGINNER
                        </button>

                        <button
                            className={difficulty === "Intermediate" ? "active-tab" : ""}
                            onClick={() => setDifficulty("Intermediate")}
                        >
                            INTERMEDIATE
                        </button>

                        <button
                            className={difficulty === "Advanced" ? "active-tab" : ""}
                            onClick={() => setDifficulty("Advanced")}
                        >
                             ADVANCED
                        </button>

                    </div>

                    <div className="show-controls">
                        <span>SHOW</span>

                        <button
                            className={projectsShown === 5 ? "show-active" : ""}
                            onClick={() => setProjectsShown(5)}
                        >
                            5
                        </button>

                        <button
                            className={projectsShown === 10 ? "show-active" : ""}
                            onClick={() => setProjectsShown(10)}
                        >
                            10
                        </button>

                        <button
                            className={projectsShown === "All" ? "show-active" : ""}
                            onClick={() => setProjectsShown("All")}
                        >
                            All
                        </button>

                    </div>

                    </div>

                    <section className="project-grid">

                        {displayedProjects.map((project, index) => (

                            <div
                                key={index}
                                className="project-card"
                                onClick={() => {
                                    if (project.route) {
                                        navigate(project.route);
                                    }
                                }}
                            >

                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="project-image"
                              />

                                <h3>{project.title}</h3>

                                <p>
                                    {project.difficulty} | {project.type}
                                </p>

                            </div>

                        ))}

                    </section>
                  
                </section>

                </div>

                <div className="library-buttons">

                    <button
                        className="top-btn"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }
                    >
                        BACK TO TOP
                    </button>

                    <button
                        className="dashboard-btn"
                        onClick={() => navigate("/teacher-dashboard")}
                    >
                        BACK TO DASHBOARD
                    </button>

                </div>

            </main>

            <ProjectLibraryFooter />

        </div>
    );
}