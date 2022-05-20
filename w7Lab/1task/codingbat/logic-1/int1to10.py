def in1to10(n, outside_mode):
  return (not outside_mode and 1 <= n <= 10) or (outside_mode and not (2 <= n <= 9))
