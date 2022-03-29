if __name__ == '__main__':
    n = int(input())
    std = []

    for i in range(n):
        name = input()
        grade = float(input())
        std.append([name, grade])

    std = sorted(std, key=lambda student: student[1])
    mn = std[0][1]
    while std[0][1] == mn:
        std.remove(std[0])
    # std = filter(lambda student: student[1] != mn[1])

    std = sorted(std, key=lambda student: student[1])
    mn2 = std[0][1]
    ans = [i[0] for i in std if i[1] == mn2]
    ans = sorted(ans, key=lambda student: student[0])

    print(*ans, sep="\n")
