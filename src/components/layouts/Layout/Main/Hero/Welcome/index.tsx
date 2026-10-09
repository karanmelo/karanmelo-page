import React from 'react';

import * as S from './styles';

const Welcome: React.FC = () => (
  <S.Container>
    <S.Eyebrow>Head of Technology</S.Eyebrow>
    <S.Name>Karan Melo</S.Name>
    <S.Role>Pagamentos · KYC & Liveness · IA</S.Role>
    <S.Subtitle>
      Lidero equipes multidisciplinares conectando tecnologia diretamente aos
      objetivos de negócio, com atuação estratégica em arquitetura distribuída,
      produtos de pagamento, inteligência artificial e gestão de ambientes
      críticos.
    </S.Subtitle>
    <S.Actions>
      <S.Cta href="#about" $variant="secondary">
        Sobre mim
      </S.Cta>
      <S.Cta href="#contacts" $variant="primary">
        Fale comigo
      </S.Cta>
    </S.Actions>
  </S.Container>
);

export default Welcome;
