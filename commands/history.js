
const admin = require("../firebase.js")
const firestore = admin.firestore()

let history = async (message) => {
    console.log(123)
    let storage = firestore.collection("test").doc("ATqzMBhCJKOQsPMDtnLk")
    
    console.log((await storage.get()).data())
}
module.exports = history