export const getSkillLevelColor = (value: number) => {
  if (value < 25) return '#c0392b';
  if (value < 75) return '#f1c40f';
  if (value < 90) return '#3498db';
  return '#2ecc71';
};

export const getSkillLevelLabel = (value: number) => {
  if (value < 25) return 'Básico';
  if (value < 75) return 'Intermediário';
  if (value < 90) return 'Avançado';
  return 'Especialista';
};
