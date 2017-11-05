function farmAnimals(name,image,sound) {
  this.name = name;
  this.image = image;
  this.legs = legs;
  this.footType = footType;
  this.noseType = noseType;
  this.sound = sound;
  farmAnimals.prototype.printInfo = function() {
  console.log(this.name + "s usually make a " + this.sound + " sound.");
  }
}



var cow = new farmAnimals("cow","https://png.pngtree.com/element_pic/20/16/02/0156af459771ab6.jpg","Moooo");
var pig = new farmAnimals("pig","https://png.pngtree.com/element_pic/16/11/13/c8beec3b21ad512375181f2e6c5e7483.jpg","");
var chicken = new farmAnimals("chicken","http://www.freepngimg.com/download/chicken/10-chicken-png-image.png","");

// console.log(mikeMyers instanceof Killer);

// console.log(freddyKreugs instanceof Killer);

// console.log(ghostFace instanceof Killer);

cow.printInfo();
pig.printInfo();
chicken.printInfo();