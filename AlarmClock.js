function setAlram(hour, minute) {
  const now = new Date();
  const alarmDate = new Date();
  alarmDate.setHours(hour);
  alarmDate.setMinutes(minute);

  const difference = alarmDate - now;
  console.log(now, alarmDate, difference);
}
setAlram(9, 44);
