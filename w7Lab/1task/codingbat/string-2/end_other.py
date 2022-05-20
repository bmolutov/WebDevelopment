def end_other(a, b):
  a = a.lower()
  b = b.lower()
  if len(a) > len(b): a, b = b, a
  return True if b[len(b)-len(a):len(b)] == a else False
