import { styled } from 'styled-components';
import { keyframes } from 'styled-components';

const swipe = keyframes`
 0% {
    left: -64px;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  100% {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;
export const TimeLine = styled.ul`
  list-style-type: none;
  margin: 1em 0;
  padding: 1em;
`;

export const TimeLineItem = styled.li`
  padding: 0 0 2em 2em;
  border-left: 1px solid var(--accent-blue);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -6px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--accent-blue);
    border: 2px solid var(--accent-blue);
  }
  p {
    opacity: 0.7;
  }

  ul {
    padding: 0 1em;
  }
`;

export const ButtonWrap = styled.button`
  position: relative;

  right: -575px;
  top: 30px;
`;

export const HighlightedLinkSertificate = styled.a`
  background-color: var(--accent-blue);
  text-decoration: none;
  padding: 0.6em 1.2em;
  border-radius: 4px;
  color: white;
  display: flex;
  width: fit-content;
  position: absolute;
  right: 15px;
  top: 50px;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;

  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 310px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: aqua;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(40deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    animation-name: ${swipe};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  svg {
    margin-left: 8px;
  }

  /* :hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  } */
`;

export const EducationHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative:
top: -10px;

h3 {
    font-weight: 400;
}

small {
    opacity: 0.9;
}

@media screen and ( max-width: 768px) {
    display: block;
}
`;

export const Knowlege = styled.p`
  color: var(--para-gray-color);
`;
