// Install mongoose
const mongoose = require('mongoose');
// Run main function and catch error
main().catch(err => console.log(err));
// async function
async function main() {
    await mongoose.connect('mongodb://localhost:27017/fruitsDB');
    // Create schema reference and define it
    const fruitSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please check your data entry, no name specified!"]
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    });
    // Compile schema into  model
    const Fruit = mongoose.model("Fruit", fruitSchema);
    // Create model document
    const fruit = new Fruit({
        name: "Apple",
        rating: 7,
        review: "Pretty solid as a fruit."
    });
    // Save document to database
    // await fruit.save();

    // New Schema, model, and document
    const personSchema = new mongoose.Schema({
        name: String,
        age: Number,
        favoriteFruit: fruitSchema
    });
    const Person = mongoose.model("Person", personSchema);
const mango = new Fruit({
name: "Mango",
rating: 6,
review: "Decent fruit."
});
await mango.save();
Person.updateOne({name:"John"}, {favoriteFruit: mango}, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Succesfully updated the document.")
    }
})
    // const person = new Person({
    //     name: "Amy",
    //     age: 12,
    //     favoriteFruit: pineapple
    // });
    // await person.save();


// Saved for reference
    // // New fruit documents in bulk
    // const kiwi = new Fruit({
    //     name: "Kiwi",
    //     rating: 10,
    //     review: "The best fruit!"
    // });
    // const orange = new Fruit({
    //     name: "Orange",
    //     rating: 4,
    //     review: "Too sour for me"
    // });
    // const banana = new Fruit({
    //     name: "Banana",
    //     rating: 3,
    //     review: "Weird texture"
    // });
    // Fruit.insertMany([kiwi, orange, banana], function (err) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Successfully saved all the fruits to fruitsDB");
    //     }
    // });
    // // Save all fruit documents created
    // await fruit.save();
    

// Saved for reference
    // // Update a document
    // Fruit.updateOne({_id: "62dde9a8cde8c72e8a024d8b"}, {name: "Peach"}, function(err){
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log("Succesfully updated the document!")
    // }
    // });

// // Delete a document, can also use .deleteMany()
//     Fruit.deleteOne({name: "Peach"}, function(err){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Succesfully deleted the document!")
//         }
//     });
    // Person.deleteMany({name: "John"}, function(err){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log("Succesfully deleted all the documents!")
    //     }
    // });
    
    // Find documents
    const fruits = await Fruit.find(function(err, fruits){
        if(err){
            console.log(err);
        } else {
            fruits.forEach(function(fruit){
            console.log(fruit.name);
            });
        }
    }).clone();


    // Close connection
    mongoose.connection.close();
    // End async function
};



