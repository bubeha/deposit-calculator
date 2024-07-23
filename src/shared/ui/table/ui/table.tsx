import { Column } from 'shared/ui/table/type/column';

import { Table as StyledTable } from './table.styled.ts';

type TableProps<T> = {
  index: keyof T;
  columns: Column<T>[];
  data: T[],
}

export function Table<T>({ index, columns, data }: TableProps<T>) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map(({ label }) => <th>{label}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row[index] as string}>
            {columns.map(({ key, render }) => (
              <td key={`${row[index] as string}-${key as string}`}>
                {render ? render(row) : row[key] as string}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}
