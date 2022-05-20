n = int(input())
l = list(map(int, input().split(' ')))
print(len([l[i] for i in range(1, n - 1) if l[i] > l[i - 1] and l[i] > l[i + 1]]))