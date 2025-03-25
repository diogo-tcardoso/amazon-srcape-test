# Amazon Scraper with Bun

This project is a simple Amazon scraper built with **Bun**, **Express**, **Axios**, and **JSDOM**. It fetches product details from Amazon's search results and displays them in a web interface.

## Features
- Extracts **title, rating, number of reviews, and product image** from Amazon search results.
- **Backend:** Built with **Bun + Express** to handle API requests.
- **Frontend:** Uses **HTML, CSS, and Vanilla JavaScript** for user interaction.
- Simple and optimized structure for easy understanding and maintenance.

## Project Structure
```
amazon-scraper-bun/
│── src/
│   ├── scraper.js    # Web scraping logic
│── public/
│   ├── index.html    # Frontend UI
│   ├── styles.css    # CSS styling
│   ├── main.js       # Frontend logic
│── server.js         # Express server
│── README.md         # Documentation
│── bun.lockb         # Bun dependencies file
│── package.json      # Project configuration
```

## Technologies Used
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime
- **Express** - Backend framework
- **Axios** - HTTP requests for web scraping
- **JSDOM** - HTML parsing
- **Vanilla JavaScript** - Frontend logic

## Installation and Setup

### 1️⃣ Install Bun
If you don't have **Bun**, install it with:
```sh
curl -fsSL https://bun.sh/install | bash
```
Verify installation:
```sh
bun --version
```

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/amazon-scraper-bun.git
cd amazon-scraper-bun
```

### 3️⃣ Install Dependencies
```sh
bun install
```

## Running the Project

### Start the Server
```sh
bun server.js
```
The server will be available at:
```
http://localhost:3000/
```

### Test the API
You can test the API using a browser or Postman:
```
http://localhost:3000/api/scrape?keyword=laptop
```

### Access the Frontend
Open in your browser:
```
http://localhost:5500/
```
Enter a keyword and click the search button to fetch product data from Amazon.
```

## Considerations
- **Amazon may block excessive requests.** Use the tool responsibly.
- **HTML structure may change.** If scraping stops working, update the selectors in `scraper.js`.
- **No official Amazon API used.** This is a basic educational project.

## License
This project is licensed under the MIT License. Feel free to modify and use it as needed.

---
Made by [Diogo Cardoso](https://github.com/diogo-tcardoso) 🚀
