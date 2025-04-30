const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите N и M: ', (input) => {
    const [N, M] = input.split(' ').map(Number);
    let total = 0;
    let emptybot = 0;
    let iterations = 0;

    console.log('\nДано:');
    console.log('☺'.repeat(N));

    console.log('\nПроцесс:');
    let currentN = N;
    while (currentN > 0 || emptybot >= M) {
        // Фаза употребления
        total += currentN;
        emptybot += currentN;
        currentN = 0;
        iterations++;
        
        console.log('©'.repeat(emptybot) + ' (пустые банки)');

        // Фаза обмена
        if (emptybot >= M) {
            const exchanged = Math.floor(emptybot / M);
            emptybot %= M;
            currentN = exchanged;
            iterations++;
            console.log('☺'.repeat(currentN) + ' (полные банки после обмена)');
        }
    }

    console.log('\nВыпитые банки: ' + total);
    console.log('Итерации: ' + iterations);

    rl.close();
});

