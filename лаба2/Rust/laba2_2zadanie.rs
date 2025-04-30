use std::io;

fn main() {
    println!("Введите M и N: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let mut parts = input.trim().split_whitespace();
    let mut m: i32 = parts.next().unwrap().parse().expect("Please type a number!");
    let mut n: i32 = parts.next().unwrap().parse().expect("Please type a number!");

    let mut total = 0; // Общее количество выпитых банок
    let mut emptybot = 0; // Количество пустых банок
    let mut iterations = 0; // Количество итераций

    println!("\nДано:");
    for _ in 0..n {
        print!("☺");
    }
    println!();

    println!("\nПроцесс:");
    while n > 0 || emptybot >= m {
        total += n;
        emptybot += n;
        n = 0;
        iterations += 1;

        for _ in 0..emptybot {
            print!("©");
        }
        println!(" (пустые банки)");

        // обмен
        if emptybot >= m {
            n = emptybot / m; // получаем банки
            emptybot %= m; // остаток пустых банок
            iterations += 1;
            for _ in 0..n {
                print!("☺");
            }
            println!(" (полные банки после обмена)");
        }
    }

    println!("\nВыпитые банки: {}", total);
    println!("Итерации: {}", iterations);
}

