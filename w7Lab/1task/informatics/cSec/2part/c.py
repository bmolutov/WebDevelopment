import math
print(*[2 ** i for i in range(int(math.log(int(input()), 2)) + 1)])