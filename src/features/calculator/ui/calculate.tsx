import { useState } from 'react';
import { AnnualData } from 'shared/models';
import { Container } from 'shared/ui/grid';
import { Header, Inputs } from 'widgets/header';
import { Result } from 'widgets/result';

import { calculateAnnualData } from '../lib/investment.ts';

export function Calculator() {
  const [annualData, setAnnualData] = useState<AnnualData[]>([]);

  const onSubmitHandler = ({
    months,
    rate,
    initial_investment: initialInvestment,
    contribution,
  }: Inputs) => {
    const result = calculateAnnualData(
      +months,
      +rate,
      +initialInvestment,
      +contribution,
    );

    setAnnualData(
      result,
    );
  };
  return (
    <Container>
      <Header onSubmit={onSubmitHandler} />
      <Result annualData={annualData} />
    </Container>
  );
}
