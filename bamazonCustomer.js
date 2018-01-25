var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	  host: "localhost",
	  port: 3306,

	  // Your username
	  user: "root",

	  // Your password
	  password: "",
	  database: "bamazon"
	});

connection.connect(function(err) {
  if (err) throw err;
  start();
  console.log("------------->Welcome to BAMAZON !!!<--------------");


});

function start() {

	console.log("Our Products: ");

	connection.query("SELECT item_id AS ID, product_name AS PRODUCT, department_name AS DEPARTMENT, price as PRICE, stock_quantity AS QUANTITY " + 
		"FROM products ORDER BY ID", function(err, res) {
		if (err) throw err;
		console.log(res);
		custmPrompt();
	});
}

function custmPrompt() {

	inquirer.prompt([
	{ 
		name: "id",
		type: "input",
		message: "Enter the ID of the product you would like to buy: ",
		validate: function(value){
					var tst = /^\d*$/.test(value);
					if (tst) {
						return true;
					}
					return "Please enter ID of the product you would like to buy: ";
		}
	},

	{ 
		name: "quantity",
		type: "input",
		message: "Enter the amount you want to buy: ",
		validate: function(value){
					var tst = /^\d*$/.test(value);
					if (tst) {
						return true;
					}
					return "Please enter a numeric value of the quantity you want to buy.";
				
		}
	}

	]).then(function(ans) {
 
		var productId = ans.id; 
		var productQuantity = ans.quantity;

		var query = connection.query("SELECT * FROM products WHERE ?",
			[
				{ item_id: productId }
			],
			function(err, res) {
				if (err) throw err;

				var data = res[0];
				if (productQuantity > data.stock_quantity) {

					console.log("\nInsufficient quantity!" + "There are only " + data.stock_quantity + " in stock." +
						"\nPlease make another selection.\n");
					custmPrompt();

					} else {

					console.log("\nWe placed your order!" + "\nThe total cost of your purchase is $" + productQuantity * parseInt(data.price));

					inquirer.prompt([
					{ 
						type: "confirm",
						name: "confirm",
						message: "Is your order completed? "
					}

					]).then(function(ans) {

						if (ans.confirm) {

							var newQuantity = parseInt(data.stock_quantity - productQuantity);
							var query = connection.query("UPDATE products SET ? WHERE ?",
								[
									{ stock_quantity: newQuantity},
									{ item_id: productId }
								],
								function(err, res) {
									if (err) throw err;

									console.log("\nYour order has been placed.");
									inquirer.prompt({
							            name: 'continue',
							            type: 'confirm',
							            message: 'Continue shopping?'
						            }).then(function(ans) {
							            if (ans.continue) {
								            start();
							            } else {
								            console.log('Thank you for shopping bamazon. Bye.')
								            connection.end();
							            }
						          });

								}

							);

						} else {

							console.log("\nPurchase has been cancelled.");
							inquirer.prompt({
							            name: 'continue',
							            type: 'confirm',
							            message: 'Continue shopping?'
						            }).then(function(ans) {
							            if (ans.continue) {
								            start();
							            } else {
								            console.log('Thank you for shopping bamazon. Bye.')
								            connection.end();
							            }
						          });
						}

					});

				}

			}

		);			

	});

}