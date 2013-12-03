class Expense
	def initialize(expenseDate, client, job, billable)
		@date				= expenseDate
		@billable			= billable
		@client				= client
	end
	attr_reader :expenseDate, :client, :job, :billable
end
class TravelExpense < Expense
	def initialize(airfareCost, carRentalCost, tolls, parking, milesTraveled)
		@airfare			= airfareCost
		@carRental			= carRentalCost
		@tolls				= tolls
		@parking			= parking
		@milesTraveled		= milesTraveled
	end
	def mileage
		@reimbursementRate	= 0.55 #mileage reimbursement rate (in dollars). Should this rate be set elsewhere?
		@mileageCost 		= @milesTraveled * @reimbursementRate
	end
end
class FoodExpense < Expense
end

expenseDate = nil
timeNow = Time.new
puts "Did this expense just happen (" + timeNow.to_s + ")? [y or n]"
while expenseDate === nil
	expenseDateAnswer = gets.chomp.downcase
	if expenseDateAnswer === "y"
		expenseDate = timeNow
	elsif expenseDateAnswer === "n"
		begin
			puts "When did the expense happen?"
			puts "Year [YYYY]"
			year = gets.chomp.to_i
			Time.local(year)
			puts "Month [MM]"
			month = gets.chomp
			puts "Day of month [DD]"
			day = gets.chomp.to_i
			expenseDate = Time.local(year,month,day)
		rescue
			puts "ERROR: not a real date, try again\nDid this expense just happen (" + timeNow.to_s + ")? [y or n]"
			expenseDateAnswer = "n"
		end
	else
		puts "ERROR: not a valid entry, try again\nDid this expense just happen (" + timeNow.to_s + ")? [y or n]"
	end
end

client = nil
puts "Was this a client related expense? [y or n]"
while client == nil
	applyToClient = gets.chomp.downcase
	if applyToClient === "y"
		puts "Enter client name"
		client = gets.chomp.downcase
		puts "Enter job"
		job = gets.chomp.downcase
		billable = true
	elsif applyToClient === "n"
		client = false
		puts "What was this for then?"
		job = gets.chomp.downcase
		billable = false
	else
		puts "ERROR: not a valid entry, try again\nWas this a client related expense? [y or n]"
	end
end

puts "date of expense:\t" + expenseDate.to_s
puts "apply to client?\t" + client.to_s
puts "job:\t\t\t" + job.to_s
puts "billable?\t\t" + billable.to_s

newExpense = Expense.new(expenseDate, client, job, billable)