var Faker = require('Faker');

// console.log(fake);

// usage var Faker = require('./Faker');
// var randomName = Faker.Name.findName(); // Rowan Nikolaus 
// var randomEmail = Faker.Internet.email(); // Kassandra.Haley@erich.biz 
// var randomCard = Faker.Helpers.createCard(); //

for(var i=0; i<10; i++){
    console.log(Faker.Name.firstName() + " " + Faker.Name.lastName());
}
