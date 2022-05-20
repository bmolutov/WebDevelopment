n = int(input())
l = [int(input()) for i in range(n)]
print(len([i for i in l if i == 0]))