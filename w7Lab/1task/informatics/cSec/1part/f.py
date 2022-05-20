x = input()
print(int(x[0] + x[-1:0:-1]) if int(x) < 0 else int(x[-1::-1]))