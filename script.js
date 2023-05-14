//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get species(){
		return this.species;
	}
	makeSound(sound){
		console.log(sound);
	}
}

class Dog extends Animal {
	constructor(){
		super('dog');
	}
	purr(){
		makeSound('purr');
	}
}

class Cat extends Animal {
	constructor(){
		super('cat');
	}
	bark(){
		makeSound('woof');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
