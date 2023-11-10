const mongose =require('mongoose')
const UserSchema = new mongose.Schema({
    // khai báo thuộc tính đối tượng

    email: String,
    password:String
})
const User = mongose.model("Users",UserSchema);
module.exports=User;