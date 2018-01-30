/* global db */
// ?????????????
// function accept4or5or6(name, health, last_fought, attacks, stats, db) {
//     db.monsters.insert();
// } 
// ?????????????
// db.monsters.insert( {
//     "name": "",
//     "health": ,
//     "last fought": new Date(),
//     "attacks": [],
//     "stats": {},
//     "db":
// })



// db.monsters.insert({
//     "name": "monster3",
//     "health": 15,
//     "last fought": new Date(2017,12,12),
//     "attacks": ["fire", "bite", "claw"],
//     "stats": {"attack": 4, "defense": 2}
// })

// db.monsters.find()

// db.monsters.find({
//     "name": "monster3"
// })

// db.monsters.find({
//     "attacks": ["fire"]},
//      {multi: true}
// )

// db.monsters.find({
//     "stats": {"defense": 2}
// })
var mongo = function(db) {

};

db.monsters.find({ "attack": {$lt: 10} })

db.monsters.find({ "Level": {$gt: 5, $lte: 15} })

db.monsters.find({ "attack": {$ne: "bite"} })

db.monsters.find(
    { "Level": {$lt: 6} },
    { "name": true, "Level": true, "health": true, "_id": false }
)

db.monsters.find(
    { "attack": {$gt: 10, $lt: 20} },
    { "health": false, "style": false }
)

db.monsters.find().count()

db.monsters.find().sort({ "Level": -1})