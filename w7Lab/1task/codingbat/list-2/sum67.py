def sum67(nums):
  block = False
  ans = 0
  for i in nums:
    if i == 6:
      block = True
    if block and i == 7:
      block = False
      continue
    if not block:
      ans += i
  return ans