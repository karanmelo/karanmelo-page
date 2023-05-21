import React from 'react';
import Image from 'next/image';

import GithubIcon from '../../../../../../assets/github.png';
import Gmailcon from '../../../../../../assets/gmail.png';
import InstagramIcon from '../../../../../../assets/instagram.png';
import LinkedInIcon from '../../../../../../assets/linkedin.png';
import * as S from './styles';

export const SectionContacts: React.FC = () => {
  const handleCardOnClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <S.Section id="contacts">
      <S.Title>Onde me encontrar</S.Title>
      <S.Content>
        <S.Card
          title="LinkedIn"
          onClick={() =>
            handleCardOnClick(
              'https://www.linkedin.com/in/karan-melo-14098aa3/'
            )
          }
        >
          <Image src={LinkedInIcon} alt='' />
          <S.ContactLabel>LinkedIn</S.ContactLabel>
        </S.Card>
        <S.Card
          title="Instagram"
          onClick={() =>
            handleCardOnClick('https://www.instagram.com/karan_melo/')
          }
        >
          <Image src={InstagramIcon} alt='' />
          <S.ContactLabel>Instagram</S.ContactLabel>
        </S.Card>
        <S.Card
          title="GitHub"
          onClick={() => handleCardOnClick('https://github.com/karanmelo')}
        >
          <Image src={GithubIcon} alt='' />
          <S.ContactLabel>GitHub</S.ContactLabel>
        </S.Card>
        <S.Card
          title="Gmail"
          href="mailto:karan.melo@gmail.com?subject=Ol%C3%A1%20Karan,%20%3Cassunto%3E"
        >
          <Image src={Gmailcon} alt='' />
          <S.ContactLabel>Gmail</S.ContactLabel>
        </S.Card>
      </S.Content>
    </S.Section>
  );
};
