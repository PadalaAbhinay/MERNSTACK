
db.products.aggregate([{}, {}]);

//lt,lte,gt,gte,eq,ne
db.products.aggregate([
  { $match: { price: { $gt: 100 } } },
  { $project: { _id: 0, name: 1, price: 1 } },
  { $sort: { price: -1 } },
  { $limit: 2 },
  { $skip: 1 },
]);

//Schema-less architecture

db.products.updateOne(
  { name: "Product 5" },
  { $set: { category: "Category B" } },
);

db.products.aggregate([
  { $group: { _id: "$category", total: { $sum: "$price" } } },
]);
