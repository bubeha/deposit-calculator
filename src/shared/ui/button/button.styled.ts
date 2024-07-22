import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  outline: transparent solid 2px;
  outline-offset: 2px;
  border: 1px solid #3182ce;
  border-radius: 0.375rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  color: #fff;
  min-width: 2.5rem;
  background-color: #3182ce;
  font-weight: bold;

  cursor: pointer;

  transition: background-color ease-in-out 0.3s, border-color ease-in-out 0.3s;

  &:hover {
    background-color: #2b6cb0;
    border-color: #2b6cb0;
  }
`;
