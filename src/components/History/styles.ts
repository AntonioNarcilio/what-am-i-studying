import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  text-align: center;
  margin: 10px;

  button {
    background: ${(props) => props.theme.colors.yellow[500]};
    padding: 10px 20px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
`;
