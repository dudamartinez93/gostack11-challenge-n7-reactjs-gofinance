import formatValue from './formatValue';

const formatTransactionListValue = (
  value: number,
  type: 'income' | 'outcome',
): string => {
  const returnedValue = formatValue(value);

  if (type === 'income') {
    return String(returnedValue);
  }
  return `- ${String(returnedValue)}`;
};

export default formatTransactionListValue;
