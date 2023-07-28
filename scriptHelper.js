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
    let check = [];
    if (validateInput(pilot.value) === pilot.value) {
        check.push(true);
        if (validateInput(copilot.value) === copilot.value) {
            check.push(true);
            // pilotStatus = value
            list.pilotStatus.textContent += `: ${pilot.value}`;
            list.copilotStatus.textContent += `: ${copilot.value}`;
            // copilotStatus = value
        } else {
            alert("Co Pilot Name Needed!");
            check.push(false);
        }
    } else {
        alert("Pilot Name Needed!");
        check.push(false);
    }
    
    if (validateInput(fuelLevel.value) === 'Is a Number') {
        if (Number(fuelLevel.value) >= 10_000) {
            check.push(true);
            // Correct values
            list.fuelStatus.textConent += `:\n${fuelLevel.value}L`;
        }
    } else {
        check.push(false);
        alert("Valid Fuel Number Needed!");
        // faultyItems = visible
        list.launchStatus.textContent = "Shuttle not ready for launch";
        list.launchStatus.style.color = "red";
    }
    if (validateInput(cargoLevel.value) === 'Is a Number') {
        if (Number(cargoLevel.value) < 10_000) {
            check.push(true);
            // Correct values
            list.cargoStatus.textContent += `:\n${cargoLevel.value}kg`;
        }
    } else {
        check.push(false);
        alert("Valid Cargo Number Needed!");
        // faultyItems = visible
        
    }
    check = new Set(check);
    console.log(check);
    if (check.has(false)) {
        list.launchStatus.textContent = "Shuttle not ready for launch";
        list.launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        document.querySelector("#faultyItems").style.visibility = "visible";
        list.launchStatus.textContent = "Shuttle is ready for launch";
        list.launchStatus.style.color  = "rgb(65, 159, 106)";
    }
}

async function myFetch() {
    let planetsReturned;
    try {
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) { return response.json()});
    
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
