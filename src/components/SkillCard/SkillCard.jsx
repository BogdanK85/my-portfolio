import React from 'react';
import { Skill, SkillImage, SkillTitle } from './SkillCadr.styled';
import { skillsList } from '../../skillsList';
const SkillCard = ({ title, img }) => {
  return (
    <Skill>
      <SkillImage src={skillsList.img} alt={title} />
      <SkillTitle>{title}</SkillTitle>
    </Skill>
  );
};

export default SkillCard;
