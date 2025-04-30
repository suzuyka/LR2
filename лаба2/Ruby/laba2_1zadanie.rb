def isprostoe(n)
  return false if n < 2
  (2..Math.sqrt(n).to_i).each do |i|
    return false if n % i == 0
  end
  true
end

def near(n)
  return n if isprostoe(n)
  lower = n - 1
  upper = n + 1

  loop do
    return lower if isprostoe(lower)
    return upper if isprostoe(upper)
    lower -= 1
    upper += 1
  end
end

print "Пример: "
n = gets.to_i
num = near(n)
res = n - num

puts "Ближайшее простое: #{num}"
puts "Результат: #{res}"

