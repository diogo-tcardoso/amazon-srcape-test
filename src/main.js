// Sends a request to the backend and displays the results.

async function searchAmazon() {
    const keyword = document.getElementById("keyword").value;
    if (!keyword) {
        alert("Please enter a keyword");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
        const data = await response.json();

        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = data.map(item => `
            <div class="product">
                <h3>${item.title}</h3>
                <h6>Rating: ${item.rating}</h6>
                <p>Reviews: ${item.reviews}</p>
                <img src="${item.image}" width="100">
            </div>
        `).join('');
    } catch (error) {
        alert("Error fetching data");
    }
}