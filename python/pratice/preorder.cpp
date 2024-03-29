#include<bits/stdtr1c++.h>
using namespace std;
struct Node{
    int data;
    Node *left,*right;
    Node(int v){
        data=v;
        left= right =NULL;
    }
};
void pre(Node* node){
    if(node==NULL){
        return;
    }
    cout<<node->data<<" ";
    pre(node->left);
    pre(node->right);
};
int main(){
    struct Node* node=new Node(1);
    node->left=new Node(3);
    node->right=new Node(4);
    node->left->left=new Node(6);
    node->left->right=new Node(8);
    node->right->left=new Node(7);
    pre(node);
    return 0;
};