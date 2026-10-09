import React from 'react';

import { contacts } from 'components/layouts/Layout/Main/Content/SectionContacts/contacts';

import * as S from './styles';

export const Footer: React.FC = () => (
  <S.Footer>
    <S.Copy>
      <p>© Copyright 2026 Karan Melo. Todos os direitos reservados.</p>
      <p>Desenvolvido com ReactJS.</p>
    </S.Copy>
    <S.SocialLinks>
      {contacts.map((contact) => (
        <S.SocialLink
          key={contact.id}
          href={contact.href}
          target="_blank"
          rel="noreferrer"
          aria-label={contact.label}
        >
          <S.Icon src={contact.icon} alt="" />
        </S.SocialLink>
      ))}
    </S.SocialLinks>
  </S.Footer>
);
