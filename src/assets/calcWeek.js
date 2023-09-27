function calcWeek() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  return (Math.ceil(days / 7) - 38) % 11;
}

export default calcWeek;
