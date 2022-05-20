def max_end3(nums):
  mx = nums[0] if nums[0] > nums[len(nums)-1] else nums[len(nums)-1]
  return [mx, mx, mx]
