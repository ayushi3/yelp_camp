var express                 = require('express'),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    Campground              = require("./models/campground"),
    seedDB                  = require("./seeds"),
    Comment                 = require("./models/comment"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    methodOverride          = require("method-override"),
    flash                   = require("connect-flash"),
    User                    = require("./models/user");
   
    
var commentRoutes           = require("./routes/comments"),
    campgoundRoutes           = require("./routes/campgrounds"),
    authRoutes           = require("./routes/index");


mongoose.connect("mongodb+srv://yelpcluster:yelpcluster@cluster0-sbcwh.mongodb.net/test?retryWrites=true");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seed the database // seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Gym gym gym",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(authRoutes);
app.use("/campgrounds",campgoundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server has started!!");
});