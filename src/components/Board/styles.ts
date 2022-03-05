import styled from 'styled-components';

export const BoardContainer = styled.div`
  width: 100%;
  min-height: 80vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    padding: 20px 0;
  }

  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 45%;
    margin-bottom: 2rem;
  }
`;
