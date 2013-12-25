# encoding: utf-8

module EPUBLICAN
  class Janitor
    def clean(f)
      @f = f
      if File.exists?("#{@f}.epub")
        @epub = "#{@f}.epub"
        puts "Removing old epub: #{@f}.epub"
        File.delete(@epub)
        puts "#{@epub} removed!"
      else
        puts "Couldn't figure out how to clean #{@f}.epub"
      end
    end
  end

  class Server
    def pour(filename)
      @filename = filename
      puts "\n Adding mimetype \n"
      `zip -X #{@filename}.epub mimetype`

      puts "\n Adding META-INF \n"
      `zip -rg #{@filename}.epub META-INF -x \*.DS_Store \*~` 

      puts "\n Adding OPS \n"
      `zip -rg #{@filename}.epub OPS -x \*.DS_Store \*~`
    end

    def serve(filename)
      @filename = filename
      puts "\n Opening epub \n"
      `open #{@filename}.epub`
    end
  end
end
