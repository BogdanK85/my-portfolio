const { useLocation } = require('react-router-dom');
const { Container } = require('styles/GlobalStyles');

const container = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  transition: 0.5,
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const ProjectList = ({ projects }) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Projects</SectionTitle>
      </motion.div>
      <motion.section variants={container} initial="hidden" animate="visible">
        <ProjectWrapper>
          {projects.map(project => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </ProjectWrapper>
      </motion.section>
    </Container>
  );
};
