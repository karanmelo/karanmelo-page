export interface TimelineRole {
  title: string;
  period: string;
}

export interface TimelineEntry {
  id: string;
  type: 'work' | 'education';
  organization: string;
  location: string;
  period: string;
  roles: TimelineRole[];
  description: string;
}

export const experiences: TimelineEntry[] = [
  {
    id: 'pay2free',
    type: 'work',
    organization: 'Pay2free',
    location: 'Belo Horizonte, MG',
    period: 'ago/2023 - atual',
    roles: [
      { title: 'Head of Technology', period: 'jan/2025 - atual' },
      { title: 'Tech Lead', period: 'ago/2023 - jan/2025' },
    ],
    description:
      'Atuação estratégica em pagamentos, KYC, Liveness e produtos de compliance, liderando equipes multidisciplinares e conectando tecnologia diretamente aos objetivos de negócio.',
  },
  {
    id: 'nata-house',
    type: 'work',
    organization: 'nata.house',
    location: 'Belo Horizonte, MG',
    period: 'ago/2021 - ago/2023 · 2 anos 1 mês',
    roles: [
      { title: 'Analista Desenvolvedor Pleno e Líder de Projeto', period: '' },
    ],
    description:
      'Liderança técnica de times multidisciplinares em arquiteturas de microsserviços, com destaque para o sistema logístico da Claro Colômbia. Participação ativa no comitê de Gente & Gestão e na organização de eventos como Hacktoberfest.',
  },
  {
    id: 'zallpy',
    type: 'work',
    organization: 'Zallpy Digital',
    location: 'Salvador, BA',
    period: 'jun/2021 - ago/2021 · 3 meses',
    roles: [{ title: 'Desenvolvedor Full Stack Pleno', period: '' }],
    description:
      'Desenvolvimento full-stack em projetos de diferentes clientes e segmentos.',
  },
  {
    id: 'makerplanet',
    type: 'work',
    organization: 'MakerPlanet Informática',
    location: 'Salvador, BA',
    period: 'jan/2018 - jun/2021 · 3 anos 6 meses',
    roles: [{ title: 'Analista de Sistemas', period: '' }],
    description:
      'Desenvolvimento full-stack com Node.js e React, bibliotecas Java para integração com leitores biométricos e soluções de pagamento (Cielo, Rede), e pesquisa e desenvolvimento em IoT no projeto Trackfy.',
  },
  {
    id: 'cuboit',
    type: 'work',
    organization: 'CuboIT',
    location: 'Salvador e Região, BA',
    period: 'jul/2017 - jan/2018 · 7 meses',
    roles: [{ title: 'Desenvolvedor', period: '' }],
    description:
      'Desenvolvimento de sistema web sobre a plataforma Maker, com modelagem de dados e integrações entre SQL Server e PostgreSQL.',
  },
  {
    id: 'softwell',
    type: 'work',
    organization: 'Softwell Solutions Ltda.',
    location: 'Salvador, BA',
    period: 'mar/2014 - ago/2017 · 3 anos 6 meses',
    roles: [
      { title: 'Analista de Sistemas Jr.', period: 'mar/2015 - ago/2017' },
      { title: 'Estagiário', period: 'mar/2014 - fev/2015' },
    ],
    description:
      'Suporte técnico e consultoria na implantação da plataforma Maker All para aplicações web e mobile. Vencedor do Prêmio Melhores Práticas de Estágio 2014.',
  },
  {
    id: 'unijorge',
    type: 'education',
    organization: 'Unijorge',
    location: 'Salvador, BA',
    period: '2012 - 2014',
    roles: [
      {
        title: 'Tecnológico em Análise e Desenvolvimento de Sistemas',
        period: '',
      },
    ],
    description:
      'Formação em Tecnologia da Informação que deu início à minha trajetória em tecnologia.',
  },
];
