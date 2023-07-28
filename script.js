// Write your JavaScript code here!
try {
    const { myFetch, formSubmission, pickPlanet, addDestinationInfo } = require("./scriptHelper");
} catch (err) {
    console.log("Line 5 (script.js): Error happened");
}


window.addEventListener("load", function() {
    // DOM Input Elements
    const form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    // DOM List Elements
    const list = {
        pilotStatus: document.querySelector("#pilotStatus"),
        copilotStatus: document.querySelector("#copilotStatus"),
        fuelStatus: document.querySelector("#fuelStatus"),
        cargoStatus: document.querySelector("#cargoStatus"),
        launchStatus: document.querySelector("#launchStatus")
    };
    const missionTarget = document.querySelector("#missionTarget");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    })
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    //    console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = listedPlanets[pickPlanet(listedPlanets)];
       console.log(planet);
       const { name, diameter, star, distance, moons, image } = planet;
       addDestinationInfo(missionTarget, name, diameter, star, distance, moons, image);
   })
   
});