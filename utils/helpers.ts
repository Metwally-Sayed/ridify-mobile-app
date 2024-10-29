export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  // Format as MM/DD/YYYY
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
