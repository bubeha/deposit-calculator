import { AnnualData } from '../type/annual-data.ts';

export function calculateAnnualData(
  months: number,
  rate: number,
  initialInvestment: number,
  contribution: number,
): AnnualData[] {
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
  }

  return annualData;
}
