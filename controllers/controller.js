const pool = require("../db");

exports.initiateTransaction = (req,res) => {
    const trans_id = req.body.trans_id;
    const customer_id = req.body.customer_id;
    const status = req.body.status;
    const amount = req.body.amount;
    pool.query("INSERT INTO Transactions (trans_id, customer_id, status, amount) VALUES ($1, $2, $3, $4);",[trans_id, customer_id, status, amount], (error, results)=>{
          if(error) throw error;
    });
}