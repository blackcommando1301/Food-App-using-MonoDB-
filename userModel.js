


const mongoose=require("mongoose");
const {Schema} = mongoose;

let dbLink=`mongodb+srv://dbuser:Safepower%40123@cluster0.ed6kktn.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbLink).then(function(){
    console.log("data base is connected")
}).catch(function(err){
    console.log("error", err);
})


let userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Please Enter a Valid Name "]
    },
    password:{
        type:String,
        required:[true,"Please Enter Password "]
    },
    confirmPassword:{
        type:String,
        required:[true,"Please enter Confirm Password"],
        validate:{
            validator:function(){
                return this.password==this.confirmPassword;

            },
            message:"Confirm Password and Password do not match"
        }
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is not valid"]

    },
    phoneNumber:{
        type:String,
        minLength:[10,"Phone Number is not valid"],
        maxLength:[11,"Phone Number is not Valid "]
    },
    pic:{
        type:String,
        default:"./deafault pic.jpg"
    }, 
    address:{
        type:String,
    }


    
})

const userModal1=mongoose.model("FoodUserModel",userSchema);

module.exports=userModal1;