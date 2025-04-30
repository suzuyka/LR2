import kotlin.math.sqrt

// Функция проверки, является ли число простым
fun isprostoe(N: Int): Boolean {
    if (N <= 1) return false  // числа <= 1 не считаются простыми

    // Проверяем делимость от 2 до квадратного корня из N
    for (i in 2..sqrt(N.toDouble()).toInt()) {
        if (N % i == 0) return false  // если делится без остатка - не простое
    }
    return true  // если делителей нет - число простое
}

// Функция поиска ближайшего простого числа к N
fun near(N: Int): Int {
    if (isprostoe(N)) return N  // если N простое - возвращаем его

    var lower = N - 1  // начинаем искать вниз
    var upper = N + 1  // и вверх

    while(true) {
        if (isprostoe(lower)) return lower  // нашли простое снизу
        if (isprostoe(upper)) return upper  // нашли простое сверху
        lower--
        upper++
    }
}

fun main() {
    val N = readLine()?.toIntOrNull() ?: 0  // читаем число из ввода, если пусто - 0
    val num = near(N)                       // ищем ближайшее простое
    val res = N - num                       // вычисляем разницу

    println("Пример: $N")
    println("Ближайшее простое число: $num")
    println("Результат: $res")
}

