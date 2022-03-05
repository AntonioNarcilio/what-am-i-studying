import styled from 'styled-components';

export const SquareButton = styled.button`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(60px + .5vw);
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  border: none;

  :nth-child(1), :nth-child(4), :nth-child(7),
  :nth-child(2), :nth-child(5), :nth-child(8) {
    border-right: 1px solid #ccc;
  }
  :nth-child(1), :nth-child(2), :nth-child(3),
  :nth-child(4), :nth-child(5), :nth-child(6) {
    border-bottom: 1px solid #ccc;
  }

  ::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
