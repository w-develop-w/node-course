function greeting(name) {
    console.log('Hello', name)
} 

module.exports = greeting

// DONT DO THIS!
// module.exports retains {}
// exports = greeting  