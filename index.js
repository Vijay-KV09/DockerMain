import mongoose from "mongoose"

const database = "mongodb://localhost:27017/bookstore";

 mongoose.connect(database)
	.then(()=>{console.log("Database connected safely")
}).catch(()=>{console.log("Error in db connection")})
