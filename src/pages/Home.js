import Intro from 'components/Intro/Intro';
import Skills from 'components/Skills/Skills';
import { data } from '../data';

const Home = () => {
  const { skills } = data;
  return (
    <>
      <div>
        HOME PAGE
        <Intro />;
        <Skills skills={skills} />
      </div>
    </>
  );
};
export default Home;
