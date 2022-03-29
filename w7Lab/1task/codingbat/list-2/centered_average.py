def centered_average(nums):
  mn = min(nums)
  mx = max(nums)
  for i in range(len(nums)):
    if nums[i] == mn:
      nums.pop(i)
      break
  for i in range(len(nums)):
    if nums[i] == mx:
      nums.pop(i)
      break
  return sum(nums) // len(nums)
