itemType = nil
while itemType == nil
  puts "what kind of item?"
  itemType = gets.chomp.downcase
  case itemType
    when "book", "manual", "b"
      item = "book"
    when "flowchart", "chart", "f", "fl", "flow"
      item = "flowchart"
    else
      puts '"' + itemType + '"' + " is not a recognized item. Try again."
      itemType = nil
  end
end
if itemType == "book"
  require "bookCost.rb"
elsif itemType == "flowchart"
  require "flowchartCost.rb"
end
