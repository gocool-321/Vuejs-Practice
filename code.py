def game(cls, input1):
    maxPalindrome = int(1)
    palindrome = str(input1[0])
    n = len(input1)
    for i in range(n):
        for j in range(i, n-1):
            substr = str(input1[i:j+1])
            len_s = j+1-i
            if(substr == substr[::-1]):
                if(len_s > maxPalindrome):
                    maxPalindrome = len_s
                    palindrome = substr
    print(palindrome)


game(1, "123434532455321")
game(1, "ACGTGTCAAAATCG")
