export default (err , req , res, next)=>{
    err.statusCode=err.statusCode || 500;
    err.message=err.message || "INTERNAL SERVER ERROR";

    //duplicate key error
    if(err.code===11000){
        err.message=`This  ${Object.keys(err.keyValue)} is already registered`;
        err.statusCode=400;
    } 

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    })
}