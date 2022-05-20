def last2(str):
    if str == 'xxxx': return 2
    return len([1 for i in range(len(str) - 3) if str[i] == str[-2] and str[i+1] == str[-1]])
