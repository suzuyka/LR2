#include <iostream>
using namespace std;

int main() {
    int N, M; 
    cout << "Введите N и M: ";
    cin >> N >> M;

    int total = 0; // Общее количество выпитых банок
    int emptybot = 0; // Количество пустых банок
    int iterations = 0; // Количество итераций
    cout << "\nДано:\n";
    for(int j = 0; j < N; j++) cout << "☺";

    cout << "\nПроцесс:\n";
    while (N > 0 || emptybot >= M) {//выпиваем 
        total += N;
        emptybot += N;
        N = 0;
        iterations++;
        
        for (int i = 0; i < emptybot; i++) cout << "©";
        cout << " (пустые банки)\n";

        // обмен
        if (emptybot >= M) {
            N = emptybot / M; // получаем банки
            emptybot %= M; // остаток пустых банок
            iterations++;
            for (int i = 0; i < N; i++) cout << "☺";
            cout << " (полные банки после обмена)\n";
        }
    }

    cout << "\nВыпитые банки: " << total << endl;
    cout << "Итерации: " << iterations << endl;

    return 0;
}
