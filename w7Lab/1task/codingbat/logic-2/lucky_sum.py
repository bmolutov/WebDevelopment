def lucky_sum(a, b, c):
  l = [a, b, c]
  ans = 0
  for i in l:
    if i == 13:
      break
    ans += i
  return ans
