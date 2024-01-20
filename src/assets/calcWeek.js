function calcWeek() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 16);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  return (Math.ceil((days / 7) % 15));
}

export default calcWeek;
