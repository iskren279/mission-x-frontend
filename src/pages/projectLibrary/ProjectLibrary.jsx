import React from 'react'

// CSS for the project library page
import "./ProjectLibrary.css";
import ProjectLibraryNavbar from './ProjectLibraryNavbar';
import ProjectLibraryFooter from './ProjectLibraryFooter';


export default function ProjectLibrary() {
  return (
    <div className="project-library-container">
        <ProjectLibraryNavbar />
        <div className="project-library-content">
            <h1>Project Library</h1>
            <p>Still Figuring this out XD</p>
        </div>
        <ProjectLibraryFooter />
    </div>
  )
}

