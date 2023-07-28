// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.innerHTML = 
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
   if (testInput === "") {
    return 'Empty'
   };
   if (isNaN(testInput)) {
    return 'Not a Number'
   } else {
    return 'Is a Number'
   };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let check = [];
    
    if (validateInput(pilot.value) === 'Not a Number') {
    } else if (validateInput(pilot.value) === 'Empty') {
        check.push(null);
    } else {
        check.push(false);
    };

    if (validateInput(copilot.value) === 'Not a Number') {
        // pilotStatus = value
        list.pilotStatus.textContent = `Pilot: ${pilot.value} is ready for launch`;
        list.copilotStatus.textContent = `Co-pilot: ${copilot.value} is ready for launch`;
        // copilotStatus = value
    } else if (validateInput(copilot.value) === 'Empty') {
        check.push(null);
    } else {
        check.push(false);
    };

    if (validateInput(fuelLevel.value) === 'Is a Number') {
        if (Number(fuelLevel.value) >= 10_000) {
            // Do nothing
            list.fuelStatus.textContent = "Fuel level high enough for launch";
        } else {
            check.push(true);
            list.fuelStatus.textContent = 'Fuel level is too low for launch';
        }
    } else if (validateInput(fuelLevel.value) === 'Empty') {
        check.push(null);
    } else {
        check.push(false);
    }
    if (validateInput(cargoLevel.value) === 'Is a Number') {
        if (Number(cargoLevel.value) < 10_000) {
            list.cargoStatus.textContent = "Cargo mass low enough for launch";
        } else {
            check.push(true);
            list.cargoStatus.textContent = 
            'Cargo mass is too large for launch';
        }
    } else if (validateInput(cargoLevel.value) === 'Empty') {
        check.push(null)
    } else {
        check.push(false);
    }
    // Flatten array using Set for unique values
    check = new Set(check);

    // Checking faulty values for FaultyItems div: Null = Empty, False = Incorrect Parameter, True = Correct Parameter / Failing Condition, Empty = Correct Parameters //
    if (check.has(null)) {
        alert("All fields required")
    } else if (check.has(false)) {
        alert("Make sure to enter valid information for each field!");
    } else if (check.has(true)) {
        document.querySelector("#faultyItems").style.visibility = "visible";
        list.launchStatus.textContent = "Shuttle not ready for launch";
        list.launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        document.querySelector("#faultyItems").style.visibility = "visible";
        list.launchStatus.textContent = "Shuttle is ready for launch";
        list.launchStatus.style.color  = "rgb(65, 159, 106)";
    }
    check.clear();
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
    return Math.floor(Math.random()*(planets.length - 1))
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
