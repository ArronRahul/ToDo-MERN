const express=require('express')
const cors= require('cors')
global.taskdata=[]

const app = express();
const port = 3001;
const corsoption={
    origin :"*"

}
app.use(cors(corsoption));

app.use(express.json());
const addtask=require('./route/task-route')
const cleardata=require('./route/clear-route')

app.use('/clear',cleardata)

app.use('/tasks',addtask)



app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
