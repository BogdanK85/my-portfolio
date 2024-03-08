import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import {
  Card,
  CardDescription,
  CardImg,
  CardInfo,
  CardLink,
  CardLinks,
  CardTitle,
} from './ProjectCard.styled';

const ProjectCard = ({ project }) => {
  return (
    <Card className="card">
      <CardImg src={project.img} alt={project.title} loading="lazy" />
      <CardInfo>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>

        <CardLinks>
          {prject.github && (
            <CardLink href={project.github} target="_blank" rel="noreferrer">
              Source <FaGithub />
            </CardLink>
          )}
          <CardLink
            href={project.live}
            primary
            target="_blank"
            rel="noreferrer"
          >
            Live <HiOutlineExternalLink />
          </CardLink>
        </CardLinks>
      </CardInfo>
    </Card>
  );
};

export default ProjectCard;
