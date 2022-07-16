import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./database/db.js";
import Client from "./models/clientModel.js";
import Admin from "./models/adminModel.js";
import Category from "./models/categoryModel.js";
import Product from "./models/productModel.js";
import Vendor from "./models/vendorModel.js";
import Cart from "./models/cartModel.js";
import clientRouter from "./routes/clientRouter.js";
import adminRouter from "./routes/adminRouter.js";
import vendorRouter from "./routes/vendorRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import cartRouter from "./routes/cartRouter.js";



dotenv.config();

const app = express();



app.use(cors({credentials: true, origin: "http://localhost:3000"}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

/*app.use(session({
   secret : 'secretCode',
   resave: true,
   saveUninitialized: true
}));*/




app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next();
});

app.use(cookieParser());
//database connection
try{
   db.authenticate().then(()=>console.log("connection has been established"));
   //await Client.sync();
   //await Admin.sync();
   //await Vendor.sync();
   //await Category.sync();
   //await Product.sync();
   //await Cart.sync();
}catch(err){
   console.log(err);
}



//router
app.use(clientRouter);
app.use(adminRouter);
app.use(vendorRouter);
app.use(categoryRouter);
app.use(cartRouter);

app.get('/',(req,res)=>{
	res.send("hello world!!!");
})







const port = process.env.PORT;
app.listen(port,()=>console.log(`server is running on port: ${port}`));
