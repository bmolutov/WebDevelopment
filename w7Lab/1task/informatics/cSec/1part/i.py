n = int(input())
cnt = 0

for i in range(1, n+1):
    if i * i <= n:
        if n % i == 0: cnt += 1
    else: break

for i in range(1, n+1):
    if i * i < n:
        if n % i == 0: cnt += 1
    else: break

print(cnt)