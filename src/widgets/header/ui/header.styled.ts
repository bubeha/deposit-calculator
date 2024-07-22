import { Col, Row } from 'shared/ui/grid';
import styled from 'styled-components';

export const Header = styled.section`
  margin-top: 2rem;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;

  ${Row} {
    justify-content: center;
  }

  ${Col} {
    flex-basis: 50%;
    margin-top: 2rem;
  }
`;
