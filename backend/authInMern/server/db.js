const mongoose = required("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connection(process.env.DB, connectionParams);
        console.log("Connected to database successfully")
    }catch (error) {
        console.log(error);
        console.log("could not connect to database!")

    }
};