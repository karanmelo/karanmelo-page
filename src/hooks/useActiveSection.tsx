import { useEffect, useState } from 'react';

const REFERENCE_OFFSET = 100;

const getSectionTitle = (section: HTMLElement) =>
  section.querySelector('h1, h2, h3') ?? section;

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return undefined;

    const titlesById = sections.map((section) => ({
      id: section.id,
      title: getSectionTitle(section),
    }));

    const updateActiveSection = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (scrolledToBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      let current: string | null = null;

      titlesById.forEach(({ id, title }) => {
        if (title.getBoundingClientRect().top <= REFERENCE_OFFSET) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, false);
    window.addEventListener('resize', updateActiveSection, false);

    return () => {
      window.removeEventListener('scroll', updateActiveSection, false);
      window.removeEventListener('resize', updateActiveSection, false);
    };
  }, [sectionIds]);

  return activeSection;
};
