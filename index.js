const { Client } = require('pg');
const express = require('express')
const cors = require('cors')
// Connection string for PostgreSQL
const connectionString = 'hehe';

const client = new Client({
  connectionString: connectionString
});
client.connect() // Connect once when the app starts
    .then(() => console.log('✅ Connected to PostgreSQL!'))
    .catch(err => console.error('❌ Connection Error:', err));
const app = express()
app.use(express.json())

app.get('/addtodo',async(req, res)=>{
   
    console.log('Connected to PostgreSQL database!');
    
    // Query to get all data from the todos table
    const ans= await client.query('SELECT * FROM todos');
    return res.json(ans.rows)

})
app.get('/id', async (req, res)=>{
    
    const id =  req.query.id
    const ans = await client.query(`SELECT * FROM todos WHERE id=${id}`);
    return res.json(ans.rows);
})
app.post('/newdata',async(req, res)=>{
    try{
    const title = req.body.title;
    const description= req.body.description;
    console.log(title,description)
    const ans = await client.query(`INSERT INTO todos (title , description) VALUES($1,$2)`,[title,description])
    return res.send(ans);
    }
    catch(err){
        console.error('some issues there', err)
    }
})
app.get('/del/:id',async(req,res)=>{
    try{
        const key = req.params.id
        console.log(key)
        const ans = await client.query(`DELETE FROM todos WHERE id=${key}`)
        if(!ans.rowCount){
            return res.status(404).json({message:"not found"})
        }
        return res.json(ans);
    }
    catch(err){
        console.error(err);
    }
})

app.listen(3000,()=>{
    console.log('success')
})