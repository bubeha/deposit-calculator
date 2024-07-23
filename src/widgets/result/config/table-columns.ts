import { AnnualData } from 'shared/models';
import { Column } from 'shared/ui/table/type/column';

export const tableColumns: Column<AnnualData>[] = [
  {
    key: 'year',
    label: 'Year',
  },
  {
    key: 'interest',
    label: 'Interest',
    render(entry) {
      return entry.interest.toFixed(2);
    },
  },
  {
    key: 'valueEndOfYear',
    label: 'Value End Of Year',
    render(entry) {
      return entry.interest.toFixed(2);
    },
  },
  {
    key: 'contribution',
    label: 'Contribution',
  },
];
