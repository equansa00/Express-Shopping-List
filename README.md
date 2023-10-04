# Express-Shopping-List
Express Shopping List
A simple API to manage a shopping list built using Express.js.

Features
CRUD operations for shopping list items.
Each item has a name and price.
Prerequisites
Ensure you have Node.js and npm installed.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/express-shopping-list.git
cd express-shopping-list
Install the dependencies:

bash
Copy code
npm install
Usage
Start the server:

bash
Copy code
node startServer.js
Access the API:

List all items: GET /items
Add a new item: POST /items
View a specific item: GET /items/:name
Update an item: PATCH /items/:name
Delete an item: DELETE /items/:name
Running Tests
To run the tests, execute:

bash
Copy code
npm test
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
