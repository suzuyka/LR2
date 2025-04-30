import math

def isprostoe(N):
    if N < 2:
        return False  # Числа меньше 2 не простые
    for i in range(2, int(math.sqrt(N)) + 1):
        if N % i == 0:
            return False  # Делится без остатка - не простое
    return True

def near(N):
    if isprostoe(N):
        return N  # Если число простое - возвращаем его
    lower = N - 1
    upper = N + 1

    while True:
        if isprostoe(lower):
            return lower  # Ищем простое число вниз
        if isprostoe(upper):
            return upper  # Ищем простое число вверх
        lower -= 1
        upper += 1

def main():
    N = int(input("Пример: "))
    num = near(N)  # Находим ближайшее простое число
    res = N - num  # Разница
    print("Ближайшее простое:", num)
    print("Результат:", res)

if __name__ == "__main__":
    main()

