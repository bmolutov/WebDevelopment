def xyz_there(str):
  cnt = 1 if str[0:3] == 'xyz' else 0
  for i in range(0, len(str)-3+1):
    if str[i:i+3] == 'xyz' and str[i-1] != '.':
      cnt += 1
  return True if cnt > 0 else False
