using System;

class Program
{
    // Проверяет, является ли число простым
    static bool isprostoe(int N)
    {
        for (int i = 2; i <= Math.Sqrt(N); i++)
        {
            if (N % i == 0) return false;
        }
        return N > 1;
    }

    // Находит ближайшее простое число к N
    static int near(int N)
    {
        if (isprostoe(N)) return N;
        int lower = N - 1;
        int upper = N + 1;

        while (true)
        {
            if (isprostoe(lower)) return lower;
            if (isprostoe(upper)) return upper;
            lower--;
            upper++;
        }
    }

    static void Main(string[] args)
    {
        Console.OutputEncoding = System.Text.Encoding.UTF8; // Кодировка для вывода
        Console.Write("Пример: ");
        int N = Convert.ToInt32(Console.ReadLine());

        int num = near(N);                  // Находим ближайшее простое
        int res = Math.Abs(N - num);        // Разница между исходным и найденным

        Console.WriteLine("Ближайшее простое: " + num);
        Console.WriteLine("Результат: " + res);
    }
}

