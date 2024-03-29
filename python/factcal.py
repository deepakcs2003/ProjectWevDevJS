factNum=int(input("enter the number to calculate the factorial:"))
factCal=1
for x in range(factNum):
    factCal=+factCal+factCal*x
print("the factorial of number is:",factCal)