import React from 'react';

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (entry: T) => React.ReactNode
}
