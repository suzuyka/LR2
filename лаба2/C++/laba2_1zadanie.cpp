#include <iostream>
#include <cmath>
#define MAX_SIZE 100
using namespace std;

bool isprostoe(int N){
    for (int i = 2; i <= sqrt(N); i++){
        if (N % i == 0) return false;

    }
    return true;
}

int near(int N){
    if(isprostoe(N)) return N;
    int lower = N - 1;
    int upper = N + 1;

    while (true){
        if (isprostoe(lower)) return lower;
        if (isprostoe(upper)) return upper;
        lower--;
        upper++;
    }
}

int main(){
    int N;
    cout << "Пример: ";
    cin >> N;

    int num = near(N);
    int res = N - num;
    
    cout << "Ближайшее простое: " << num << "\n";
    cout << "Результат: " << res << "\n";

}