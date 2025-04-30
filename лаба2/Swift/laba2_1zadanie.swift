import Foundation

// Проверка, является ли число простым
func isprostoe(_ n: Int) -> Bool {
    for i in 2...Int(sqrt(Double(N))) {
        if n % i == 0 {
            return false  // Делится на i без остатка - не простое
        }
    }
    return n > 1  // Числа <= 1 не считаются простыми
}

// Поиск ближайшего простого числа к n
func near(_ n: Int) -> Int {
    if isprostoe(N) {
        return n  // Если n простое - возвращаем его
    }
    var lower = n - 1
    var upper = n + 1

    while true {
        if isprostoe(lower) {
            return lower  // Нашли простое число ниже n
        }
        if isprostoe(upper) {
            return upper  // Нашли простое число выше n
        }
        lower -= 1
        upper += 1
    }
}

func main() {
    print("Пример: ")
    guard let input = readLine(), let n = Int(input) else {
        print("Неправильный формат ввода")
        return
    }
    let num = near(n)          // Ищем ближайшее простое
    let res = n - num          // Разница

    print("Ближайшее простое: \(num)\n")
    print("Результат: \(res)\n")
}

main()

