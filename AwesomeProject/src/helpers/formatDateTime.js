const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export function formatDateTime(milliseconds) {
  const currentDate = new Date(milliseconds);
  // Функция для добавления ведущего нуля, если число < 10
  function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  // Получение компонентов даты и времени
  const day = addLeadingZero(currentDate.getDate());
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = addLeadingZero(currentDate.getHours());
  const minutes = addLeadingZero(currentDate.getMinutes());

  // Формирование строки с требуемым форматом
  const formattedDate = `${day} ${month}, ${year} | ${hours}:${minutes}`;

  return formattedDate;
}
