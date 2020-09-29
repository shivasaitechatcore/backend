
const { Pool,Client} = require('pg')
const connectionString = 'postgresql://postgres:tekka@1820@localhost:5432/testDB';

const pool = new Pool({
  connectionString:connectionString
})

pool.connect()
pool.query("SELECT * FROM social",(err ,res)=>{
  console.log(err,res)
  pool.end()
})