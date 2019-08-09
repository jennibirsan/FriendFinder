// ===============================================================================
// CODE COPIED AND TWEAKED FROM HOT RESTAURANT CLASS ACTIVITY 15 IN WEEK 13

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    console.log("req.body")
    console.log(req.body)
    console.log(friendsData)
    var bestMatch = {};

    //comparative number for user's array total
    var userTotal = sum(req.body.scores);
    //confirms sum of user's array
    //console.log(userTotal);

    //set outside of loops to be mutable and resetable
    var friendTotal = 0;


    //runs if exact match is not found
    // if (bestMatch.name == 'none') {
    //highest possible amount score array can equal
    var closest = 50;
    //function to loop though array of friends and attempt to find friend sum closest to user sum
    //should only update bestMatch when a closer sum is found
    for (var i = 0; i < friendsData.length; i++) {
      friendTotal = sum(friendsData[i].scores);
      var difference = Math.abs(friendTotal - userTotal);
      if (difference <= closest) {
        closest = difference;
        bestMatch.name = friendsData[i].name;
        bestMatch.pic = friendsData[i].pic;
        console.log(bestMatch)
      };
    };

    //function to add the sum from the scores provided by the array obect
    function sum(array) {
      var total = 0;
      for (var n = 0; n < array.length; n++) {
        total += parseInt(array[n]);
      }
      return total;
    }

    //test answer
    console.log(bestMatch);
    //return bestMatch back to webpage
    res.json(bestMatch);
  })

};
