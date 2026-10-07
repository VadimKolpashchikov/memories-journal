const formatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
});

const getSortItemsByDate = (direction = 'desk') => {
  const directionSortNumber = direction === 'ask' ? 1 : -1;
  const reflectedSortNumber = -1 * directionSortNumber;

  return (a, b) => {
    if (a.date > b.date) return directionSortNumber;
    if (a.date === b.date) return 0;
    return reflectedSortNumber;
  };
};

export { formatter, getSortItemsByDate };
