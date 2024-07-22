import { useState } from 'react';
import { Header, Inputs } from 'widgets/header';
import { Result } from 'widgets/result';

type AnnualData = {
  year: number,
  interest: number,
  valueEndOfYear: number,
  contribution: number,
}

export function Dashboard() {
  const [result, setResult] = useState<AnnualData[]>([]);

  const onSubmitHandler = ({
    months, rate, initial_investment: initialInvestment, contribution,
  }: Inputs) => {
    const annualData = [];

    let investmentValue = +initialInvestment;

    for (let i = 0; i < +months; i++) {
      const interestEarnedInYear = +investmentValue * (+rate / 100);
      investmentValue += interestEarnedInYear + +contribution;

      annualData.push({
        year: i + 1,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        contribution: +contribution,
      });

      setResult(annualData);
    }
  };

  return (
    <>
      <Header onSubmit={onSubmitHandler} />
      <Result annualData={result} />
    </>
  );
}
