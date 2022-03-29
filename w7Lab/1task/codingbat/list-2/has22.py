def has22(nums):
  return True if len([1 for i in range(len(nums)-1) if nums[i] == 2 and nums[i+1] == 2]) > 0 else False
