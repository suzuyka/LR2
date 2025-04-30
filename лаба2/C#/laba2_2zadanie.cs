using System;

class Program
{
    static void Main(string[] args)
    {
        Console.OutputEncoding = System.Text.Encoding.UTF8; // Кодировка для вывода
        Console.Write("Введите M и N: ");
        string[] input = Console.ReadLine().Split(' ');
        int N = Convert.ToInt32(input[0]); // Полные банки
        int M = Convert.ToInt32(input[1]); // Для обмена

        int total = 0;        // Всего выпито
        int emptybot = 0;     // Пустые банки
        int iterations = 0;   // Итерации

        Console.WriteLine("\nДано:");
        for (int j = 0; j < N; j++) Console.Write("☺");
        Console.WriteLine();

        Console.WriteLine("\nПроцесс:");
        while (N > 0 || emptybot >= M) {
            total += N;
            emptybot += N;
            N = 0;
            iterations++;

            for (int i = 0; i < emptybot; i++) Console.Write("©");
            Console.WriteLine(" (пустые банки)");

            // Обмен пустых банок на полные
            if (emptybot >= M) {
                N = emptybot / M; // Новые полные банки
                emptybot %= M;    // Остаток пустых
                iterations++;
                for (int i = 0; i < N; i++) Console.Write("☺");
                Console.WriteLine(" (полные банки после обмена)");
            }
        }

        Console.WriteLine("\nВыпитые банки: " + total);
        Console.WriteLine("Итерации: " + (iterations));
    }
}

