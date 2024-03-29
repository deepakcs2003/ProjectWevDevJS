#include<bits/stdc++.h>
using namespace std;
void merge(int arr[],int st,int mid,int end){
    int n=end-st+1;
    int temp[end-st+1];
    int i=st;
    int j=mid+1;
    int k=0;
    while(i<=mid && j<=end){
        if(arr[i]<arr[j]){
            temp[k]=arr[i];
            i++;
        }else{
            temp[k]=arr[j];
            j++;
        }
        k++;
    };
    while(i<=mid){
        temp[k++]=arr[i++];
    };
    while(j<=end){
        temp[k++]=arr[j++];
    };
    for(k=0,i=st;k<n;k++,i++){
        arr[i]=temp[k];
    };
};
void merge_sort(int arr[],int st,int end){
    if(st>=end){
        return;
    }
    int mid=st+(end-st)/2;
    merge_sort(arr,st,mid);
    merge_sort(arr,mid+1,end);
    merge(arr,st,mid,end);
};
int main(){
    int arr[5]={5,2,6,1,9};
    merge_sort(arr,0,4);
    for(int i=0;i<5;i++){
        cout<<arr[i]<<" ";
    }
    return 0;


};