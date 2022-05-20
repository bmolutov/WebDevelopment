n = input()
print(sum([int(n[i]) * (2 ** (len(n) - i - 1)) for i in range(len(n))]))