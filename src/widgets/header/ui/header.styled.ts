import { Button } from 'shared/ui/button/button.styled';
import { Col, Row } from 'shared/ui/grid';
import styled from 'styled-components';

export const Header = styled.section`
  margin-top: 2rem;

  ${Row} {
    justify-content: center;
  }

  ${Col} {
    flex-basis: 50%;
    margin-top: 2rem;
  }

  ${Button} {
    width: 100%;
    margin-top: 2rem;
  }
`;
