def array123(nums):
  return True if len([1 for i in range(len(nums) - 3 + 1) if nums[i:i+3] == [1,2,3]]) > 0 else False
  