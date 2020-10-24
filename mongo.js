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