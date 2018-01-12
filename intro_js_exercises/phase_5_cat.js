function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};

let kitten = new Cat('charles', 'miranda');

kitten.cuteStatement();

Cat.prototype.cuteStatement = function() {
  return `Everybody loves ${this.name}`;
};

Cat.prototype.meow = function() {
  console.log('Mrwar!');
};

kitten.meow = function() {
  console.log("Meow!");
};
