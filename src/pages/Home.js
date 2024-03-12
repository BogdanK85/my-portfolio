import Intro from 'components/Intro/Intro';
import ProjectList from 'components/ProjectList/ProjectList';
import Skills from 'components/Skills/Skills';
import { data } from '../data';

const Home = () => {
  const { skills, projects } = data;
  return (
    <>
      <div>
        HOME PAGE
        <Intro />;
        <Skills skills={skills} />
        <ProjectList projects={projects.slice(0, 3)} />
      </div>
    </>
  );
};
export default Home;
