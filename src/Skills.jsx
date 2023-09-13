import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGithub,
  faFigma,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';
function Skills() {
  return (
    <footer className='fontawsome'>
      <FontAwesomeIcon icon={faHtml5} className="icon" />
      <FontAwesomeIcon icon={faCss3Alt} className="icon" />
      <FontAwesomeIcon icon={faJsSquare} className="icon" />
      <FontAwesomeIcon icon={faReact} className="icon" />
      <FontAwesomeIcon icon={faFileCode} className="icon" /> {/* Placeholder for TypeScript */}
      <FontAwesomeIcon icon={faGithub} className="icon" />
      <FontAwesomeIcon icon={faFigma} className="icon" />
      <FontAwesomeIcon icon={faCodeBranch} className="icon" /> {/* Placeholder for Git */}
      <FontAwesomeIcon icon={faWindows} className="icon" />
    </footer>
  );
}

export default Skills;
