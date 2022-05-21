import styled from 'styled-components';

import { mediaQueries } from '../../../../styles/mediaQueries';

type ContainerProps = {
  active: boolean;
};

export const Header = styled.header<ContainerProps>`
  position: fixed;
  width: 100%;
  min-height: 8rem;
  padding: 0 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: ${(props) =>
    props.active ? 'var(--background-white)' : props.theme.colors.text};
  background-color: ${(props) =>
    props.active ? 'transparent' : props.theme.colors.body};
  box-shadow: ${(props) =>
    props.active ? 'transparent' : '0px 0px 13px -6px black'};

  -webkit-transition: background-color 0.5s ease-out;
  -moz-transition: background-color 0.5s ease-out;
  -o-transition: background-color 0.5s ease-out;
  transition: background-color 0.5s ease-out;

  z-index: 10;

  ${mediaQueries('sm')`
    padding: 0 8rem;
  `};

  ${mediaQueries('md')`
    padding: 0 10%;
  `};

  ${mediaQueries('lg')`
    padding: 0 15%;
  `};
`;
