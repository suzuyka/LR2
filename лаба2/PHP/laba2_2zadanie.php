<?php

echo "Введите M и N: ";
list($N, $M) = explode(' ', trim(fgets(STDIN)));

$total = 0; // Общее количество выпитых банок
$emptybot = 0; // Количество пустых банок
$iterations = 0; // Количество итераций

echo "\nДано:\n";
for ($j = 0; $j < $N; $j++) echo "☺";

echo "\nПроцесс:\n";
while ($N > 0 || $emptybot >= $M) { // выпиваем
    $total += $N;
    $emptybot += $N;
    $N = 0;
    $iterations++;

    for ($i = 0; $i < $emptybot; $i++) echo "©";
    echo " (пустые банки)\n";

    // обмен
    if ($emptybot >= $M) {
        $N = (int) ($emptybot / $M); // получаем банки
        $emptybot %= $M; // остаток пустых банок
        $iterations++;
        for ($i = 0; $i < $N; $i++) echo "☺";
        echo " (полные банки после обмена)\n";
    }
}

echo "\nВыпитые банки: $total\n";
echo "Итерации: " . ($iterations) . "\n"; 

?>

