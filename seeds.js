var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Granite Shine", 
        image:"https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6f210acc36ab5742aa863e7a2240a2a&auto=format&fit=crop&w=1049&q=80",
        description:"this is granite shine. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name:"Hut Surprise", 
        image:"https://images.unsplash.com/photo-1520732713659-8f14034ba7d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a330e0a93ad58039a3d719ee837c6a4&auto=format&fit=crop&w=1050&q=80",
        description:"this is hill surprise. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name:"Hill Mareen", 
        image:"https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c8e032b27c71d96a59bb540347343ea&auto=format&fit=crop&w=750&q=80",
        description:"this is hill mareen. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ];
    
    
function seedDB(){
    
    
    // Remove all campgrounds
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds");
    
    
    //add a few campgrounds

    data.forEach(function(seed){
    
    Campground.create(seed, function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log("added a campgrounds");
             
            //create a comment
            Comment.create(
                {
                    text: "nice place.",
                    author: "shubham"
                }, function(err, comment)
                {
                    if(err){
                        console.log(err);
                    }
                    else{
                        data.comments.push(comment);
                        data.save();
                        console.log("created new comment");
                    }
                    
                });
        }
    });
    
});
});



//add a few omments

}

module.exports = seedDB;