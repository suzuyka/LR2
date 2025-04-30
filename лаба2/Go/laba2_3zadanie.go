package main

import "fmt"

// Считает количество нечётных цифр в числе
func count_dig(num int) int {
	count := 0
	for num > 0 {
		dig := num % 10
		if dig%2 != 0 {
			count++
		}
		num /= 10
	}
	return count
}

func main() {
	var num int
	fmt.Print("Введите количество чисел: ")
	fmt.Scan(&num) // Ввод количества чисел

	for i := 0; i < num; i++ {
		var n int
		fmt.Print("Введите число: ")
		fmt.Scan(&n) // Ввод числа
		fmt.Print(count_dig(n), "\n") // Вывод результата
	}
}

