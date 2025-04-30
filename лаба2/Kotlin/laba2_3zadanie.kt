import java.util.Scanner

// Функция подсчёта количества нечётных цифр в числе
fun count_dig(num: Int): Int {
    var count = 0
    var n = num  // локальная копия числа

    while (n > 0) {
        val digit = n % 10  // последняя цифра
        if (digit % 2 != 0) {  // если цифра нечётная
            count++
        }
        n /= 10  // убираем последнюю цифру
    }
    return count  // возвращаем количество нечётных цифр
}

fun main() {
    val scanner = Scanner(System.`in`)
    val num = scanner.nextInt()  // читаем количество чисел

    for (i in 0 until num) {
        val n = scanner.nextInt()  // читаем очередное число
        print("${count_dig(n)} \n")  // выводим количество нечётных цифр с пробелом
    }
}

