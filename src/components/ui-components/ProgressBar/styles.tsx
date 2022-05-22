import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 20px;
  width: 100%;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.div`
  font-family: Roboto;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Bar = styled.div<{ progress: number }>`
  height: 5px;
  width: 100%;

  position: relative;

  background-color: var(--color-light-gray);
  border-radius: 8px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    max-width: 100%;
    width: ${(props) => props.progress}%;
    min-width: 10%;

    border-radius: 8px;

    transition: all 0.6s linear 1s;

    ${({ progress }) => {
      if (progress < 25) {
        return css`
          background-color: #c0392b;
        `;
      }
      if (progress < 75) {
        return css`
          background-color: #f1c40f;
        `;
      }
      if (progress < 100) {
        return css`
          background-color: #3498db;
        `;
      }
      return css`
        background-color: #2ecc71;
      `;
    }}
  }
`;

export const BarPin = styled.div<{ progress: number }>`
  position: absolute;
  margin-left: ${({ progress }) => `calc(${progress}% - 10px)`};
  top: -4px;

  width: 12px;
  height: 12px;

  border-radius: 50%;

  transition: all 0.6s linear 1s;

  ${({ progress }) => {
    if (progress < 25) {
      return css`
        background-color: #c0392b;
      `;
    }
    if (progress < 75) {
      return css`
        background-color: #f1c40f;
      `;
    }
    if (progress < 100) {
      return css`
        background-color: #3498db;
      `;
    }
    return css`
      background-color: #2ecc71;
    `;
  }}
`;

export const Label = styled.div`
  min-width: 35px;

  font-size: 1.6rem;
  font-family: Roboto;
  text-align: end;
  color: ${(props) => props.theme.colors.text};
`;
