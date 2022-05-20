n = int(input())
l = list(map(int, input().split(' ')))
print(len([l[i] for i in range(1, n) if l[i] > l[i-1]]))