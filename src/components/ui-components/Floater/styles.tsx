import styled from 'styled-components';

export const Floater = styled.img`
  position: absolute;

  transform: translateY(-10%);
  animation: floater 1.5s infinite;
  transition: ease 0.5s;

  z-index: 10;

  @keyframes floater {
    0% {
      transform: translateY(-10%);
      transition: ease 0.5s;
    }
    50% {
      transform: translateY(10%);
      transition: ease 0.5s;
    }
  }
`;
