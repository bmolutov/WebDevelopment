def date_fashion(you, date):
  ans = 1
  if you >= 8 or date >= 8:
    ans = 2
  if you <= 2 or date <= 2:
    ans = 0
  return ans
  