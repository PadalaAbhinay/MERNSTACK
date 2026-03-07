
//Goto Command Prompt - cmd
//services > to check whether mongodb server is running
//in command prompt type mongosh to connect to mongodb server
//show dbs
//use mru26a
//show collections
//db.createCollection("products")
//db.products.drop()
//db.products.renameCollection("product")

//insert document in products collection
db.products.insertOne({
  name: "Product 1",
  price: 50,
});

//to view documents
db.products.find();

//insert mulitple documents
db.products.insertMany([
  { name: "Product 2", price: 14 },
  { name: "Product 3", price: 100 },
]);

//db.products.find() - all documents as array of objects
//db.producst.findOne() - first document as object

//find with condition
db.products.find({ name: "Product 2" });

//show or hide fields
db.products.find({}, { _id: 0 }); //except _id all the fields will appear
db.products.find({}, { _id: 0, name: 1 }); //only name field will appear
db.products.find({ name: "Product 3" }, { _id: 0, name: 1 });

//updating single document
db.products.updateOne(
    { name: "Product 2" }, 
    { $set: { price: 25 } 
});

//update multiple documents
db.products.updateMany({},{$set:{rating:5}})

//deleting one document
db.products.deleteOne({name:"Product 2"})

//deleting multiple documents
db.products.deleteMany({rating:5})
