import  express from "express"
import "dotenv/config";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from "./routes/categoryRoute.js"
import productRoutes from "./routes/productRoute.js"
// import {fileUrlToPath} from "url"
// import path from 'path'

// rest object
const app = express();

//middleware 
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
// app.use(express.static(path.join(__dirname, './client/build')))

//database config
connectDB();

//esmodule fix
// const __filename= fileUrlToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);





//test API route
app.get("/", (req, res) => {
    res.json("hello");
});

//rest api

// app.use('*', function(req, res){
//  res.sendFile(path.join(__dirname, './client/build/index.html'))
// })

//PORT
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//     console.log(`server is running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})