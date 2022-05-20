def make_chocolate(small, big, goal):
  result = 0
  small_cnt = 0
  good = True
  while result < goal and good:
    if big > 0 and result + 5 <= goal:
      result += 5
      big -= 1
    elif small > 0 and result + small >= goal:
      diff = goal - result
      result += diff
      small -= diff
      small_cnt += diff
    else: 
      good = False
  return small_cnt if good else -1

# there is some problem