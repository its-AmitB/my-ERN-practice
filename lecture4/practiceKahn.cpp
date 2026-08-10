#include<iostream>
#include<vector>
#include<list>
#include<queue>
using namespace std;

vector<list<int>>graph;
int v;
void addEdge(int a,int b, bool bidir=true){

  graph[a].push_back(b);
  if(bidir)
    graph[b].push_back(a);
}

void topBFS(){
  //kahn's algo
  vector<int>indegree(v,0);
  for(int i=0;i<v;i++){
    for(auto neigh:graph[i]){
      indegree[neigh]++;
    }
  }
  
  queue<int>q;
  for(int i=0;i<v;i++){
    if(indegree[i]==0) q.push(i);
  }

  while(!q.empty()){

    int curr=q.front();
    q.pop();
    for(int neigh:graph[curr]){
      
    }
  }
}

int main(){
  

  return 0;
}