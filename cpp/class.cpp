#include<iostream>
using namespace std;
class MyClass{
    public:
    string name;
    int age;

};
int main(){
    MyClass student1;
    student1.name="deepak";
    student1.age=20;
    cout<<student1.name<<endl;
    cout<<student1.age<<endl;
}
