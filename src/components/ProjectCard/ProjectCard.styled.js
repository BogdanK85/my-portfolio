import { styled } from 'styled-components';
import { NormalLink } from 'styles/GlobalStyles';

export const Card = styled.article`
  background: var(--bg-card);

  backdrop-filter: blur(22px);
  border-radius: 6px;
  overflow: hidden;
`;

export const CardImg = styled.img`
  aspect-ratio: 4/3;
`;

export const CardInfo = styled.div`
  padding: 1em;
`;

export const CardTitle = styled.h2`
  color: var(--hearing-color);
`;

export const CardDescription = styled.small`
  color: var(--para-gray-color);
`;

export const CardLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
`;

export const CardLink = styled(NormalLink)`
  padding: 0.5em 1em;
  width: 100%;
  text-aline: center;
  justify-content: center;
  font-size: 0.8em;
  border: 1px solid var(--accent-blue);
  color: ${({ primary }) => (primary ? '#fff' : 'var(--accent-blue')};
  background: ${({ primary }) => (!primary ? 'none' : 'var(--accent-blue')};
`;
