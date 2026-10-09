import { StaticImageData } from 'next/image';

import ColaborationIcon from '../../../../../../../assets/colaboration.png';
import ComunitcationIcon from '../../../../../../../assets/comunication.png';
import CriativityIcon from '../../../../../../../assets/criativity.png';
import FlexibilityIcon from '../../../../../../../assets/flexibility.png';
import LeadershipIcon from '../../../../../../../assets/leadership.png';
import ProactivityIcon from '../../../../../../../assets/proactivity.png';
import ResilienceIcon from '../../../../../../../assets/resilience.png';

export interface SoftSkill {
  id: string;
  label: string;
  value: number;
  quantity: number;
  icon: StaticImageData;
}

export const softSkills: SoftSkill[] = [
  {
    id: 'colaboration',
    label: 'Colaboração',
    value: 5,
    quantity: 5,
    icon: ColaborationIcon,
  },
  {
    id: 'comunication',
    label: 'Comunicação',
    value: 5,
    quantity: 5,
    icon: ComunitcationIcon,
  },
  {
    id: 'proactivity',
    label: 'Proatividade',
    value: 5,
    quantity: 5,
    icon: ProactivityIcon,
  },
  {
    id: 'leadership',
    label: 'Liderança',
    value: 4,
    quantity: 5,
    icon: LeadershipIcon,
  },
  {
    id: 'flexibility',
    label: 'Flexibilidade',
    value: 4,
    quantity: 5,
    icon: FlexibilityIcon,
  },
  {
    id: 'resilience',
    label: 'Resiliência',
    value: 4,
    quantity: 5,
    icon: ResilienceIcon,
  },
  {
    id: 'criativity',
    label: 'Criatividade',
    value: 4,
    quantity: 5,
    icon: CriativityIcon,
  },
];
