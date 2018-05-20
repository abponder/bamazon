// set up npms
var inquirer = require("inquirer")
var mysql = require("mysql")

//set up connection to mySql db. don't forget curly brackets!argh
var connection = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"Blue*redx11963",
    database:"bamazon_db"
})
connection.connect(function(err){
    if(err) throw err

})

connection.query("SELECT * FROM products;", function(err, results){
    console.log(results);
    inquirer.prompt([
        {
        name: "Q1",
        type: "input",
        message: "What is the Id of the product you want to purchase?"
        }, 
        {
        name: "Q2",
        type: "input",
        message: "How many would you like to purchase?"
        } 
    ]).then (function(answers){
        //console.log(answers.Q1);
        //console.log(answers.Q2);
        for (var i=0; i< results.length; i++) {
            if(answers.Q1==results[i].item_id) {
                if(results[i].stock_quantity>=answers.Q2) {
                    var totalCost = answers.Q2 * results[i].price
                    var newQuantity = results[i].stock_quantity - answers.Q2
                    var name = results[i].product_name
                    connection.query("UPDATE products SET ? WHERE ? ", [{stock_quantity: newQuantity},{item_id:answers.Q1}], function(err, results){
                        if(err) throw err
                        console.log("Congrats, you just purchased " + answers.Q2 + " of " + name)
                        console.log("Total cost: $" + totalCost);
                        console.log("total remaining in stock: " + newQuantity);
                        connection.end()
                    }) 
                }else {
                    console.log("Sorry .. not enough in stock");
                }

            }
        }

    })
})



