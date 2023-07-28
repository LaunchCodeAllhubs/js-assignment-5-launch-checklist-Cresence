// Write your JavaScript code here!
try {
    const { myFetch, formSubmission } = require("./scriptHelper");
} catch (err) {
    console.log("Line 5 (script.js): Error happened");
}


window.addEventListener("load", function() {
    const form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("clicked");
    })
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});