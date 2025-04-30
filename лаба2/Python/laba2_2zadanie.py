def main():
    N, M = map(int, input("Введите N и M: ").split())

    total = 0      # Общее количество выпитых банок
    emptybot = 0   # Количество пустых банок
    iterations = 0 # Количество итераций

    print("\nДано:")
    print("☺" * N)

    print("\nПроцесс:")
    while N > 0 or emptybot >= M:
        # Выпиваем все полные банки
        total += N
        emptybot += N
        N = 0
        iterations += 1

        print("©" * emptybot, "(пустые банки)")

        # Обмен пустых банок на полные
        if emptybot >= M:
            N = emptybot // M
            emptybot %= M
            iterations += 1
            print("☺" * N, "(полные банки после обмена)")

    print("\nВыпитые банки:", total)
    print("Итерации:", iterations)

if __name__ == "__main__":
    main()

