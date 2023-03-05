const express = require("express");

const BrandUser =require("./routers/BrandRouter");

const influRouter =require("./routers/InfluencerRouter");
const utilRouter =require("./routers/util");
const RequirementRouter = require('./routers/RequirementRouter');
const BlogRouter = require("./routers/BlogRouter")

const cors = require("cors");

const app  = express();

const port = 5000;

app.use(cors({
    origin : ["http://localhost:3000"],
}))

app.use(express.json())

app.use("/brand", BrandUser);
app.use("/influencer" , influRouter);
app.use("/util" , utilRouter);
app.use('/requirement',RequirementRouter);
app.use('/blog' , BlogRouter);

app.use(express.static('./static'))


app.get("/", (req , res) =>{
    console.log("Running")
    res.send("Fir aa gye ")
} )



app.listen(port, () => {
    console.log("server Started");
});
