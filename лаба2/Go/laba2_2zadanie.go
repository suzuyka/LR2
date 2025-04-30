package main

import "fmt"

func main() {
	fmt.Print("Введите N и M: ")
	var N, M int
	fmt.Scan(&N, &M)

	total := 0         // Общее количество выпитых банок
	emptybot := 0      // Количество пустых банок
	iterations := 0    // Количество итераций
	fmt.Println("\nДано:")
	for j := 0; j < N; j++ {
		fmt.Print("☺")
	}
	fmt.Println()

	fmt.Println("\nПроцесс:")
	for N > 0 || emptybot >= M { //выпиваем
		total += N
		emptybot += N
		N = 0
		iterations++

		for i := 0; i < emptybot; i++ {
			fmt.Print("©")
		}
		fmt.Println(" (пустые банки)")

		// обмен
		if emptybot >= M {
			N = emptybot / M // получаем банки
			emptybot %= M      // остаток пустых банок
			iterations++
			for i := 0; i < N; i++ {
				fmt.Print("☺")
			}
			fmt.Println(" (полные банки после обмена)")
		}
	}

	fmt.Printf("\nВыпитые банки: %d\n", total)
	fmt.Printf("Итерации: %d\n", iterations)
}

