const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        password: {type:String, required: true},
        isAdmin: {type:Boolean},
        checkedOut: []
    }
)

const User= mongoose.model('User', userSchema)
export default User