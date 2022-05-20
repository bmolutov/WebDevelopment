def squirrel_play(temp, is_summer):
  return (not is_summer and 60 <= temp <= 90) or (is_summer and 60 <= temp <= 100)
