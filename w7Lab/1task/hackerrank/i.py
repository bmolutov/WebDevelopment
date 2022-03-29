if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    arr.sort()
    mx1 = arr[0]
    mx2 = arr[0]
    for i in arr:
        if i > mx2:
            mx1 = mx2
            mx2 = i
    print(mx1)
