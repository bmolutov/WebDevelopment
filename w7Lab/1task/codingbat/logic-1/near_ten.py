def near_ten(num):
  ind = 0
  checker = [None] * 5
  for i in range(-2,3,1):
    checker[ind] = True if (num + i) % 10 == 0 else False
    ind += 1
  return True if len([1 for i in checker if i == True]) > 0 else False
