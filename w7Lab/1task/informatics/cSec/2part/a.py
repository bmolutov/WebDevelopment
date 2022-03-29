import math
n = int(input())
print(*[i * i for i in range(1, int(math.sqrt(n)) + 1) if i * i <= n], sep='\n')