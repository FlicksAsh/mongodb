db.createUser({
    user: 'jordan',
    pwd: 'password',
    customData: { startDate: new Date() },
    roles: [
      { role: 'clusterAdmin', db: 'admin' },
      { role: 'readAnyDatabase', db: 'admin' },
      'readWrite'
    ]
  })
  
db.getUsers()
db.dropUser('jon')

db.createCollection('books')
// { "ok" : 1 }

show collections

db.books.insert({
    "name": "OOP Programming",
    "publishedDate": new Date(),
    "authors": [
      {"name": "Jon Snow"},
      {"name": "Ned Stark"}
    ]
  })

  db.books.insertMany([
    {
      "name": "Confident Ruby",
      "publishedDate": new Date(),
      "authors": [
        { "name": "Avdi Grimm" }
      ]
    },
    {
      "name": "The War of Art",
      "publishedDate": new Date(),
      "authors": [
        {"name": "Steven Pressfield"}
      ]
    },
    {
      "name": "Blink",
      "publishedDate": new Date(),
      "authors": [
        {"name": "Malcolm Gladwell"}
      ]
    }
  ])

  db.books.find().pretty()

  // SQL equivalent 

  SELECT * from books


  db.books.find( {name: "OOP Programming"} ).pretty()


  // SQL equivalent 

  SELECT * from books WHERE name = "OOP Programming"

  db.books.find(
    {
      name: "Confident Ruby"
    },
    {
      _id: 0,
      name: 1,
      authors: 1
    }
  ).pretty()

  // SQL equivalent 

  SELECT name, authors FROM books WHERE name = 'Confident Ruby'

  db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
      { "name": "Malcolm Gladwell" },
      { "name": "Ghost Writer" }
    ]
  });
  
  
  db.books.find(
    {
      name: "Blink"
    },
    {
      publishedDate: 1,
      name: 1,
      authors: { $slice: 1 }
    }
  ).pretty()


db.books.remove({name: "OOP Programming"}, 1) // Removes a single document
db.books.remove({name: "OOP Programming"}) // Removes all documents

db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        { "name": "Malcolm Gladwell", "active": "true" },
        { "name": "Ghost Writer", "active": "true" }
    ]
});

db.books.find(
    {
      name: "Blink"
    },
    {
      name: 1,
      publishedDate: 1,
      "authors.name": 1
    }
  ).pretty()


  db.books.findOne({ name: "OOP Programming" } )


  db.books.insert({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});


db.books.findOne({ name: /.*deep work.*/i })



db.books.insert( 
    {
      "name": "Deep Work: Rules for Focused Success in a Distracted World",
      "publishedDate": new Date(),
      "reviews": 100,
      "authors": [
        {"name": "Cal Newport"}
      ]
    }
  )
  
  db.books.find({ reviews: { $exists: true } })
  db.books.find({ reviews: { $exists: false } })