import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
  width: 100%;
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Container = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`;
