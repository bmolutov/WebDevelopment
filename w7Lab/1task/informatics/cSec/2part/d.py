from math import log
from math import floor
n = int(input())
print("YES" if log(n, 2) == floor(log(n, 2)) else "NO")