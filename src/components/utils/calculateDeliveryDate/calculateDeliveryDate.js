export function calculateDeliveryDate() {
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = futureDate.toLocaleDateString("ru-RU", options);
  return formattedDate;
}

export function calculateCurrentDate() {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("ru-RU", options);
  return formattedDate;
}
