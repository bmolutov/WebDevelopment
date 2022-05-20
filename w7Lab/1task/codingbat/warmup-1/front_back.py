def front_back(str):
  if not str:
      return str  
  l = list(str)
  l[0], l[-1] = l[-1], l[0]
  return ''.join(l)