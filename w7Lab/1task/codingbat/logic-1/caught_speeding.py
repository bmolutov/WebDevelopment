def caught_speeding(speed, is_birthday):
  if not is_birthday: ans = 0 if speed <= 60 else (1 if 61 <= speed <= 80 else 2)
  else: ans = 0 if speed <= 65 else (1 if 66 <= speed <= 85 else 2)
  return ans
