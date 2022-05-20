def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)

def round10(num):
  t = num % 10
  if t >= 5:
    num += (10 - t)
  else:
    num -= t
  return num
