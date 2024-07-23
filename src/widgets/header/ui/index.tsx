import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/form/input';
import { Col, Row } from 'shared/ui/grid';
import { Inputs } from 'widgets/header/types/inputs';

import { Header as StyledHeader } from './header.styled';

type HeaderProps = {
  onSubmit: SubmitHandler<Inputs>;
}

export function Header({ onSubmit }: HeaderProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <StyledHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Input
              type="number"
              label="Initial investment"
              {...register(('initial_investment'))}
            />
          </Col>
          <Col>
            <Input
              type="number"
              label="Monthly contribution"
              {...register(('contribution'))}
            />
          </Col>
          <Col>
            <Input
              type="number"
              label="Investment length"
              {...register(('months'))}
            />
          </Col>
          <Col>
            <Input
              type="number"
              label="Interest rate"
              {...register(('rate'))}
            />
          </Col>
        </Row>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </StyledHeader>
  );
}
