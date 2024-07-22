type ResultProps = {
  annualData: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    contribution: number,
  }[]
}

export function Result({ annualData }: ResultProps) {
  if (annualData.length === 0) {
    return <></>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Value End Of Year</th>
            <th>Contribution</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map(({
            year,
            interest,
            valueEndOfYear,
            contribution,
          }) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{interest}</td>
              <td>{valueEndOfYear}</td>
              <td>{contribution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
