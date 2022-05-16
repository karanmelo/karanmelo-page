import React from 'react';

import { useIsInViewport } from 'hooks';

import { Container, Title, Content } from './styles';

const About: React.FC = () => {
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const isInViewport = useIsInViewport(elementRef);

  const getFadeRightStyles = (visible: boolean) => ({
    transition: 'all 1s ease-in',
    opacity: visible ? '1' : '0',
    transform: visible ? '' : 'translateX(-100%)',
  });

  return (
    <Container>
      <Title>Quem é Karan?</Title>
      <Content ref={elementRef} style={getFadeRightStyles(isInViewport)}>
        <p>Desenvolvedor Fulll-Stack Javascript</p>
        <p>
          Amante de tecnologia, entusiasta de qualidade de software e boas
          práticas de desenvolvimento.
        </p>
      </Content>
    </Container>
  );
};

export default About;
