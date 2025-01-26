const apiUrl =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-ftb-et-web-am/events";

const partyListElement = document.getElementById("party-list");
const formElement = document.getElementById("add-party-form");

// Fetch parties from API and render them
async function fetchParties() {
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-ftb-et-web-am/events"
    );
    const json = await response.json();
    console.log(json);
    renderParties(json.data);
  } catch (error) {
    console.error("Error fetching parties:", error);
  }
}

// Render the parties to the page
function renderParties(parties) {
  partyListElement.innerHTML = ""; // Clear current list

  parties.forEach((party) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${party.name}</strong><br>
      Date: ${party.date}<br>
      Time: ${party.time}<br>
      Location: ${party.location}<br>
      Description: ${party.description}
      <button class="delete-btn" data-id="${party.id}">Delete</button>
    `;
    partyListElement.appendChild(listItem);
  });

  // Attach event listeners to delete buttons
  // document.querySelectorAll(".delete-btn").forEach((button) => {
  //   button.addEventListener("click", deleteParty);
  // });
}

// // Delete a party
// async function deleteParty(event) {
//   const partyId = event.target.dataset.id;

//   try {
//     const response = await fetch(`/events/${partyId}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       fetchParties(); // Refresh the list after deletion
//     } else {
//       console.error("Failed to delete party");
//     }
//   } catch (error) {
//     console.error("Error deleting party:", error);
//   }
// }

// // Handle form submission to add a new party
// async function handleFormSubmit(event) {
//   event.preventDefault();

//   const newParty = {
//     name: document.getElementById("name").value,
//     date: document.getElementById("date").value,
//     time: document.getElementById("time").value,
//     location: document.getElementById("location").value,
//     description: document.getElementById("description").value,
//   };

//   try {
//     const response = await fetch("/events", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newParty),
//     });

//     if (response.ok) {
//       fetchParties(); // Refresh the list after adding a new party
//     } else {
//       console.error("Failed to add new party");
//     }
//   } catch (error) {
//     console.error("Error adding new party:", error);
//   }
// }

// // Attach form submit event listener
// formElement.addEventListener("submit", handleFormSubmit);

// // Initial fetch of parties
fetchParties();
