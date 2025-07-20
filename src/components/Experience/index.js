import React from 'react';
import styled, { keyframes } from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

// Hacking and Dev Tools
const hackingTools = [
  'nmap -sS -Pn',
  'msfconsole',
  'burpsuite',
  'hydra -l admin -P passwords.txt',
  'wireshark',
  'john --wordlist=passwords.txt hashfile',
  'tcpdump -i eth0',
  'sqlmap -u',
  'aircrack-ng',
  'hashcat -m 0 hash.txt',
  'ssh root@192.168.1.1',
];

const devTools = [
  'git clone',
  'docker build',
  'kubectl apply -f',
  'npm install',
  'yarn start',
  'python3 manage.py runserver',
  'systemctl restart nginx',
  'sudo apt-get update',
  'chmod +x script.sh',
  'vim config.yaml',
  'ansible-playbook deploy.yml',
];

// Combine for Terminal Effect
const terminalCommands = [...hackingTools, ...devTools];

// Matrix Animation
const matrixAnimation = keyframes`
  0% { transform: translateY(-100vh); opacity: 0.1; }
  100% { transform: translateY(100vh); opacity: 0.1; }
`;

const generateMatrix = () => {
  let elements = [];
  for (let i = 0; i < 100; i++) {
    const randomDelay = Math.random() * 20;
    const randomLeft = Math.random() * 100;
    const randomCommand = terminalCommands[Math.floor(Math.random() * terminalCommands.length)];
    elements.push(
      <MatrixChar
        key={i}
        style={{
          left: `${randomLeft}%`,
          animationDelay: `${randomDelay}s`,
        }}
      >
        {randomCommand}
      </MatrixChar>
    );
  }
  return elements;
};

// Glitch Effect
const Glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 2px); }
  40% { transform: translate(3px, -2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(2px, 2px); }
  100% { transform: translate(0); }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  background: black;
  overflow: hidden;
`;

const MatrixChar = styled.div`
  position: fixed;
  top: 0;
  font-size: 16px;
  color: #00ff00;
  text-shadow: 0 0 8px #00ff00;
  opacity: 0.1; /* Reduced opacity to 10% */
  animation: ${matrixAnimation} 8s linear infinite;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #00ff00;
  text-shadow: 0 0 15px #00ff00;
  animation: ${Glitch} 0.2s infinite;
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #b3ffb3;
  text-shadow: 0 0 8px #00ff00;
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const index = () => {
  return (
    <Container id="experience">
      {/* Matrix Animation */}
      {generateMatrix()}
      
      <Wrapper>
        <Title>Internship</Title>
        <Desc>
          I gained practical experience in cybersecurity and Python development, focusing on enhancing security, automating processes, and improving system efficiency.
        </Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#00ff00' }} />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
