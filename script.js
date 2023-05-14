//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	species(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(){
		super('dog');
	}
	bark(){
		console.log('woof');
	}
}

class Cat extends Animal {
	constructor(){
		super('cat');
	}
	purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
