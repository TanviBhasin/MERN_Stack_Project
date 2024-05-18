const Feedback = require('./feedbackModel')

add = (req, res) => {

    var validationerrors = []

    if (!req.body.name)
        validationerrors.push("name is required")
    if (!req.body.email)
        validationerrors.push("email is required")
    if (!req.body.subject)
        validationerrors.push("subject is required")
    if (!req.body.message)
        validationerrors.push("message is required")

    if (validationerrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation error",
            errors: validationerrors
        })
    }
    else {
        //duplicate
        Feedback.findOne({ name: req.body.name })
            .then(content => {
                if (!content) {
                    //insert
                    let feedbackObj = new Feedback()
                    feedbackObj.name = req.body.name
                    feedbackObj.email = req.body.email
                    feedbackObj.subject = req.body.subject
                    feedbackObj.message = req.body.message
                    feedbackObj.save()
                        .then(feedbackData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Feedback Received",
                                data: feedbackData
                            })
                        })
                        .catch(err => {
                            res.json({
                                status: 500,
                                success: false,
                                message: "Internal Server Error",
                                errors: err.message
                            })
                        })
                }
                else {
                    res.json({
                        status: 422,
                        success: false,
                        message: "Record already exists",
                        data: content
                    })
                }

            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal Server Error",
                    errors: err.message
                })
            })

    }


}


getall = async (req,res)=>{

    var totalcount = await Feedback.find(req.body).countDocuments().exec()

    Feedback.find(req.body)
    .then(feedbackData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : feedbackData
        })
    })
    .catch(err=>{
        res.json({
            status:500,
            success:false,
            message : "Internal Server Error",
            errors :err.message
        })
    })
}


module.exports = {
    add,
    getall
}