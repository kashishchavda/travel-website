const trips = {
    rajasthan: {
      title: "Rajasthan Tour Package",
      duration: "7 Days / 6 Nights",
      price: "₹18,999",
      itinerary: `
        <ul>
          <li>Day 1: Rajkot to Udaipur</li>
          <li>Day 2: Udaipur Sightseeing</li>
          <li>Day 3: Jaipur City Tour</li>
          <li>Day 4: Ajmer & Pushkar</li>
          <li>Day 5: Jodhpur</li>
          <li>Day 6: Mount Abu</li>
          <li>Day 7: Return to Rajkot</li>
        </ul>`
    },
    goa: {
      title: "Goa Beach Package",
      duration: "5 Days / 4 Nights",
      price: "₹14,499",
      itinerary: `
        <ul>
          <li>Day 1: Rajkot to Goa (Train/Air)</li>
          <li>Day 2: North Goa Beaches</li>
          <li>Day 3: South Goa Churches & Markets</li>
          <li>Day 4: Water Sports & Leisure</li>
          <li>Day 5: Return to Rajkot</li>
        </ul>`
    },
    kerala: {
      title: "Kerala Backwaters Package",
      duration: "6 Days / 5 Nights",
      price: "₹21,999",
      itinerary: `
        <ul>
          <li>Day 1: Rajkot to Kochi</li>
          <li>Day 2: Munnar Sightseeing</li>
          <li>Day 3: Thekkady</li>
          <li>Day 4: Houseboat in Alleppey</li>
          <li>Day 5: Kovalam Beach</li>
          <li>Day 6: Return to Rajkot</li>
        </ul>`
    }
  };

  const params = new URLSearchParams(window.location.search);
  const trip = params.get("trip");
  const tripDetails = trips[trip];

  if (tripDetails) {
    document.getElementById("tripDetails").innerHTML = `
      <h1>${tripDetails.title}</h1>
      <h3>Duration: ${tripDetails.duration}</h3>
      <h3>Price: ${tripDetails.price}</h3>
      <h4>Itinerary:</h4>
      ${tripDetails.itinerary}
    `;
  } else {
    document.getElementById("tripDetails").innerHTML = `
      <h2>Sorry, this trip does not exist.</h2>`;
  }