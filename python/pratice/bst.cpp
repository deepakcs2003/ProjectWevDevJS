#include<bits/stdc++.h>
using namespace std;
void bfs(vector<int>& ans,vector<vector<int>>& egde){
        queue<int> q;
        q.push(0);
        bool vis[egde.size()];
        for(int i=0; i< egde.size();i++){
            vis[i]=false;
        }
        while(!q.empty()){
            int curr=q.front();
            q.pop();
            if(vis[curr]==false){
                vis[curr]=true;
                ans.push_back(curr);
                for(int i=0;i< egde[curr].size();i++){
                          q.push(egde[curr][i]);
                }
            }
        }
}
int main(){
    vector<vector<int>> egde={
        {1,2},
        {0,3,4},
        {0,4},
        {1,4},
        {1,2,3}
    };
     vector<int> ans;
     bfs(ans,egde);
     for(int i=0;i<ans.size();i++){
        cout<<ans[i]<<",";
     }
    return 0;
};
