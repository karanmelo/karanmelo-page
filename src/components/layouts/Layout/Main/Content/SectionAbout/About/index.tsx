import React from 'react';

import { useIsInViewport } from 'hooks';

import * as S from './styles';

type FadeProps = {
  visible: boolean;
  transitionTimeInSeconds?: number;
  delayTimeInSeconds?: number;
};

const getFadeRightStyles = ({
  visible,
  delayTimeInSeconds = 0,
  transitionTimeInSeconds = 1,
}: FadeProps) => ({
  transition: `all ${transitionTimeInSeconds}s ease-in ${delayTimeInSeconds}s`,
  opacity: visible ? '1' : '0',
  transform: visible ? '' : 'translateX(100%)',
});

const About: React.FC = () => {
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const isInViewport = useIsInViewport(elementRef);

  return (
    <S.Container ref={elementRef}>
      <p style={getFadeRightStyles({ visible: isInViewport })}>
        Meu nome é Karan,
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 0.5,
        })}
      >
        Sou Desenvolvedor Full-Stack JavaScript.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 1,
        })}
      >
        Formado em Análise e Desenvolvimento de Sistemas pela Universidade Jorge
        Amado - SSA/BA/BR.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 1.5,
        })}
      >
        Atuo com desenvolvimento de software desde 2015 e tenho dedicado minha
        carreira na construção de soluções inovadoras e disruptivas.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 2,
        })}
      >
        Sou um grande entusiasta de novas tecnologias, qualidade de software e
        boas práticas de desenvolvimento.
      </p>
    </S.Container>
  );
};

export default About;
