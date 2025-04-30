#include <iostream>
using namespace std;

int count_dig(int num){//функция подсчета нечетных цифр в числе
    int count = 0;
    while (num > 0){
        int dig = num % 10;
        if(dig % 2 != 0){
            count++;
        }
        num /= 10;
    }
    return count;

}

int main(){
    int num, n;
    cin >> num;
    for (int i = 0; i < num; i++){
        cin >> n;
        cout << count_dig(n) << " ";
    }
    
}