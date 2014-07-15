require 'erb'

template = File.read('example.erb')

renderer = ERB.new(template)
puts renderer.result()
