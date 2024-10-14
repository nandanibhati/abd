#include <iostream>
#include <string>
using namespace std;

string TimeConvert(int num) {
  
  // code goes here  
  int varOcg = num/60;
  int minutes = num%60;
  return  to_string(varOcg) + ":" + to_string(minutes);

}

int main(void) { 
   
  // keep this function call here
  int input;
  cin>>input;
  cout<<TimeConvert(input)<<endl;
  return 0;
    
}