print "Введите n и m: "
n, m = gets.split.map(&:to_i)

total = 0      # Общее количество выпитых банок
emptybot = 0   # Количество пустых банок
iterations = 0 # Количество итераций

puts "\nДано:"
puts "☺" * n

puts "\nПроцесс:"
while n > 0 || emptybot >= m
  total += n
  emptybot += n
  n = 0
  iterations += 1

  puts "©" * emptybot + " (пустые банки)"

  if emptybot >= m
    n = emptybot / m
    emptybot %= m
    iterations += 1
    puts "☺" * n + " (полные банки после обмена)"
  end
end

puts "\nВыпитые банки: #{total}"
puts "Итерации: #{iterations}"

