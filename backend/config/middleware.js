const jwt = require("jsonwebtoken")
const privatekey = "MyProject@123"

module.exports = (req,res,next)=>{

    var token = req.headers['authorization']
    // console.log(token)
    
    jwt.verify(token,privatekey,function(err,result){
        console.log(err)
        console.log(result)
        if(err == null)
        {
            // req.body['tokendata'] = result
            req.decoded = result
            console.log(req.decoded)
            next()
        }
        else{
            res.json({
                status:403,
                success : false,
                message : "Please login to procceed"
            })
        }
    })
}