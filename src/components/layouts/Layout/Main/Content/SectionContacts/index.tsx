import React from 'react';

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
      <S.Title>Onde me achar</S.Title>
      <S.Content>
        <S.Card
          onClick={() =>
            handleCardOnClick(
              'https://www.linkedin.com/in/karan-melo-14098aa3/'
            )
          }
        >
          <S.ContactIcon src={LinkedInIcon} />
          <S.ContactLabel>LinkedIn</S.ContactLabel>
        </S.Card>
        <S.Card
          onClick={() =>
            handleCardOnClick('https://www.instagram.com/karan_melo/')
          }
        >
          <S.ContactIcon src={InstagramIcon} />
          <S.ContactLabel>Instagram</S.ContactLabel>
        </S.Card>
        <S.Card
          onClick={() => handleCardOnClick('https://github.com/karanmelo')}
        >
          <S.ContactIcon src={GithubIcon} />
          <S.ContactLabel>Github</S.ContactLabel>
        </S.Card>
        <S.Card href="mailto:karan.melo@gmail.com?subject=Ol%C3%A1%20Karan">
          <S.ContactIcon src={Gmailcon} />
          <S.ContactLabel>Gmail</S.ContactLabel>
        </S.Card>
      </S.Content>
    </S.Section>
  );
};
