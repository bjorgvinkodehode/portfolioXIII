import './Projects.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';  // Importing the icons


const MultiPageComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const projects = [
        {
            title: "Parallax",
            link: "https://bjorgvinkodehode.github.io/Parallax/",
            imageUrl: "assets/Parallax.png",
            description: "This was the first website we created",
            githubLink: "https://github.com/bjorgvinkodehode/Parallax"
        },
        {
            title: "Pluto",
            link: "https://bjorgvinkodehode.github.io/Pluto/",
            imageUrl: "assets/pluto.png",
            description: "This was the first website we created, it was about exploring HTML and CSS...",
            githubLink: "https://github.com/bjorgvinkodehode/Pluto"
        },
        {
            title: "Neptune",
            link: "https://bjorgvinkodehode.github.io/Neptune/",
            imageUrl: "assets/Neptune.png",
            description: "This was the first website we created, it was about exploring HTML and CSS...",
            githubLink: "https://github.com/bjorgvinkodehode/Neptune"
        },
        {
            title: "GameOfLife",
            link: "https://bjorgvinkodehode.github.io/GameOfLife/",
            imageUrl: "assets/GameOfLife.png",
            description: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.",
            githubLink: "https://github.com/bjorgvinkodehode/GameOfLife"
        },
        {
            title: "Project E",
            link: "https://bjorgvinkodehode.github.io/Pluto/",
            imageUrl: "src/assets/pluto.png",
            description: "This was the first website we created, it was about exploring HTML and CSS...",
            githubLink: "https://github.com/bjorgvinkodehode/Pluto"
        },
        {
            title: "Project F",
            link: "https://bjorgvinkodehode.github.io/Pluto/",
            imageUrl: "src/assets/pluto.png",
            description: "This was the first website we created, it was about exploring HTML and CSS...",
            githubLink: "https://github.com/bjorgvinkodehode/Pluto"
        },
        {
            title: "Project G",
            link: "https://bjorgvinkodehode.github.io/Pluto/",
            imageUrl: "src/assets/pluto.png",
            description: "This was the first website we created, it was about exploring HTML and CSS...",
            githubLink: "https://github.com/bjorgvinkodehode/Pluto"
        },
        {
            title: "Project H",
            link: "https://bjorgvinkodehode.github.io/Pluto/",
            imageUrl: "src/assets/pluto.png",
            description: "This was the first website we created, it was about exploring HTML and CSS...",
            githubLink: "https://github.com/bjorgvinkodehode/Pluto"
        },
        // ... add more project objects as needed
    ];

    const half = Math.ceil(projects.length / 2);
    const firstPageProjects = projects.slice(0, half);
    const secondPageProjects = projects.slice(half);

    return (
        <div className="page-container">
            {/* Page switcher buttons */}
            <div className="page-switcher">
            <button onClick={() => setCurrentPage(1)} className={currentPage === 1 ? "active" : ""}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={() => setCurrentPage(2)} className={currentPage === 2 ? "active" : ""}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            </div>

            {/* Projects Grid */}
            <div className="project-grid">
                {(currentPage === 1 ? firstPageProjects : secondPageProjects).map((project, index) => (
                    <div className="card" key={index}>
                        <h2 className="card-title">{project.title}</h2>
                        <a target="_blank" rel="noreferrer" href={project.link} className="card-link">
                            <img src={project.imageUrl} alt={`Project ${index + 1} Image`} className="card-image" />
                        </a>
                        <p className="card-description">
                            {project.description}
                            <a target="_blank" rel="noreferrer" href={project.githubLink} className="card-description-link"> GitHub</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MultiPageComponent;

