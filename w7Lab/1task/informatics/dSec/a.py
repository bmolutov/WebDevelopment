n = int(input())
l = list(map(int, input().split(' ')))
print(*[l[i] for i in range(n) if i % 2 == 0])