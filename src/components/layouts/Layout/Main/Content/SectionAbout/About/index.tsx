import React from 'react';

import { useIsInViewport } from 'hooks';

import * as S from './styles';

interface FadeProps {
  visible: boolean;
  transitionTimeInSeconds?: number;
  delayTimeInSeconds?: number;
}

const getFadeRightStyles = ({
  visible,
  delayTimeInSeconds = 0,
  transitionTimeInSeconds = 1,
}: FadeProps) => ({
  transition: `all ${transitionTimeInSeconds}s ease-in ${delayTimeInSeconds}s`,
  opacity: visible ? '1' : '0',
  transform: visible ? '' : 'translateX(100%)',
});

interface AboutProps {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
}

const About: React.FC<AboutProps> = ({ elementRef }) => {
  const isInViewport = useIsInViewport(elementRef);

  return (
    <S.Container>
      <p style={getFadeRightStyles({ visible: isInViewport })}>
        Sou um líder com atuação estratégica em pagamentos, KYC, Liveness e
        produtos de compliance.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 0.5,
        })}
      >
        Lidero equipes multidisciplinares, conectando tecnologia diretamente aos
        objetivos de negócio, com experiência em gestão de pessoas, formação de
        cultura e metodologias ágeis.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 0.7,
        })}
      >
        Atuo com arquitetura distribuída, monitoramento e observabilidade,
        operação de ambientes críticos na AWS e bancos de dados, além da gestão
        de eventos sensíveis como ataques DDoS, tentativas de fraude e
        incidentes de segurança da informação.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 0.9,
        })}
      >
        Participo ativamente do desenho estratégico das soluções, buscando
        equilibrar experiência, segurança e resultados para o negócio — porque
        tecnologia não é apenas execução, é posicionamento competitivo,
        crescimento sustentável e tomada de decisão orientada por impacto.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 1.1,
        })}
      >
        Construo e desenvolvo times de alta performance, com autonomia e
        responsabilidade, atuando fortemente na gestão de produto e não apenas
        na execução técnica.
      </p>
      <p
        style={getFadeRightStyles({
          visible: isInViewport,
          delayTimeInSeconds: 1.3,
        })}
      >
        Tomo decisões estratégicas que equilibram inovação, risco e resultado,
        trabalhando próximo do negócio e da diretoria e participando ativamente
        da estratégia da empresa.
      </p>
    </S.Container>
  );
};

export default About;
