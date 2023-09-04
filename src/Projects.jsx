import './Projects.css';
import { useState, useEffect } from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MultiPageComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    
    useEffect(() => {
      let isTouchDevice = false;

      const handleTouchStart = () => {
        isTouchDevice = true;
      };

      const handleResize = () => {
        if (window.innerWidth <= 480) {
          setItemsPerPage(isTouchDevice ? 1 : 1); 
        } else if (window.innerWidth <= 768) {
          setItemsPerPage(isTouchDevice ? 2 : 2); 
        } else {
          setItemsPerPage(isTouchDevice ? 4 : 4); 
        }
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('touchstart', handleTouchStart);

      handleResize(); // Initial call to set itemsPerPage based on window size
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('touchstart', handleTouchStart);
      };
    }, []);

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
            description: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.",
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
        
        
    ];

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const currentProjects = projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="page-container">
            {/* Projects Grid */}
            <div className="project-grid">
                {currentProjects.map((project, index) => (
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
    
            {/* Page switcher buttons */}
            <div className="page-switcher">
                <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className={currentPage === 1 ? "disabled" : ""}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} className={currentPage === totalPages ? "disabled" : ""}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
export default MultiPageComponent;

