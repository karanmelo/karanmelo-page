import React from 'react';

import { ContactCard } from 'components/ui-components';

import { contacts } from './contacts';
import * as S from './styles';

export const SectionContacts: React.FC = () => (
  <S.Section id="contacts">
    <S.Title>Onde me encontrar</S.Title>
    <S.Content>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          label={contact.label}
          handle={contact.handle}
          href={contact.href}
          icon={contact.icon}
          accentColor={contact.accentColor}
        />
      ))}
    </S.Content>
  </S.Section>
);
