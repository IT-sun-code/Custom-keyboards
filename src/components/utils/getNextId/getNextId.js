export function getNextId(cards) {
  let maxId = 0;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].id > maxId) {
      maxId = cards[i].id;
    }
  }
  return maxId + 1;
}
