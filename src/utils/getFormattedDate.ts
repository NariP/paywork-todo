interface I_options {
  weekday: 'long' | 'short' | 'narrow';
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day: 'numeric' | '2-digit';
  formatMatcher?: 'best fit' | 'basic';
}
const getFormattedDate = (date: Date): any => {
  const options: I_options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('kr-KR', options);
};
export default getFormattedDate;
