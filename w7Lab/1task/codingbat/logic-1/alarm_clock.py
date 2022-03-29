def alarm_clock(day, vacation):
  return '10:00' if (not vacation and (day == 0 or day == 6)) or (vacation and (1 <= day <= 5)) else ('off' if vacation and (day == 0 or day == 6) else '7:00')
