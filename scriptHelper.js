// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   switch (testInput) {
    case "":
        return 'Empty';
        break;
    case isNaN(Number(testInput)) === true:
        return 'Not a Number';
        break;
    case isNaN(Number(testInput)) === false:
        return 'Is a Number';
    default:
        return testInput;
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === pilot) {
        // pilotStatus = value
    } else {
        alert("Pilot Name Needed!");
    }
    if (validateInput(copilot) === copilot) {
        // copilotStatus = value
    } else {
        alert("Pilot Name Needed!");
    }
    if (validateInput(fuelLevel) === 'Is a Number') {
        if (Number(fuelLevel) < 10_000) {
            // faultyItems = visible
        }
    } else {
        alert("Valid Fuel Number Needed!");
    }
    if (validateInput(cargoLevel) === 'Is a Number') {
        if (Number(cargoLevel) > 10_000) {
            // faultyItems = visible
            // color = rgb(199, 37, 78)
        }
    } else {
        alert("Valid Cargo Number Needed!");
    }
    console.log(list)
   
}

async function myFetch() {
    let planetsReturned;
    try {
        planetsReturned = await fetch().then( function(response) {
            });
    
        return planetsReturned;
    } catch (e) {
        console.log("Line 73 (scriptHelper.js): Error happened");
    }
    
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
