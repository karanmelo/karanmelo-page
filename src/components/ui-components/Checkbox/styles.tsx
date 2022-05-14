import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;

  & > *:first-child {
    margin-right: 16px;
  }
`;

export const LabelSwitch = styled.label`
  position: relative;
  min-width: 48px;
  height: 24px;

  display: inline-block;

  & input {
    display: none;
  }
`;

export const Input = styled.input`
  &:checked + div {
    background: #65b2ff 0% 0% no-repeat padding-box;
  }

  &:checked + div:before {
    left: 2px;
    background: #ffffff 0% 0% no-repeat padding-box;
    transform: translateX(26px);
  }
`;

export const Label = styled.label`
  position: absolute;
  width: calc(100% - 64px);
  left: 64px;
  height: auto;

  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  color: #666666;
  opacity: 1;
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  white-space: nowrap;
  color: #666666;
  opacity: 1;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Slider = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e6e6e6 0% 0% no-repeat padding-box;
  border-radius: 23px;
  cursor: pointer;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    width: 16px;
    height: 16px;
    left: 4px;
    bottom: 4px;
    background: #cccccc 0% 0% no-repeat padding-box;
    border-radius: 50%;
    transition: 0.4s;
  }
`;
