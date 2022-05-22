import styled from 'styled-components';

type StarProps = {
  color: string;
  size: number;
};

export const Star = styled.i<StarProps>`
  position: relative;

  display: inline-block;
  width: 0;
  height: 0;

  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: ${({ color }) => `0.7em solid ${color}`};
  border-left: 0.3em solid transparent;

  font-size: ${({ size }) => `${size}rem`};

  &:before,
  &:after {
    content: '';

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: ${({ color }) => `0.7em solid ${color}`};
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
`;
