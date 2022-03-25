# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def single_letter(array)
    array.select do | value |
        if value.include(letter)
            value
        end
    end
end


## make a method takes in array & string parameters
## isolate words with letters given to an empty array
## iterate method to given array
## compare given variable to target wanted letters o and t
## 
##print the one that passes
## 

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_of_array(array)
    array.sum
end

# p sum_of_array(nums_array1)
# p sum_of_array(nums_array2)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike
   
    def initialize(model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
    def bike_info
        p "This #{@model} got #{@wheels} and it's current speed is #{@current_speed}."  
    end
    def pedal_faster(increase_speed)
        @current_speed = @current_speed + increase_speed
    end
    def brake(decrease_speed)
        @current_speed = @current_speed - decrease_speed
    end
end

my_bike = Bike.new("Schwin")
p my_bike.pedal_faster(15)
p my_bike.pedal_faster(23)
p my_bike.brake(6)
p my_bike.brake(13)

 
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
