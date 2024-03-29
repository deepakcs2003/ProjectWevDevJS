year=int(input("enter the year to check its leap year or not:"))
if (year%4==0)and((year%400==0)and(year%100!=0)):
    print("the given number is leap year")
else:
    print("the given number is not a leap year")
