import React from 'react';

import Image, { StaticImageData } from 'next/image';

import * as S from './styles';

interface ContactCardProps {
  label: string;
  handle: string;
  href: string;
  icon: StaticImageData;
  accentColor: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  label,
  handle,
  href,
  icon,
  accentColor,
}) => {
  const isExternalLink = href.startsWith('http');

  return (
    <S.Card
      href={href}
      title={label}
      target="_blank"
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      $accentColor={accentColor}
    >
      <S.IconWrapper>
        <Image src={icon} alt="" />
      </S.IconWrapper>
      <S.Label>{label}</S.Label>
      <S.Handle>{handle}</S.Handle>
    </S.Card>
  );
};
