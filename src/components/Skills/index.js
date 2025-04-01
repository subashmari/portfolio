import React from 'react';
import styled, { keyframes } from 'styled-components';
import { skills } from '../../data/constants';

// Matrix Code Effect
const matrixAnimation = keyframes`
  0% { transform: translateY(-100%); opacity: 0.3; }
  100% { transform: translateY(100%); opacity: 0; }
`;

const MatrixBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background: black;
  &::before {
    content: '';
    display: block;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), black);
    z-index: 1;
  }
`;

const MatrixLine = styled.div`
  position: absolute;
  width: 2px;
  height: 100vh;
  background: #00ff00;
  opacity: 0.1;
  left: ${() => Math.random() * 100}vw;
  animation: ${matrixAnimation} ${() => Math.random() * 6 + 4}s linear infinite;
`;

// Floating Skill Showcase Animation
const floatAnimation = keyframes`
  0% { transform: translateY(0px); opacity: 0.8; }
  50% { transform: translateY(-20px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.8; }
`;

const SkillFloat = styled.div`
  position: absolute;
  font-size: 24px;
  color: rgba(0, 255, 0, 0.1);
  user-select: none;
  animation: ${floatAnimation} ${() => Math.random() * 6 + 3}s ease-in-out infinite;
  left: ${() => Math.random() * 90}vw;
  top: ${() => Math.random() * 90}vh;
`;

// Satellite Animation
const satelliteAnimation = keyframes`
  0% { transform: translate(-100px, -100px) rotate(0deg); }
  100% { transform: translate(110vw, 110vh) rotate(360deg); }
`;

const Satellite = styled.img`
  position: fixed;
  width: 60px;
  animation: ${satelliteAnimation} 12s linear infinite;
`;

// Glowing Effect
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px #00ff00; }
  50% { box-shadow: 0 0 20px #00ff00; }
  100% { box-shadow: 0 0 10px #00ff00; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: #00ff00;
  text-shadow: 0 0 8px #00ff00;
`;

const Desc = styled.p`
  font-size: 18px;
  color: #b3ffb3;
  margin-bottom: 20px;
  max-width: 600px;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #00ff00;
  animation: ${glowAnimation} 3s infinite;
`;

const SkillTitle = styled.h2`
  color: #00ff00;
  font-size: 24px;
  margin-bottom: 12px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 14px;
  color: #b3ffb3;
  border: 1px solid #00ff00;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

// Matrix and Floating Effect
const MatrixEffect = () => (
  <MatrixBackground>
    {[...Array(30)].map((_, i) => (
      <MatrixLine key={i} />
    ))}
    {skills.flatMap((skill) =>
      skill.skills.map((item, i) => (
        <SkillFloat key={i}>{item.name}</SkillFloat>
      ))
    )}
    <Satellite src={process.env.PUBLIC_URL + '/satellite.png'} alt="Satellite" />

    
  </MatrixBackground>
);

const Skills = () => {
  return (
    <>
      <MatrixEffect />
      <Container id="skills">
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills that I have developed through my academic journey, internships, and personal projects. I have gained hands-on experience in cybersecurity, networking, and software development, using various tools and technologies to enhance my practical knowledge.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Container>
    </>
  );
};

export default Skills;
