#include<iostream>
using namespace std;
class MyClass{
public:
int speed(int maxspeed);
};
class name{
 public:
 void print(){
    cout<<"deepak"<<endl;
 }
};
int MyClass::speed(int maxspeed){
    return maxspeed;
}
int main(){
    MyClass MyObj;
    name name1;
    name1.print();
    cout<<MyObj.speed(221);
}