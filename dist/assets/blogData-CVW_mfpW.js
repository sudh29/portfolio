const e=`<div class="solid-principles-blog"><header class="blog-header"><h1 class="main-title">SOLID Principles – Explained Like You're Playing With LEGO</h1><p class="subtitle">A beginner-friendly guide to writing clean, maintainable code with Python examples</p><div class="meta-info"><span class="difficulty">Beginner Friendly</span><span class="reading-time">10 min read</span><span class="category">Software Design</span></div></header><section class="introduction"><h2>What Are SOLID Principles?</h2><p>SOLID principles are five fundamental design principles that help developers create software that's easy to maintain, extend, and understand. Think of them as the golden rules for building robust, scalable applications.</p><div class="principles-overview"><div class="principle-card"><span class="principle-letter">S</span><span class="principle-name">Single Responsibility</span></div><div class="principle-card"><span class="principle-letter">O</span><span class="principle-name">Open/Closed</span></div><div class="principle-card"><span class="principle-letter">L</span><span class="principle-name">Liskov Substitution</span></div><div class="principle-card"><span class="principle-letter">I</span><span class="principle-name">Interface Segregation</span></div><div class="principle-card"><span class="principle-letter">D</span><span class="principle-name">Dependency Inversion</span></div></div></section><section class="principle" id="single-responsibility"><h2><span class="principle-acronym">S</span>ingle Responsibility Principle (SRP)</h2><div class="principle-explanation"><h3>🎯 The Rule</h3><p><strong>A class should have only one reason to change.</strong> In other words, each class should have a single, well-defined responsibility.</p></div><div class="toy-analogy"><h3>🧸 Toy Analogy</h3><p>Think of specialized toys:</p><ul><li>🐕 Dog toy → only barks</li><li>🐱 Cat toy → only meows</li><li>❌ No "dog-cat hybrid toy" that tries to do both</li></ul></div><div class="code-examples"><h3>💻 Code Examples</h3><div class="example bad-example"><h4>❌ Bad Example: One Class Doing Multiple Jobs</h4><pre><code class="language-python">class Robot:
    def paint_wall(self):
        print("Painting wall...")
    
    def cook_food(self):
        print("Cooking food...")
    
    def sing_song(self):
        print("Singing song...")

# This robot is doing too many things!
robot = Robot()
robot.paint_wall()  # Should it paint?
robot.cook_food()   # Or cook?
robot.sing_song()   # Or sing?</code></pre><p class="problem">Problem: This class violates SRP because it handles painting, cooking, and singing - three completely different responsibilities.</p></div><div class="example good-example"><h4>✅ Good Example: Separate Responsibilities</h4><pre><code class="language-python">class PainterRobot:
    def paint_wall(self):
        print("Painting wall...")

class ChefRobot:
    def cook_food(self):
        print("Cooking food...")

class SingerRobot:
    def sing_song(self):
        print("Singing song...")

# Each robot has one clear purpose
painter = PainterRobot()
chef = ChefRobot()
singer = SingerRobot()

painter.paint_wall()  # This robot only paints
chef.cook_food()      # This robot only cooks
singer.sing_song()    # This robot only sings</code></pre><p class="benefit">Benefit: Each class has a single responsibility, making the code easier to maintain, test, and modify.</p></div></div></section><section class="principle" id="open-closed"><h2><span class="principle-acronym">O</span>pen/Closed Principle (OCP)</h2><div class="principle-explanation"><h3>🎯 The Rule</h3><p><strong>Software entities should be open for extension but closed for modification.</strong> You should be able to add new functionality without changing existing code.</p></div><div class="toy-analogy"><h3>🧸 Toy Analogy</h3><p>Think of a toy box:</p><ul><li>📦 The box is "closed" - you don't modify existing toys inside</li><li>➕ To add a new toy, you simply place it in the box</li><li>🔒 Existing toys remain unchanged</li></ul></div><div class="code-examples"><h3>💻 Code Examples</h3><div class="example good-example"><h4>✅ Good Example: Extensible Without Modification</h4><pre><code class="language-python"># Base animal class (closed for modification)
class Animal:
    def speak(self):
        pass

# Existing animals (closed for modification)
class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# Adding a new animal without touching old code (open for extension)
class Cow(Animal):
    def speak(self):
        return "Moo!"

# Function works with any animal type
def animal_sound(animal: Animal):
    print(animal.speak())

# Usage - works with all animals
animal_sound(Dog())  # Output: Woof!
animal_sound(Cat())  # Output: Meow!
animal_sound(Cow())  # Output: Moo!</code></pre><p class="benefit">Benefit: We added the Cow class without changing Dog, Cat, or the animal_sound function. The system is open for extension but closed for modification.</p></div></div></section><section class="principle" id="liskov-substitution"><h2><span class="principle-acronym">L</span>iskov Substitution Principle (LSP)</h2><div class="principle-explanation"><h3>🎯 The Rule</h3><p><strong>Subtypes must be substitutable for their base types without breaking the application.</strong> If you have a parent class, any child class should work in its place.</p></div><div class="toy-analogy"><h3>🧸 Toy Analogy</h3><p>Think of vehicle toys:</p><ul><li>🚗 Car toy moves forward when you press the button</li><li>🚛 Truck toy moves forward when you press the button</li><li>🔄 You can swap one for the other without changing how you use them</li></ul></div><div class="code-examples"><h3>💻 Code Examples</h3><div class="example good-example"><h4>✅ Good Example: Proper Substitution</h4><pre><code class="language-python"># Parent class
class Vehicle:
    def move_forward(self):
        raise NotImplementedError

# Child classes that properly substitute the parent
class Car(Vehicle):
    def move_forward(self):
        print("Car is moving forward.")

class Truck(Vehicle):
    def move_forward(self):
        print("Truck is moving forward.")

# Function that uses parent type
def drive(vehicle: Vehicle):
    vehicle.move_forward()

# Usage - any vehicle type works
drive(Car())   # Output: Car is moving forward.
drive(Truck()) # Output: Truck is moving forward.

# We can even create a list of different vehicles
vehicles = [Car(), Truck()]
for vehicle in vehicles:
    drive(vehicle)</code></pre><p class="benefit">Benefit: Truck can replace Car anywhere in the code without breaking functionality. The drive function doesn't need to know which specific vehicle type it's working with.</p></div></div></section><section class="principle" id="interface-segregation"><h2><span class="principle-acronym">I</span>nterface Segregation Principle (ISP)</h2><div class="principle-explanation"><h3>🎯 The Rule</h3><p><strong>Clients should not be forced to depend on interfaces they don't use.</strong> It's better to have many small, specific interfaces than one large, general-purpose interface.</p></div><div class="toy-analogy"><h3>🧸 Toy Analogy</h3><p>Think of toy remotes:</p><ul><li>🚗 Car remote → only has "forward" and "reverse" buttons</li><li>🚁 Drone remote → only has "up" and "down" buttons</li><li>❌ Don't give every toy all possible buttons</li></ul></div><div class="code-examples"><h3>💻 Code Examples</h3><div class="example bad-example"><h4>❌ Bad Example: One Interface with Too Many Methods</h4><pre><code class="language-python"># Bad: One interface forcing all toys to implement everything
class Toy:
    def move_forward(self): pass
    def fly(self): pass
    def swim(self): pass

class CarToy(Toy):
    def move_forward(self):
        print("Car moving forward.")
    def fly(self): pass      # Not needed for a car!
    def swim(self): pass     # Not needed for a car!

class DroneToy(Toy):
    def move_forward(self): pass  # Not needed for a drone!
    def fly(self):
        print("Drone flying.")
    def swim(self): pass     # Not needed for a drone!</code></pre><p class="problem">Problem: Each toy is forced to implement methods it doesn't need, violating ISP.</p></div><div class="example good-example"><h4>✅ Good Example: Separate, Focused Interfaces</h4><pre><code class="language-python"># Good: Separate interfaces for different capabilities
class Movable:
    def move_forward(self): pass

class Flyable:
    def fly(self): pass

class Swimmable:
    def swim(self): pass

# Each toy only implements what it needs
class CarToy(Movable):
    def move_forward(self):
        print("Car moving forward.")

class DroneToy(Flyable):
    def fly(self):
        print("Drone flying.")

class BoatToy(Swimmable):
    def swim(self):
        print("Boat swimming.")

# Usage
car = CarToy()
drone = DroneToy()
boat = BoatToy()

car.move_forward()  # Car only knows how to move
drone.fly()         # Drone only knows how to fly
boat.swim()         # Boat only knows how to swim</code></pre><p class="benefit">Benefit: Each toy only implements the abilities it actually needs. No unnecessary method implementations.</p></div></div></section><section class="principle" id="dependency-inversion"><h2><span class="principle-acronym">D</span>ependency Inversion Principle (DIP)</h2><div class="principle-explanation"><h3>🎯 The Rule</h3><p><strong>High-level modules should not depend on low-level modules. Both should depend on abstractions.</strong> Abstractions should not depend on details. Details should depend on abstractions.</p></div><div class="toy-analogy"><h3>🧸 Toy Analogy</h3><p>Think of a play system:</p><ul><li>🎮 Your "play system" doesn't care if you have a car toy or train toy</li><li>🔄 As long as the toy can move, the system works</li><li>🔄 You can swap toys without changing the play system</li></ul></div><div class="code-examples"><h3>💻 Code Examples</h3><div class="example good-example"><h4>✅ Good Example: Depending on Abstractions</h4><pre><code class="language-python"># Abstraction (interface) - both high and low level depend on this
class Messenger:
    def send_message(self, message):
        pass

# Low-level modules implementing the abstraction
class EmailMessenger(Messenger):
    def send_message(self, message):
        print(f"Sending Email: {message}")

class SMSMessenger(Messenger):
    def send_message(self, message):
        print(f"Sending SMS: {message}")

class SlackMessenger(Messenger):
    def send_message(self, message):
        print(f"Sending Slack: {message}")

# High-level module depending on abstraction, not concrete classes
class NotificationService:
    def __init__(self, messenger: Messenger):
        self.messenger = messenger
    
    def send_notification(self, message):
        self.messenger.send_message(message)

# Usage - easily switch between different messengers
email_service = NotificationService(EmailMessenger())
email_service.send_notification("Hello Email!")

sms_service = NotificationService(SMSMessenger())
sms_service.send_notification("Hello SMS!")

slack_service = NotificationService(SlackMessenger())
slack_service.send_notification("Hello Slack!")</code></pre><p class="benefit">Benefit: We can switch between email, SMS, and Slack without touching the NotificationService class. The high-level module depends on the Messenger abstraction, not concrete implementations.</p></div></div></section><section class="summary"><h2>📋 Quick Reference Summary</h2><div class="summary-table"><table><thead><tr><th>Principle</th><th>One-Line Meaning</th><th>Toy Analogy</th></tr></thead><tbody><tr><td><strong>S</strong>ingle Responsibility</td><td>One job per class</td><td>Dog toy only barks</td></tr><tr><td><strong>O</strong>pen/Closed</td><td>Add without changing</td><td>Add new toy to box</td></tr><tr><td><strong>L</strong>iskov Substitution</td><td>Subclass replace parent</td><td>Truck works like car</td></tr><tr><td><strong>I</strong>nterface Segregation</td><td>Only needed methods</td><td>Remote with right buttons</td></tr><tr><td><strong>D</strong>ependency Inversion</td><td>Depend on abstractions</td><td>Play system works with any toy</td></tr></tbody></table></div></section><section class="conclusion"><h2>🎯 Why SOLID Principles Matter</h2><p>Following SOLID principles helps you write code that's:</p><ul><li>🔄 <strong>Maintainable</strong> - Easy to modify and update</li><li>📈 <strong>Scalable</strong> - Easy to extend with new features</li><li>🧪 <strong>Testable</strong> - Easy to write unit tests</li><li>👥 <strong>Collaborative</strong> - Easy for team members to understand</li><li>🚀 <strong>Robust</strong> - Less prone to bugs and errors</li></ul><div class="call-to-action"><h3>Ready to Apply SOLID Principles?</h3><p>Start by identifying one principle you can apply to your current code. Remember, you don't need to implement all principles at once - gradual improvement is better than no improvement at all!</p></div></section></div>`,s={"system-design":{name:"System Design",slug:"system-design",posts:[{slug:"solid-principles",title:"SOLID Principles",excerpt:"A deep dive into the five fundamental principles of object-oriented design.",content:e},{slug:"cap-theorem",title:"CAP Theorem",excerpt:"Understanding the trade-offs between Consistency, Availability, and Partition Tolerance.",content:"The CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency, Availability, and Partition Tolerance..."},{slug:"acid-properties",title:"ACID Properties",excerpt:"Exploring the core principles of database transaction reliability.",content:"ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee data validity despite errors, power failures, and other mishaps..."}]},dsa:{name:"Data Structures & Algorithms",slug:"dsa",posts:[{slug:"big-o-notation",title:"Big O Notation",excerpt:"Understanding the basics of algorithmic complexity.",content:"Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity..."}]},python:{name:"Python",slug:"python",posts:[]},rust:{name:"Rust",slug:"rust",posts:[]},mojo:{name:"Mojo",slug:"mojo",posts:[]},"operating-system":{name:"Operating System",slug:"operating-system",posts:[]},"ai-and-ai-agents":{name:"AI and AI Agents",slug:"ai-and-ai-agents",posts:[]},"machine-learning":{name:"Machine Learning",slug:"machine-learning",posts:[]},database:{name:"Database",slug:"database",posts:[{slug:"sql",title:"SQL",excerpt:"A deep dive into the most popular query language for relational databases.",content:"SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)..."},{slug:"nosql",title:"NoSQL",excerpt:"Exploring the world of non-relational databases.",content:'A NoSQL (originally referring to "non-SQL" or "non-relational") database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases...'},{slug:"vector-databases",title:"Vector Databases",excerpt:"Understanding the databases that power AI applications.",content:"Vector databases are a type of database that stores data as high-dimensional vectors, which are mathematical representations of features or attributes. These databases are optimized for similarity search, which is the process of finding the most similar items to a given query item..."}]}};export{s as b};
