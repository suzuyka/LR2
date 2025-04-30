<?php
function isprostoe($N) {
    // Проверка, является ли число простым
    for ($i = 2; $i <= sqrt($N); $i++) {
        if ($N % $i == 0) return false;  // Если делится без остатка - не простое
    }
    return $N > 1;  // Числа больше 1, не имеющие делителей, простые
}

function near($N) {
    // Если число уже простое - возвращаем его
    if (isprostoe($N)) return $N;

    $lower = $N - 1;  // Ищем простое число вниз
    $upper = $N + 1;  // Ищем простое число вверх

    while (true) {
        if (isprostoe($lower)) return $lower;  // Нашли снизу
        if (isprostoe($upper)) return $upper;  // Нашли сверху
        $lower--;
        $upper++;
    }
}

echo "Пример: ";
$N = (int) fgets(STDIN);  // Читаем число из ввода

$num = near($N);           // Ищем ближайшее простое число
$res = $N - $num;          // Вычисляем разницу

echo "Ближайшее простое: $num\n";
echo "Результат: $res\n";
?>
