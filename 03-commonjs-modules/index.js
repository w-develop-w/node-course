const exportedOject = require('./multiple-exports')
const { myName, myHobbies, myFavoriteNumber} = exportedOject
const { myName: myOtherName, myFriendsName, myGreatHobbies} = require('./export-and-import')

const greeting = require('./single-export')

// Imports from multiple-exports
console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)
greeting(myName)

// Import from single-export
myHobbies.push('climbing')
console.log(myHobbies)


// Imports from export-and-import
console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)
