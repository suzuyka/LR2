use std::io;

// Проверка, является ли число простым
fn isprostoe(n: i32) -> bool {
    // Перебираем делители от 2 до квадратного корня из n
    for i in 2..=((n as f64).sqrt() as i32) {
        if n % i == 0 {
            return false;  // Если делится без остатка - не простое
        }
    }
    n > 1  // Числа меньше или равные 1 не простые
}

// Поиск ближайшего простого числа к n
fn near(n: i32) -> i32 {
    if isprostoe(n) {
        return n;  // Если n простое - возвращаем его
    }
    let mut lower = n - 1;
    let mut upper = n + 1;

    loop {
        if isprostoe(lower) {
            return lower;  // Нашли простое число ниже n
        }
        if isprostoe(upper) {
            return upper;  // Нашли простое число выше n
        }
        lower -= 1;
        upper += 1;
    }
}

fn main() {
    println!("Пример: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let n: i32 = input.trim().parse().expect("Please type a number!");

    let num = near(n);           // Ищем ближайшее простое число
    let res = n - num;           // Вычисляем разницу

    println!("Ближайшее простое: {}", num);
    println!("Результат: {}", res);
}

