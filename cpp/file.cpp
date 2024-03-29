#include<iostream>
#include<fstream>
using namespace std;
int main(){
    // ofstream hout("sample.txt");
    //  string name;
    // cout<<"enter you name : ";
    // cin>>name;
    // hout<<"name is:" +name;
    ifstream in("sample.txt");
    string name;
    in>> name;
    cout<< name;
    return 0;
}