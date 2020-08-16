const express= require('express');

const app = express();
app.get('/',(req,res)=> {
    res.send('Welcome, to my app');

});

//restful


app.get('/event',(req,res) => {
    console.log(req);
    res.send('send all event');
});
app.post('/event',(req,res)=> {
    res.send('should create a new event');
});
app.delete('/event',(req,res)=>{
    res.send('delete all event');
});
app.get('/event/:id',(req,res)=>{
    res.send(`send a event with id ${req.params.id}`);
});

app.post('/event/:id', (req,res)=>{
    res.status(401).send('not allowed');
});
app.put('/event/:id',(req,res)=>{
    res.send(`update the event with id ${req.params.id}`);
});

app.delete('/event/:id',(req,res)=>{
    res.send(`delete a event with id ${req.params,id}`);
});



app.listen(3000,()=>{
    console.log('server is running at localhost:3000');
});


