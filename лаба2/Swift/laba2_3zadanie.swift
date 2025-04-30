import Foundation

// Подсчёт количества нечётных цифр в числе
func count_dig(_ num: Int) -> Int {
    var count = 0
    var n = num
    while n > 0 {
        let dig = n % 10       // Последняя цифра
        if dig % 2 != 0 {
            count += 1         // Если нечётная - увеличиваем счётчик
        }
        n /= 10                // Убираем последнюю цифру
    }
    return count
}

func main() {
    print("Введите количество чисел: ")
    guard let input = readLine(), let num = Int(input) else {
        print("Неправильный формат ввода")
        return
    }

    for _ in 1...num {
        print("\nВведите число: ")
        guard let inputNum = readLine(), let n = Int(inputNum) else {
            print("Неправильный формат ввода")
            return
        }
        print("\(count_dig(n)) ", terminator: "")
    }
}

main()

