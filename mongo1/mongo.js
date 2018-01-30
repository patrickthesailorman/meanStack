?????????????
function accept4or5or6(name, health, last_fought, attacks, stats, db) {
    db.monsters.insert();
} 
?????????????
db.monsters.insert( {
    "name": "",
    "health": ,
    "last fought": new Date(),
    "attacks": [],
    "stats": {},
    "db":
})



db.monsters.insert({
    "name": "monster3",
    "health": 15,
    "last fought": new Date(2017,12,12),
    "attacks": ["fire", "bite", "claw"],
    "stats": {"attack": 4, "defense": 2}
})

db.monsters.find()

db.monsters.find({
    "name": "monster3"
})

db.monsters.find({
    "attacks": ["fire"]},
     {multi: true}
)

db.monsters.find({
    "stats": {"defense": 2}
})

