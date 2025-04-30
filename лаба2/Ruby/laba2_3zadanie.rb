def count_dig(num)
  count = 0
  return 0 if num == 0
  while num > 0
    dig = num % 10
    count += 1 if dig.odd?
    num /= 10
  end
  count
end

num = gets.to_i

num.times do |i|
  n = gets.to_i
  print count_dig(n)
  print "\n" unless i == num - 1
end

puts

