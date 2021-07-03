// Hyper -> mongod -> new Shell -- monog (to see databases)

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser : true});
//This is the minimum needed to connect the fruitsDB database running locally on the default port (27017)


//create
const fruitSchema =  new mongoose.Schema ({ 
    name: {type : String,
    required : [true, "Please check name"]   //validating data
    },
    rating: Number,
    review: String
});
                            // collection name (singular)
const Fruit = mongoose.model("Fruit", fruitSchema);   //collection name -> Fruit

const fruit = new Fruit({
   name : "Apple",
    rating : 9,
    review: "great"
}); 

//fruit.save();
//new fruit is added in our collection fruits(Fruit)


const peopleSchema = new mongoose.Schema({
    name : String,
    age : Number,
    favFruit : fruitSchema //relationship with other collections
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person({
    name : "John",
    age : 40,
    favFruit : fruit //connecting with other collection
   
})
person.save()


const kiwi = new Fruit({
    name : "kiwi",
    score : 8,
    review: "Best"
})
const banana = new Fruit({
    name : "Banana",
    score : 8,
    review: "Best"
})

const guava = new Fruit({
    name : "guava",
    score : 8,
    review: "Best"
})
// Fruit.insertMany([kiwi,banana,guava], function(err){
//     if(err) {                                             
//         console.log(err);        //For inserting many items in collection
//     }
// })


//Read
Fruit.find(function(err,fruits){
    if(err) console.log(err);
    else {//console.log(fruits);
    mongoose.connection.close();
    fruits.forEach(function(x){         //It will print the names of all items in fruits
        console.log(x.name);
    })
    }

})


//Update 
Fruit.updateOne({_id : "60e0027d03f2995244c4b217"} , {name : "papaya"}, function(err){
    if(err) console.log(err);
});

//Delete
Fruit.deleteOne({_id : "60e0027d03f2995244c4b217"}, function(err){
    if(err) console.log(err)
});

//Delete Many

// Person.deleteMany({name : "John"}, function(err){
//     if(err) console.log(err)
// });
