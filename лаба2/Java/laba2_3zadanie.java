import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class laba2_3zadanie {
    // Считает количество нечётных цифр в числе
    public static int count_dig(int num) {
        int count = 0;
        if (num == 0) {
            return 0;
        }
        while (num > 0) {
            int dig = num % 10;
            if (dig % 2 != 0) {
                count++;
            }
            num /= 10;
        }
        return count;
    }

    public static void main(String[] args) throws Exception {
        // Настройка вывода в UTF-8
        System.setOut(new PrintStream(System.out, true, StandardCharsets.UTF_8.name()));

        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt(); // Количество чисел
        for (int i = 0; i < num; i++) {
            int n = sc.nextInt(); // Ввод числа
            System.out.print(count_dig(n) + "\n"); // Вывод количества нечётных цифр
        }
        System.out.println();
        sc.close();
    }
}

