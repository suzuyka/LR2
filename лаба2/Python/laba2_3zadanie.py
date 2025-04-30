def count_dig(num):
    count = 0
    while num > 0:
        dig = num % 10
        if dig % 2 != 0:
            count += 1  # Увеличиваем счётчик для нечётных цифр
        num //= 10
    return count

def main():
    num = int(input())
    for _ in range(num):
        n = int(input())
        print(count_dig(n), end="\n")  # Выводим количество нечётных цифр

if __name__ == "__main__":
    main()

