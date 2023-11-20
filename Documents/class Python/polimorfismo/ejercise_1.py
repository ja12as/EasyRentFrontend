class Animal:
    def __init__(self, name) -> None:
        self.name = name
    
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "guauuu"
    

class Cat(Animal):
    def make_sound(self):
        return "miauuu"
    

class Cow(Animal):
    def make_sound(self):
        return "muu"
    
animals =[Dog("Yeico"), Cat("Lupe"),Cow("lola")]

for animal in animals:
    print(animal.name + " dice " + animal.make_sound )