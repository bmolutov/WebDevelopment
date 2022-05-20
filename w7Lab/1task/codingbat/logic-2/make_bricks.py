def make_bricks(small, big, goal):
  result = 0
  good = True
  while result < goal and good:
    if big > 0 and result + 5 <= goal:
        result += 5
        big -= 1
    elif small > 0 and result + small >= goal:
        diff = goal - result
        result += diff
        small -= diff
    else: 
      good = False
  return True if good else False