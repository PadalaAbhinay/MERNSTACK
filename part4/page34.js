import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";
const app = express();
app.use(expressLayouts);
app.use(express.static("public"));
app.set("layout","layout");
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(2000, () => console.log("Server Started"));

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "mysecretkey",//reccomended to store in env variable
    resave: false,//if true, session will be saved on every request, even if it wasn't modified. Setting it to false can help reduce unnecessary session saves and improve performance.
    saveUninitialized: true,//if true a default cookie gets created
  }),
);

let users = [
  { name: "Poojitha", email: "poojitha@gmail.com", password: "1234" },
  { name: "Ajay", email: "ajay@gmail.com", password: "1234" },
  { name: "Komal", email: "komal@gmail.com", password: "1234" },
];

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
      req.session.user = user;//session id gets created, check in the browser, inspect - application - cookies.
      res.redirect("/");
    } else {
      res.render("login", { error: "Invalid Password" });
    }
  } else {
    res.render("login", { error: "User not found" });
  }
  // res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  users = [...users, req.body];
  res.redirect("/");
});

app.get("/", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { users });
  } else {
    res.redirect("/login");
  }
});