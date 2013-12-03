#!/bin/env ruby
# encoding: utf-8

class Book
  def initialize(name, pages)
    @name = name
    @pages = pages
  end
  def pagecount
    puts "#{@name} is #{@pages} pages long"
  end
  def cost
    @leaves = ((@pages.to_f / 2).ceil)
    @xeroxFeeBW = @leaves * 0.0322
    @leafPaperCost = @leaves * 0.0138
    @xeroxFeeColor = 0.1111
    @coverPaperCost = 0.142725
    @binding = 4.99
    @totalCost = @xeroxFeeBW + @leafPaperCost + @xeroxFeeColor + @coverPaperCost + @binding
#    puts "At #{@leaves} leaves for '#{@name},' Xerox extracts a $#{@xeroxFeeBW + @xeroxFeeColor} fee."
#    puts "The paper costs us $#{@leafPaperCost + @coverPaperCost} to buy and have delivered."
#    puts "That's $#{@totalCost} total for in-house materials cost."
  end
  attr_reader :name, :totalCost
end
class MaterialsOrder
  def initialize(bookCount)
    @books = bookCount
    @numberBooksNotInFullSet = @books.modulo(20)
    @numberFullBookSets = (@books - @numberBooksNotInFullSet) / 20
  end
  def cost
    @trim = (7.5 * @numberFullBookSets) + 7.5
    @laborRatePerHour = 19.23076923076923
    @laborHours = 1 + (0.5 * @numberFullBookSets) + (0.5 * @numberBooksNotInFullSet)
    @laborCost = @laborRatePerHour * @laborHours
    @tripMiles = 11.0
    @tripCreditPerMile = 0.55
    @tripCost = @tripMiles * @tripCreditPerMile
    @totalCost = @trim + @laborCost + @tripCost
    @costPerBook = @totalCost / @books
  end
  attr_reader :books, :totalCost, :costPerBook
end

# this is the product thesaurus
userInput = nil
while userInput == nil
  puts "enter book title"
  userInput = gets.chomp.downcase
  case userInput

  ### 2007 editions
    # SharePoint 2007 for Effective Project Management
    when "spfepm", "sharepoint for effective project management", "sharepoint", "sharepoint 2007", "spfepm2007", "spfepm 2007", "sharepoint 2007"
      name = "spfepm2007"
    # Managing Projects with Microsoft Project 2007
    when "mpwmp2007", "managing projects with microsoft project 2007", "mpwmp 2007", "msp2007", "msp 2007", "project 2007 desktop"
      name = "mpwmp2007"
    # Microsoft Office Project Server 2007: Project Manager's Guide
    when "mops2007pm", "msps2007pm", "mops2007_pm", "msps2007_pm", "mops2007:pm", "msps2007:pm", "mops 2007 pm", "msps 2007 pm", "microsoft office project server 2007: project manager's guide", "project server 2007: pm", "server 2007: pm", "project server 2007 pm", "server 2007 pm", "project 2007: pm", "project 2007 pm", "project2007:pm"
      name = "mops2007:pm"
    # Microsoft Office Project Server 2007: Reporting & Analysis Guide
    when "mops2007ra", "msps2007ra", "mops2007r&a", "msps2007r&a", "mops2007_ra", "msps2007_ra", "mops2007_r&a", "msps2007_r&a", "mops2007:ra", "msps2007:ra", "mops2007:r&a", "msps2007:r&a", "mops 2007 ra", "msps 2007 ra", "mops 2007 r&a", "msps 2007 r&a", "mops 2007 r a", "msps 2007 r a", "microsoft office project server 2007: reporting & analysis guide", "microsoft office project server 2007: reporting and analysis guide", "microsoft office project server 2007: reporting & analysis", "microsoft office project server 2007: reporting and analysis", "project server 2007: r&a", "server 2007: r&a", "project server 2007 r&a", "server 2007 r&a", "project 2007: r&a", "project 2007: ra", "project 2007 r&a", "project 2007 ra", "project2007:r&a", "project2007:ra"
      name = "mops2007:r&a"
    # Microsoft Office Project Server 2007: Administrator's Guide
    when "mops2007admin", "msps2007admin", "mops2007_admin", "msps2007_admin", "mops2007:admin", "msps2007:admin", "mops 2007 admin", "msps 2007 admin", "microsoft office project server 2007: administrators' guide", "project server 2007: admin", "server 2007: admin", "project server 2007 admin", "server 2007 admin", "project 2007: admin", "project 2007 admin", "project2007admin"
      name = "mops2007:admin"
    # Microsoft Office Project Server 2007: Team Member's Guide
    when "mops2007tm", "msps2007tm", "mops2007_tm", "msps2007_tm", "mops2007:tm", "msps2007:tm", "mops 2007 tm", "msps 2007 tm", "microsoft office project server 2007: team member's guide", "project server2007: team member", "server 2007: team member", "project server 2007 team member", "server 2007: team member", "project 2007: tm", "project 2007 tm", "project2007tm"
      name = "mops2007:tm"

  ### 2010 editions
    # Managing Projects with Microsoft Project 2010
    when "mpwmp2010", "managing projects with microsoft project 2010", "mpwmp 2010", "msp2010", "msp 2010", "project 2010 desktop", "project 2010 fundamentals"
      name = "mpwmp2010"
    # Microsoft Project Server 2010: Project Manager's Guide
    when "mops2010pm", "msps2010pm", "mops2010_pm", "msps2010_pm", "mops2010:pm", "msps2010:pm", "mops 2010 pm", "msps 2010 pm", "microsoft office project server 2010: project manager's guide", "project server 2010: pm", "server 2010: pm", "project server 2010 pm", "server 2010 pm", "project 2010: pm", "project 2010 pm", "project2010:pm"
      name = "msps2010:pm"
    # Microsoft Project Server 2010: Administrator's Guide
    when "mops2010admin", "msps2010admin", "mops2010_admin", "msps2010_admin", "mops2010:admin", "msps2010:admin", "mops 2010 admin", "msps 2010 admin", "microsoft office project server 2010: administrators' guide", "project server 2010: admin", "server 2010: admin", "project server 2010 admin", "server 2010 admin", "project 2010: admin", "project 2010 admin", "project2010admin"
      name = "msps2010:admin"
    # Microsoft Project Server 2010: Team Member's Guide
    when "mops2010tm", "msps2010tm", "mops2010_tm", "msps2010_tm", "mops2010:tm", "msps2010:tm", "mops 2010 tm", "msps 2010 tm", "microsoft office project server 2010: team members' guide", "project server 2010: tm", "server 2010: tm", "project server 2010 tm", "server 2010 tm", "project 2010: tm", "project 2010 tm", "project2010tm"
      name = "msps2010:tm"
    # Microsoft Business Intelligence: Building Executive Dashboards with SharePoint 2010
    when "bi", "business intelligence", "building executive dashboards"
      name = "bi"
    # SharePoint 2010 for Effective Team Collaboration
    when "spfepm2010", "sharepoint for effective project management 2010", "sharepoint for effective team collaboration", "sharepoint for effective team collaboration 2010", "spfetc2010", "spfetc"
      name = "spfetc2010"

  ### Spanish
    # Microsoft Office Project Server 2007: Guía del Administrador de Proyectos
    when "es mops2007pm", "es msps2007pm", "es mops2007_pm", "es msps2007_pm", "es mops2007:pm", "es msps2007:pm", "es mops 2007 pm", "es msps 2007 pm", "spanish microsoft office project server 2007: project manager's guide", "spanish project server 2007: pm", "spanish server 2007: pm", "spanish project server 2007 pm", "spanish server 2007 pm", "es project 2007: pm", "es project 2007 pm", "es project2007:pm"
      name = "es mops2007:pm"
    # Microsoft Office Project Server 2007: Guía del Miembro del Equipo
    when "es mops2007tm", "es msps2007tm", "es mops2007_tm", "es msps2007_tm", "es mops2007:tm", "es msps2007:tm", "es mops 2007 tm", "es msps 2007 tm", "spanish microsoft office project server 2007: team member's guide", "spanish project server 2007: tm", "spanish server 2007: tm", "spanish project server 2007 tm", "spanish server 2007 tm", "spanish project 2007: tm", "spanish project 2007 tm", "spanish project2007:tm"
      name = "es mops2007:tm"
    # Administración de Proyectos Práctica
    when "es ppm", "spanish practial project management", "administración de proyectos práctica"
      name = "es ppm"

  ### Misc. books
    # Microsoft Access in a SharePoint World
    when "masw", "microsoft access in a sharepoint world", "access"
      name = "masw"
    # Managing Requirements Gathering
    when "mrg", "managing requirements gathering"
      name = "mrg"
    # Practical Project Management
    when "ppm", "practical project management"
      name = "ppm"

  ### Commands/Errors
    when "help"
      puts "I ain't gunna help you."
      userInput = nil
    else
      puts "I don't know that book!"
      userInput = nil
  end
end
# end of the product thesaurus

bookList = {
  # 2007 editions
  "spfepm2007"      => Book.new("SharePoint for Effective Project Management", 262), 
  "mpwmp2007"       => Book.new("Managing Projects with Microsoft Project 2007", 326),
  "mops2007:pm"     => Book.new("Microsoft Office Project Server 2007: Project Manager's Guide", 470),
  "mops2007:r&a"    => Book.new("Microsoft Office Project Server 2007: Research and Analysis Guide", 234),
  "mops2007:admin"  => Book.new("Microsoft Office Project Server 2007: Administrator's Guide", 464),
  "mops2007:tm"     => Book.new("Microsoft Office Project Server 2007: Team Member's Guide", 180),
  # 2010 editions
  "mpwmp2010"       => Book.new("Managing Projects with Microsoft Project 2010", 382), 
  "msps2010:pm"     => Book.new("Microsoft Project Server 2010: Project Manager's Guide", 356),
  "msps2010:admin"  => Book.new("Microsoft Project Server 2010: Administrator's Guide", 412),
  "msps2010:tm"     => Book.new("Microsoft Project Server 2010: Team Member's Guide", 192),
  "bi"              => Book.new("Microsoft Business Intelligence: Building Executive Dashboards", 288),
  "spfetc2010"      => Book.new("SharePoint for Effective Team Collaboration", 302),
  # Spanish
  "es mops2007:pm"  => Book.new("Microsoft Office Project Server 2007: Guía del Administrador de Proyectos", 414),
  "es mops2007:tm"  => Book.new("Microsoft Office Project Server 2007: Guía del Miembro del Equipo", 134),
  "es ppm"          => Book.new("Administración de Proyectos Práctica", 178),
  # Misc. books
  "masw"            => Book.new("Microsoft Access in a SharePoint World", 478),
  "mrg"			        => Book.new("Managing Requirements Gathering", 190),
  "ppm"			        => Book.new("Practical Project Management", 206)
}

puts "How many books in this run?"
bookCount = gets.chomp.to_i

aBook = bookList[name]
aBook.cost
orderCount = MaterialsOrder.new(bookCount)
orderCount.cost
orderCost = orderCount.books*aBook.totalCost + orderCount.totalCost
bookCost = aBook.totalCost + orderCount.costPerBook
puts "An order of #{bookCount} copies of '#{aBook.name}' will cost a total of $#{(orderCost*100).round / 100.0} ($#{(bookCost*100).round / 100.0} per book)."
# aBook = Book.new(name, pages)
# aBook.cost
