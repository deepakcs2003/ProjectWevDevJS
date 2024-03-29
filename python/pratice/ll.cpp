#include<bits/stdc++.h>
using  namespace std;
class LinkedList{
    public:
    class Node{
        public:
        int data;
        Node *next;
        Node(int d){
            this->data=d;
            this->next=NULL;
        }
    };
    public:
    Node* head;
    Node* tail;
    public:
    void add(int data){
        Node* newNode=new Node(data);
        if(head==NULL){
              head=tail=newNode;
        }
        newNode->next=head;
        head=newNode;
    }
};
int main(){
    LinkedList ll;
    ll.add(3);
    ll.add(4);
    return 0;

}