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

type AboutProps = {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
};

const About: React.FC<AboutProps> = ({ elementRef }) => {
  const isInViewport = useIsInViewport(elementRef);

  return (
    <S.Container>
      <p style={getFadeRightStyles({ visible: isInViewport })}>
        Olá, meu nome é Karan.
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
        Sou um grande entusiasta de novas tecnologias, gosto de estudar e
        discutir sobre qualidade de software, boas práticas de desenvolvimento e
        nas horas vagas jogar um pouco de CS:GO.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 2,
        })}
      >
        Amo a minha família incondicionalmente.
      </p>
    </S.Container>
  );
};

export default About;
