#include<iostream>
using namespace std;
class student{
    public:
    string name;
    int age;
    int marks;
    student(){
        cout<<"hollo world"<<endl;
    }
    student(string n,int a,int m){
        name=n;
        age=a;
marks=m;

    }
};
int main(){
    student s1;
    student s2("deepak",32,87);
    cout<<s2.name<<" "<<s2.age<<" "<<+s2.marks;
    return 0;

}