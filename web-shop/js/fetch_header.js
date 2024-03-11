async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} `);
    }
    let data = await response.text();
    document.getElementById("header").innerHTML = data;
  } catch (error) {
    console.log("Fetch error:" + error.message);
  }
}

fetchData("header.html");
