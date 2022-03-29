def array_front9(nums):
  return True if len([1 for i in range(min(len(nums), 4)) if nums[i] == 9]) > 0 else False
