export default function iterateThroughObject(reportWithIterator) {
  let i = 0;
  const length = reportWithIterator.length;
  do {
    return (A[i] + ` | `);
    i++;
  } while (i < length - 1);
  return reportWithIterator(length - 1)
 }
