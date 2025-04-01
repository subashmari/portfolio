import React from 'react';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const flicker = keyframes`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  40% { opacity: 0.2; }
  60% { opacity: 1; }
  80% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
z-index: 1;
padding: 20px;
background-color: #000;
color: #0f0;
font-family: 'Courier New', monospace;
height: 80vh;
overflow: hidden;
border-radius: 20px;
margin: 20px;
box-shadow: 0 0 20px rgba(0, 255, 0, 0.6);
`; 

const Title = styled.h1`
font-size: 64px;
font-weight: 700;
color: #0f0;
margin-bottom: 20px;
animation: ${glitch} 1.5s infinite alternate, ${flicker} 3s infinite alternate;
letter-spacing: 6px;
text-shadow: 0 0 8px rgba(0, 255, 0, 0.8);
`; 

const Desc = styled.p`
font-size: 20px;
color: #0f0;
margin-bottom: 40px;
animation: ${flicker} 2s infinite alternate;
opacity: 0.85;
text-shadow: 0 0 4px rgba(0, 255, 0, 0.5);
`;

const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
margin-top: 20px;
`;

const InfoItem = styled.a`
display: flex;
align-items: center;
gap: 16px;
font-size: 22px;
color: #0f0;
animation: ${glitch} 1.5s infinite alternate;
transition: transform 0.3s ease-in-out;
text-shadow: 0 0 6px rgba(0, 255, 0, 0.7);
text-decoration: none;
&:hover {
  transform: scale(1.15);
}
`;

const Contact = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
      <InfoContainer>
        <InfoItem href="mailto:subashmaari01@gmail.com">
          <span>📧</span> <span>subashmaari01@gmail.com</span>
        </InfoItem>
        <InfoItem href="tel:+917358913440">
          <span>📞</span> <span>+91 7358913440</span>
        </InfoItem>
      </InfoContainer>
    </Container>
  );
};

export default Contact;
