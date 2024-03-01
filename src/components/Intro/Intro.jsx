import { Container, HighlightedLink } from '../../styles/GlobalStyles';
import me from '../../assets/me.jpg';
import resume from '../../assets/Resume.png';
import { motion } from 'framer-motion';

import { FiDownload } from 'react-icons/fi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  Bio,
  Description,
  Icon,
  IconsWrapper,
  MainTitle,
  MyImg,
  Title,
  Wrapper,
} from './Intro.styled';

const Intro = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 1500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Wrapper>
          <MyImg src={me} alt="Bohdan Kobak" loading="lazy" />
          <Description>
            <MainTitle>Bohdan Kobak</MainTitle>
            <Title>Frontend developer</Title>
            <Bio>
              Passionate about Technology and Startups | Lifelong learner
              Innovations for a better tomorrow: program and change the world.
            </Bio>
            <HighlightedLink href={resume} target="_blank">
              Download Resume <FiDownload />
            </HighlightedLink>
            <IconsWrapper>
              <Icon href="https://github.com/BogdanK85" target="_blank">
                <BsGithub />
              </Icon>
              <Icon
                href="https://www.linkedin.com/in/bogdan-kobak-421773296/"
                target="_blank"
              >
                <BsLinkedin />
              </Icon>
            </IconsWrapper>
          </Description>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default Intro;
