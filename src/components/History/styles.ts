import styled from 'styled-components';

export const HistoryContainer = styled.div`
  /* height: 15rem; */
  overflow-x: hidden;
  overflow-y: scroll;

::-webkit-scrollbar {
    width: 0rem;
    height: 0rem;
  }
`;

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
