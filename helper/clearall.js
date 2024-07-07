

const clearall=(req,res)=>{
    taskdata = taskdata.filter(task => !task.complete);
    res.status(200).json({ message: "All Completed Tasks Deleted" });
    console.log(taskdata);
}

module.exports={
    clearall
}