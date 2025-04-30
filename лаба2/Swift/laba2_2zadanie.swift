import Foundation

func main() {
    print("Введите N и M: ")
    guard let input = readLine() else { return }
    let parts = input.components(separatedBy: " ")
    
    guard parts.count == 2 else { print("Неправильный формат ввода"); return }
    
    guard let N = Int(parts[0]), let M = Int(parts[1]) else { print("Неправильный формат ввода"); return }

    var total = 0         // Общее количество выпитых банок
    var emptybot = 0      // Количество пустых банок
    var iterations = 0    // Количество итераций
    var n = N            // Количество полных банок

    print("\nДано:\n")
    for _ in 1...n {
        print("☺", terminator: "")
    }
    print("\n")

    print("\nПроцесс:\n")
    while n > 0 || emptybot >= M { //выпиваем
        total += n
        emptybot += n
        n = 0
        iterations += 1

        for _ in 1...emptybot {
            print("©", terminator: "")
        }
        print(" (пустые банки)\n")

        // обмен
        if emptybot >= M {
            n = emptybot / M // получаем банки
            emptybot %= M // остаток пустых банок
            iterations += 1
            for _ in 1...n {
                print("☺", terminator: "")
            }
            print(" (полные банки после обмена)\n")
        }
    }

    print("\nВыпитые банки: \(total)\n")
    print("Итерации: \(iterations)\n")
}

main()

