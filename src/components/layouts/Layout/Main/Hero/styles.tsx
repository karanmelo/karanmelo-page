import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background:
    radial-gradient(
      60rem 60rem at 15% 20%,
      rgba(135, 25, 204, 0.35),
      transparent 60%
    ),
    radial-gradient(
      50rem 50rem at 85% 80%,
      rgba(46, 204, 113, 0.18),
      transparent 55%
    ),
    linear-gradient(160deg, #1c1030 0%, #251233 45%, #16101f 100%);
`;

export const Grid = styled.div`
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(80% 60% at 50% 40%, black, transparent 100%);

  pointer-events: none;
`;
