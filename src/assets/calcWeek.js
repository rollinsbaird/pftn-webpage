function calcWeek() {
  const currentDate = new Date(2024,);
  const startDate = new Date(currentDate.getFullYear(), 0, 8);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  return (Math.ceil(days / 7)) % 11;
}

export default calcWeek;
