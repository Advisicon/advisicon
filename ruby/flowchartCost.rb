class Flowchart
  def initialize
    # nothing to initialize
  end
  def cost
    @paperPackageCost = 80.97
    @sheetsPerPackage = 250
    @xeroxFeeColor = 0.1111
    @totalCost = (@paperPackageCost / @sheetsPerPackage) + @xeroxFeeColor
  end
  attr_reader :totalCost
end
class MaterialsOrder
  def initialize(flowchartCount)
    @flowcharts = flowchartCount
  end
  def cost
    @laborRatePerHour = 19.23076923076923
    @laborHours = 0.5
    @laborCost = @laborRatePerHour * @laborHours
    @totalCost = @laborCost
    @costPerFlowchart = @totalCost / @flowcharts
  end
  attr_reader :flowcharts, :totalCost, :costPerFlowchart
end

## this is the product thesaurus
#userInput = nil
#while userInput == nil
#  puts "enter the name of the flowchart"
#  userInput = gets.chomp.downcase
#  case userInput
#    when "issues and risks", "managing issues and risks", "mir"
#      name = "mir_flow"
#  end
#end
## this the end of the product thesaurus

puts "How many flowcharts in this run?"
flowchartCount = gets.chomp.to_i

aFlowchart = Flowchart.new
aFlowchart.cost
orderCount = MaterialsOrder.new(flowchartCount)
orderCount.cost
orderCost = orderCount.flowcharts*aFlowchart.totalCost + orderCount.totalCost
flowchartCost = aFlowchart.totalCost + orderCount.costPerFlowchart
puts "An order of #{flowchartCount} copies will cost a total of $#{(orderCost*100).round / 100.0} ($#{(flowchartCost*100).round / 100.0} per flowchart)."

