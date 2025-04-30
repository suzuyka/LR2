use std::io;

// Подсчёт количества нечётных цифр в числе
fn count_dig(num: i32) -> i32 {
    let mut count = 0;
    let mut n = num;
    while n > 0 {
        let dig = n % 10;       // Получаем последнюю цифру
        if dig % 2 != 0 {
            count += 1;         // Если нечётная - увеличиваем счётчик
        }
        n /= 10;                // Убираем последнюю цифру
    }
    count
}

fn main() {
    println!("Введите количество чисел: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let num: i32 = input.trim().parse().expect("Please type a number!");

    for _ in 0..num {
        println!("Введите число: ");
        let mut input_num = String::new();
        io::stdin().read_line(&mut input_num).expect("Failed to read line");
        let n: i32 = input_num.trim().parse().expect("Please type a number!");
        print!("{} ", count_dig(n));  // Выводим количество нечётных цифр
        print!("\n");
    }
}

