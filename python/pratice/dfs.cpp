#include<bits/stdc++.h>
using namespace std;
void dfs(vector<vector<int>>& graph,vector<int>& ans,bool vis[],int curr){
         ans.push_back(curr);
         vis[curr]=true;
         for(int i=0;i<graph[curr].size();i++){
            if(!vis[graph[curr][i]]){
                dfs(graph,ans,vis,graph[curr][i]);
            }
         }
};
int main(){
     vector<vector<int>> graph={
        {1,2},
        {0,3,4},
        {0,4},
        {1,4},
        {1,2,3}
    };
    vector<int> ans;
    int n=graph.size();
    bool vis[n];
    for(int i=0;i<n ;i++){
        vis[i]=false;
    };
    dfs(graph,ans,vis,0);
    for(int i=0;i<n;i++){
        cout<<ans[i]<<" ,";
    }

}; 
