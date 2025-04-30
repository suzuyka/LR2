package main

import (
	"fmt"
	"math"
)

// Проверяет, является ли число простым
func isprostoe(N int) bool {
	for i := 2; i <= int(math.Sqrt(float64(N))); i++ {
		if N%i == 0 {
			return false
		}
	}
	return N > 1 // 1 не простое
}

// Находит ближайшее простое число к N
func near(N int) int {
	if isprostoe(N) {
		return N
	}
	lower := N - 1
	upper := N + 1

	for {
		if isprostoe(lower) {
			return lower // ближайшее простое снизу
		}
		if isprostoe(upper) {
			return upper // ближайшее простое сверху
		}
		lower--
		upper++
	}
}

func main() {
	fmt.Print("Пример: ")
	var N int
	fmt.Scan(&N) // Ввод числа

	num := near(N)      // Поиск ближайшего простого
	res := N - num      // Разница

	fmt.Printf("Ближайшее простое: %d\n", num)
	fmt.Printf("Результат: %d\n", res)
}

