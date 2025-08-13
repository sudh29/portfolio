export const solidPrinciplesContent = `SOLID Principles – Explained Like You’re Playing With LEGO (with Python Examples)
Think of SOLID as a set of golden rules for building software so it’s easy to maintain, extend, and understand.

S – Single Responsibility Principle (SRP)
Rule: A class should have only one job.

Toy Example:

Dog toy → barks

Cat toy → meows

No “dog-cat hybrid toy” that tries to do both.

Python Example (Bad vs Good):

python
Copy
Edit
# ❌ Bad Example: One class doing multiple jobs
class Robot:
    def paint_wall(self):
        print("Painting wall...")
    
    def cook_food(self):
        print("Cooking food...")
    
    def sing_song(self):
        print("Singing song...")

# ✅ Good Example: Separate responsibilities
class PainterRobot:
    def paint_wall(self):
        print("Painting wall...")

class ChefRobot:
    def cook_food(self):
        print("Cooking food...")

class SingerRobot:
    def sing_song(self):
        print("Singing song...")

# Usage
painter = PainterRobot()
painter.paint_wall()
✅ Why it’s good: Each robot has one clear purpose, making the code easier to maintain.

O – Open/Closed Principle (OCP)
Rule: Classes should be open for extension, but closed for modification.

Toy Example:

Box of animal toys is closed — you don’t change existing toys inside.

If you want a new toy, you add it without modifying old ones.

Python Example:

python
Copy
Edit
# Base animal
class Animal:
    def speak(self):
        pass

# Existing animals
class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# Adding a new animal without touching old code
class Cow(Animal):
    def speak(self):
        return "Moo!"

# Function works with any new animal
def animal_sound(animal: Animal):
    print(animal.speak())

# Usage
animal_sound(Dog())  # Woof!
animal_sound(Cat())  # Meow!
animal_sound(Cow())  # Moo!
✅ Why it’s good: We added Cow without changing Dog or Cat.

L – Liskov Substitution Principle (LSP)
Rule: Subclasses should work anywhere their parent class is used, without breaking functionality.

Toy Example:

Car and truck both move forward when you press the button.

You can swap one for the other without changing how you use them.

Python Example:

python
Copy
Edit
# Parent class
class Vehicle:
    def move_forward(self):
        raise NotImplementedError

# Child classes
class Car(Vehicle):
    def move_forward(self):
        print("Car is moving forward.")

class Truck(Vehicle):
    def move_forward(self):
        print("Truck is moving forward.")

# Function that uses parent type
def drive(vehicle: Vehicle):
    vehicle.move_forward()

# Usage
drive(Car())   # Car is moving forward.
drive(Truck()) # Truck is moving forward.
✅ Why it’s good: Truck can replace Car without breaking the drive function.

I – Interface Segregation Principle (ISP)
Rule: Classes should not be forced to implement methods they don’t use.

Toy Example:

Remote for a toy car → only has buttons for “forward” and “reverse”.

Remote for a drone → has “up” and “down” buttons.

Don’t give every toy all buttons.

Python Example:

python
Copy
Edit
# ❌ Bad: One interface with too many methods
class Toy:
    def move_forward(self): pass
    def fly(self): pass
    def swim(self): pass

class CarToy(Toy):
    def move_forward(self):
        print("Car moving forward.")
    def fly(self): pass  # Not needed
    def swim(self): pass # Not needed

# ✅ Good: Separate interfaces
class Movable:
    def move_forward(self): pass

class Flyable:
    def fly(self): pass

class Swimmable:
    def swim(self): pass

class CarToy(Movable):
    def move_forward(self):
        print("Car moving forward.")

class DroneToy(Flyable):
    def fly(self):
        print("Drone flying.")
✅ Why it’s good: Each toy only implements the abilities it actually needs.

D – Dependency Inversion Principle (DIP)
Rule: High-level code should depend on abstractions, not low-level details.

Toy Example:

Your “play system” doesn’t care if you have a car toy or train toy, as long as it can move.

You can swap toys without changing the play system.

Python Example:

python
Copy
Edit
# Abstraction (interface)
class Messenger:
    def send_message(self, message):
        pass

# Low-level modules
class EmailMessenger(Messenger):
    def send_message(self, message):
        print(f"Sending Email: {message}")

class SMSMessenger(Messenger):
    def send_message(self, message):
        print(f"Sending SMS: {message}")

# High-level module
class NotificationService:
    def __init__(self, messenger: Messenger):
        self.messenger = messenger
    
    def send_notification(self, message):
        self.messenger.send_message(message)

# Usage
email_service = NotificationService(EmailMessenger())
email_service.send_notification("Hello Email!")

sms_service = NotificationService(SMSMessenger())
sms_service.send_notification("Hello SMS!")
✅ Why it’s good:
We can switch between email and SMS without touching the NotificationService class.

Final Quick Summary Table
Principle	One-Line Meaning	Toy Analogy
S	One job per class	Dog toy only barks
O	Add without changing	Add new toy to box
L	Subclass replace parent	Truck works like car
I	Only needed methods	Remote with right buttons
D	Depend on abstractions	Play system works with any toy`;
