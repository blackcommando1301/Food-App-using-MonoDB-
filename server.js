let express = require("express");

let app = express();

app.use(express.json());

const userModel = require("./userModel");

// signup
app.post("/signup", async function (req, res) {
  try {
    let data = req.body;
    console.log(data);

    let newUser = await userModel.create(data);

    res.json({
      message: "data is sent to database",
      data: data,
    });
  } catch (err) {
    res.send(err.message);
  }
});

// login

app.post("/login", async function (req, res) {
  try {
    let data = req.body;
    let { email, password } = data;
    if (email && password) {
      let user = await userModel.findOne({ email: email });
      if (user) {
        if (user.password == password) {
          res.send("Login Sucess");
        } else {
          res.send("password or Email doesnot match");
        }
      } else {
        res.send("User not Exists Please SignUp");
      }
    } else {
      res.send("Please Enter Email or Password");
    }
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(3000, function () {
  console.log("server is started");
});
