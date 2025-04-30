import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class laba2_2zadanie {
    public static void main(String[] args) throws Exception {
        System.setOut(new PrintStream(System.out, true, StandardCharsets.UTF_8.name()));

        Scanner sc = new Scanner(System.in);
        System.out.print("Введите N и M: ");
        int N = sc.nextInt();
        int M = sc.nextInt();

        int total = 0;      // Общее количество выпитых банок
        int emptybot = 0;   // Количество пустых банок
        int iterations = 0; // Количество итераций

        System.out.println("\nДано:");
        for (int j = 0; j < N; j++) System.out.print("☺");
        System.out.println();

        System.out.println("\nПроцесс:");
        while (N > 0 || emptybot >= M) {
            total += N;
            emptybot += N;
            N = 0;
            iterations++;

            for (int i = 0; i < emptybot; i++) System.out.print("©");
            System.out.println(" (пустые банки)");

            if (emptybot >= M) {
                N = emptybot / M;
                emptybot %= M;
                iterations++;
                for (int i = 0; i < N; i++) System.out.print("☺");
                System.out.println(" (полные банки после обмена)");
            }
        }

        System.out.println("\nВыпитые банки: " + total);
        System.out.println("Итерации: " + iterations);

        sc.close();
    }
}

