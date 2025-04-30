using System;

class Program
{
    // Считает количество нечётных цифр в числе
    static int count_dig(int num)
    {
        int count = 0;
        while (num > 0)
        {
            int dig = num % 10;
            if (dig % 2 != 0)
            {
                count++;
            }
            num /= 10;
        }
        return count;
    }

    static void Main(string[] args)
    {
        Console.OutputEncoding = System.Text.Encoding.UTF8; // Кодировка для вывода
        Console.Write("Введите количество чисел: ");
        int num = Convert.ToInt32(Console.ReadLine());

        for (int i = 0; i < num; i++)
        {
            Console.Write("Введите число: ");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.Write(count_dig(n) + "\n"); // Выводим результат
        }
    }
}

