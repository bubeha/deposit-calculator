import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;
