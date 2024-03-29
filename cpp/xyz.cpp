#include <iostream>
using namespace std;
struct student
{
string name;
int roll_num;
double CGPA;
void setdata()
{
cout << "Enter the name of Student : ";
cin >> name;
cout << "Enter the roll number : ";
cin >> roll_num;
cout << "Enter the CGPA : ";
cin >> CGPA;
}
 double check()
{
return CGPA;
}
void display()
{
cout << " The name of Student : "<<name<<endl;
cout << " The roll number : "<<roll_num<<endl;
 cout << " The CGPA : "<<CGPA<<endl;
 cout << "\n"<<endl;
}
};
int main()
{
int N;
cout << "Enter the number of student in the class :";
cin >> N;
student A[N];
for (int i = 0; i < N; i++)
{
cout << "Enter details for student " << i + 1 <<endl;
 A[i].setdata();
 }
int highestIndex = 0;
int lowestIndex = 0;
for (int i = 1; i < N; i++)
{
if (A[i].CGPA > A[highestIndex].CGPA)
{
highestIndex = i;
}
if (A[i].CGPA < A[lowestIndex].CGPA)
{
lowestIndex = i;
}
}
cout<<"--------------------------------------------"<<endl;
cout<<"---------------Highest is-------------------"<<endl;
cout<<"--------------------------------------------"<<endl;
A[highestIndex].display();
cout<<"--------------------------------------------"<<endl;
cout<<"---------------Lowest is------------------- :"<<endl;
cout<<"-------------------------------------------- "<<endl;
A[ lowestIndex].display();
return 0;
}
#include <iostream>
using namespace std;
struct student
{
string name;
int roll_num;
double CGPA;
void setdata()
{ 
cout << "Enter the name of Student : ";
cin >> name;
cout << "Enter the roll number : ";
cin >> roll_num;
cout << "Enter the CGPA : ";
cin >> CGPA;
}
 double check()
{ 
return CGPA;
}
void display()
{ 
cout << " The name of Student : "<<name<<endl;
cout << " The roll number : "<<roll_num<<endl;
 cout << " The CGPA : "<<CGPA<<endl;
 cout << "\n"<<endl;
}
};
int main()
{
int N;
cout << "Enter the number of student in the class :";
cin >> N;
student A[N];
for (int i = 0; i < N; i++)
{
cout << "Enter details for student " << i + 1 <<endl;
 A[i].setdata();
 }
int highestIndex = 0;
int lowestIndex = 0;
for (int i = 1; i < N; i++)
{
if (A[i].CGPA > A[highestIndex].CGPA)
{
highestIndex = i;
}
if (A[i].CGPA < A[lowestIndex].CGPA)
{
lowestIndex = i;
}
}
cout<<"--------------------------------------------"<<endl;
cout<<"---------------Highest is-------------------"<<endl;
cout<<"--------------------------------------------"<<endl;
A[highestIndex].display();
cout<<"--------------------------------------------"<<endl;
cout<<"---------------Lowest is------------------- :"<<endl;
cout<<"-------------------------------------------- "<<endl;
A[ lowestIndex].display();
return 0;
}
