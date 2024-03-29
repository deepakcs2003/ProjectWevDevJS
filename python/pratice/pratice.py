# print("hello world")
# print("deepak,is use this")
# age =43
# name="deepak"
# print(age)
# print(name)
# rating=3.4
# print(rating)
# print(rating,type(rating))
# print(type(name))

# #arithmetic operation -------
# a=70
# b=5
# c=a+b
# print(c,  "a+b")
# print(a-b)
# print(a+b)
# print(a%b)
# print(a/b)
# print(a//b)
# print(a**b)

#  # Q) average of three number ---------
# a=9
# b=8
# c=4
# avg=(a+b+b)/3
# print(avg)

# # assignment operator

# a=45
# a+=3
# print(a)

# a/=3
# print(a)
# a-=3
# print(a)
# a*=4
# print(a)
# a%=5
# print(a)
# a**=4
# print(a)

# #conditional operator
# a=34
# b=43
# print("a>b" ,a>b)
# print("a<b", a<b)
# print("a>=b", a>=b)
# print("a<=b" ,a<=b)
# print("a!=b" , a!=b)
# print("a==b"  , a==b)

# # logical operator
# a=True
# b=False
# print(a and b)
# print(a  or b)
# print( not b)

# #input() and output()
# a=int(input("enter num1 "))
# b=int(input("enter num24 "))
# print(type(a))
# c=a*b
# print(c)

# # Q-2) wrtie a program to take marks of a user in english, math,ans science and print the average of these marks
# eng=int(input("matks of english :"))
# math=int(input("marks of math : "))
# science=int(input("marks of sceince: "))
# ave_marks=(eng+math+science)/3
# print("average of marks of student :" , ave_marks)

#conditionla statement 
# age=24
# if age>23:
#     print("you can vote")
#     print("you can drive")
# else:
#     print("you can not vote")
# print("hi, i am deepak")
# a=0
# if a>0:
#     print("num is postive")
# elif a==0:
#     print("number is zero")
# else:
#     print("number is negative")
# print("this is code for check number is positve, negative and zero")

# #range() function
# a= list(range(23,34,5))
# print(a)

# #for loop
# for x in range(10):
#     print(x*2,end=", ")
# names=["deepak", "ashish","vikas","magam","kushan"]
# for name in names:
#     print(name ,end=", ")

# # while loop
# n=5
# while n>=0:
#     print(n)
#     n-=1

# #break and continous
# for x in range(10):
#     if x>=6:
#         break
#     if x==3:
#         continue
#     print(x)

#string
# name=""""deepak
# i am this is code runner in present time yo yo
# hone
#  frina
#                      ks fka"""
# # print(name)
# name="deepak"
# print(name[3:5])
# print(name[:4])
# print(name[3:])
# print(name[0:5:2])
# print(name)
# print(name[::-1])
# print(name[0:5:-1])
# print(name[-3::-1])
# for char in name:
#     print(char, end=", ")
# surname="vishwakarma"
# print(" ")
# print(name+surname)
# print(name*3)

# #string method
# password="Deepak424@12%"
# print(password.isdigit())
# print(password.isalpha())
# print(password.islower())
# print(password.isupper())
# print(password.upper())
# print(password.lower())
# print(password)

#List
# num=[2,3,4,4]
# num[3]=5
# print(num)
# del num[0]
# print(num)
# del num
# print(num)

# #list comprehension
# even=[x for x in range(20) if x%2==0]
# print(even)
# odd=[x for x in range(20) if x%2==1]
# print("odd=",odd)
# s=[3**i for i in range(10)]
# print(s)

# #list function
# num=[1,2,3,4]
# print(num)
# num.append(5)
# print(num)
# num.insert(1,2.4)
# print(num)
# a=[2,4,5,23,4,212,41,41]
# a.sort()
# print(a)
# a.pop(0)
# print(len(a))
# s="deepak"
# print(list(s))

# #tuple
# a=(1,2,3,4)
# print(type(a))
# c=[2,4,24,2,4,2,4]
# print(tuple(c))

# #set
# a={11,23,32,2,32,32,4,2,43,434,4,213,424,2313,233,23,23,23,2}

# dictionary

# marks={"deepak":2,"deep":4,"dikas":4}
# marks["rohit"]=10
# marks["deepak"]=23
# print(marks)
# square={1:1,2:4,3:9,4:16,5:25}
# for i in square:
#     print(i,square[i])

# from math import *
# print(cos(2.3))

#function

# def greed(name,cook="pasta"):
#     print("good morning",name)
#     print("please eat a",cook)

# greed("deepak")

# def sum_of_list(a):
#     print("sum of list ")
#     return sum(a)
# a=[2,3,42,42,42,4]

# sum_of_a= sum_of_list(a)
# print(sum_of_a)

# def greed(names):
#     for name in names:
#         print("hello",name)
# names=["deepak","ashishs","magan","vikas","youtube"]
# greed(names)
# f=open('pratice/data.txt','r')
# for line in f:
#     print(line)
# f.close()

with  open('pratice/data2.txt','a') as f:
    # for line in f:
    #     print(line)
    # print(f.read(10))
    # f.seek(0)
    # print(f.read(10))
    f.write('this is my name deepak\n')
    # print(f.read())


