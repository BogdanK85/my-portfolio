import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import sertificate from '../../assets/sertificate.pdf';

import {
  ButtonWrap,
  EducationHeader,
  HighlightedLinkSertificate,
  Knowlege,
  TimeLine,
  TimeLineItem,
} from './Educations.styled';

import { Container, SectionTitle } from 'styles/GlobalStyles';
import MySlider from 'components/Slider/Slider';

const educationData = [
  {
    id: 1,
    univercity: 'IT School: GoIT',
    specialization: 'Full-stack Developer',
    fromDate: new Date('2023-02-27'),
    toDate: new Date('2024-02-02'),
    knowleges: 'HTML, CSS, JavaScript, React, Node.js',
  },
  {
    id: 2,
    univercity: 'Drogobych State University',
    specialization: 'Master | Management',
    fromDate: new Date('2003-09-01'),
    toDate: new Date('2008-06-30'),
    knowleges: 'Human Resource Manager',
  },
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Educations = () => {
  const monthDifference = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const images = [apple, chicken, Pasta, pizza];

  // const handleNextSlide = () => {
  //   setCurrentSlide(prevSlide =>
  //     prevSlide === images.length - 1 ? 0 : prevSlide + 1
  //   );
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide(prevSlide =>
  //     prevSlide === 0 ? images.length - 1 : prevSlide - 1
  //   );
  // };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transparent={{ duration: 1 }}
      >
        <SectionTitle>Education</SectionTitle>

        <TimeLine>
          {educationData
            .sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime())
            .map(educ => (
              <TimeLineItem key={educ.id}>
                <EducationHeader>
                  <h3>
                    {educ.univercity}:{educ.specialization}
                  </h3>

                  <small>
                    {months[educ.fromDate.getMonth()] +
                      ' ' +
                      educ.fromDate.getFullYear()}{' '}
                    -{' '}
                    {months[educ.toDate.getMonth()] +
                      ' ' +
                      educ.toDate.getFullYear()}{' '}
                    ({monthDifference(educ.fromDate, educ.toDate)}{' '}
                    {monthDifference(educ.fromDate, educ.toDate) > 1
                      ? 'Months'
                      : 'Month'}
                    )
                  </small>
                </EducationHeader>

                <Knowlege>{educ.knowleges}</Knowlege>
              </TimeLineItem>
            ))}
          <ButtonWrap>
            <HighlightedLinkSertificate href={sertificate} target="_blank">
              Download Sertificate <FiDownload />
            </HighlightedLinkSertificate>
          </ButtonWrap>
        </TimeLine>
      </motion.div>
      {/* <SliderWrapper>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          className="slider"
          style={{ x: `-${currentSlide * 100}%` }}
        >
          {images.map((image, index) => (
            <SliderImage key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </motion.div>
        <button onClick={handlePrevSlide}>
          <FiChevronLeft />
        </button>
        <button onClick={handleNextSlide}>
          <FiChevronRight />
        </button>
      </SliderWrapper> */}
      <MySlider />
    </Container>
  );
};

export default Educations;
