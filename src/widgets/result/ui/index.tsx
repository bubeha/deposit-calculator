import { AnnualData } from 'shared/models';
import { Table } from 'shared/ui/table/ui';

import { tableColumns } from '../config/table-columns.ts';

type ResultProps = {
  annualData: AnnualData[]
}

export function Result({ annualData }: ResultProps) {
  if (annualData.length === 0) {
    return <></>;
  }

  return (
    <Table<AnnualData>
      index="year"
      columns={tableColumns}
      data={annualData}
    />
  );
}
