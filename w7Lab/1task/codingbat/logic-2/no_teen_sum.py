def no_teen_sum(a, b, c):
  a = 0 if 13 <= a <= 19 and a != 15 and a != 16 else a
  b = 0 if 13 <= b <= 19 and b != 15 and b != 16 else b
  c = 0 if 13 <= c <= 19 and c != 15 and c != 16 else c
  return a + b + c
