
import toast from "react-hot-toast";

import { v4 as uuidv4 } from 'uuid';

const CreateTasks = ({tasks,setTasks}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id:uuidv4(),
            task:e.target.task.value,
            status:"todo"
        }
        if(task.task === '' || task.task === null || task.task === undefined || task.task.length<3){
            return toast.error('Task must be at least 3 characters long');
        }
        if(tasks.find(t => t.task === task.task)){
            return toast.error('Task already exists');
        }
        if(task.task.length>100){
            return toast.error('Task must be less than 100 characters long');
        }
        setTasks([...tasks,task]);
        localStorage.setItem('tasks',JSON.stringify([...tasks,task]));
        e.target.task.value = '';
        toast.success('Task added successfully');
    }
    
    return (
        <div>
            <form
            onSubmit={handleSubmit}
             className="text-xl">
                <label className="block " htmlFor="task"> Create Task</label>
                <input 
               
                className="border-2 
                rounded-md
                border-gray-400"
                 type="text" name="task" id="task"/>
                <button className="bg-blue-400 text-white ml-3 px-2 py-1">Add</button>
            </form>
        </div>
    );
};

export default CreateTasks;