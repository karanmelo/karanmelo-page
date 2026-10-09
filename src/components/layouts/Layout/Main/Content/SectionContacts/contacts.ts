import { StaticImageData } from 'next/image';

import GithubIcon from '../../../../../../assets/github.png';
import InstagramIcon from '../../../../../../assets/instagram.png';
import LinkedInIcon from '../../../../../../assets/linkedin.png';

export interface ContactLink {
  id: string;
  label: string;
  handle: string;
  href: string;
  icon: StaticImageData;
  accentColor: string;
}

export const contacts: ContactLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/karan-melo',
    href: 'https://www.linkedin.com/in/karan-melo-14098aa3/',
    icon: LinkedInIcon,
    accentColor: '#0a66c2',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@karan_melo',
    href: 'https://www.instagram.com/karan_melo/',
    icon: InstagramIcon,
    accentColor: '#e1306c',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@karanmelo',
    href: 'https://github.com/karanmelo',
    icon: GithubIcon,
    accentColor: 'var(--color-violet)',
  },
];
