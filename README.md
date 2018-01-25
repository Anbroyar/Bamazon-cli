# Bamazon-cli
Bamazon is an command line app - online store.
You need node.js installed + all required modules, and a local MySQL database.

#node bamazonCustomer.js 

When you run the app first of all you will see the list of products, their department, prices and quantity.
Bamazon-cli/screenshots/start.png
The user iwill be asked to select an ID of an item to purchase, then the amount of item selected. 
The app checks the stock quantity: if there are not enough items in stock it returns the failure message and asks the user to try again.
If everything is ok, user gets a total cost of the order and will be asked to confirm the order.
Then user will be asked to continue shopping or not.
Bamazon-cli/screenshots/purchase.png
