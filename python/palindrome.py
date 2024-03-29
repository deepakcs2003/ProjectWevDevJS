
def isPalindrome(s):
    return s == s[::-1]
str=input("please enter you string:")
ans = isPalindrome(str)
if ans:
    print("Yes")
else:
    print("No")