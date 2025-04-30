import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class laba2_1zadanie {
    // Проверяет, является ли число простым
    public static boolean isprostoe(int N) {
        if (N < 2) return false;
        for (int i = 2; i <= Math.sqrt(N); i++) {
            if (N % i == 0) return false;
        }
        return true;
    }

    // Находит ближайшее простое число к N
    public static int near(int N) {
        if (isprostoe(N)) return N;
        int lower = N - 1;
        int upper = N + 1;
        while (true) {
            if (isprostoe(lower)) return lower;
            if (isprostoe(upper)) return upper;
            lower--;
            upper++;
        }
    }

    public static void main(String[] args) throws Exception {
        // Настройка вывода в UTF-8
        System.setOut(new PrintStream(System.out, true, StandardCharsets.UTF_8.name()));

        Scanner sc = new Scanner(System.in);
        System.out.print("Пример: ");
        int N = sc.nextInt();

        int num = near(N);      // Находим ближайшее простое
        int res = N - num;      // Разница

        System.out.println("Ближайшее простое: " + num);
        System.out.println("Результат: " + res);

        sc.close();
    }
}

