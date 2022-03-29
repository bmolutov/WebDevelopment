def sum13(nums):
  # 1
  if len(nums) == 0: return 0
  if len(nums) == 1: 
    return nums[0] if nums[0] != 13 else 0
  # 2
  ans = [nums[i] for i in range(1, len(nums)) if nums[i-1] != 13]
  if nums[0] != 13: ans.append(nums[0])
  if len(ans) > 0 and ans[0] == 13: ans.pop(0)
  # 3
  ans = [i for i in ans if i != 13]
  # 4
  return sum(ans)
