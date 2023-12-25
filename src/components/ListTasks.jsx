import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";


const ListTasks = ({tasks,setTasks}) => {
    const [todos,setTodos] = useState([]);
    const [dones,setDones] = useState([]);
    const [doings,setDoings] = useState([]);
    useEffect(()=>{
        const todos = tasks.filter(task => task.status === 'todo');
        const dones = tasks.filter(task => task.status === 'done');
        const doings = tasks.filter(task => task.status === 'doing');
        setTodos(todos);
        setDones(dones);
        setDoings(doings);
        
    },[tasks]);
    const statuses = ['todo','doing','done'];
   
    return (
        <div className='mt-2 
       flex gap-16 
         '>
             {statuses.map((status,index) => (
                <Section
                key={index}
                status={status}
                tasks={tasks}
                setTasks={setTasks}
                todos={todos}
                dones={dones}
                doings={doings}
                
                />))}
        </div>
    );
};

export default ListTasks;
const Section = ({
    status,todos,dones,doings,tasks,setTasks}) =>
    {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id,status),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
        
      }));
        const addItemToSection = (id,status) => {
           setTasks((prev)=>{
            const newTasks = prev.map(task => {
                if(task.id === id){
                    return {...task,status}
                }
                return task;
            });
            localStorage.setItem('tasks',JSON.stringify(newTasks));
            toast.success('Task moved successfully',{icon:'🚀'});
            return newTasks;
           });
            
        }

    let text = "todo";
    let bg = 'bg-gray-700';
    let tasksToMap=todos;
    if(status === 'todo'){
        text = 'To do';
        bg="green-400";
        tasksToMap = todos;
        
    }
    if(status === 'doing'){
        text = 'Doing';
        bg="yellow-400";
        tasksToMap = doings;
    }
    if(status === 'done'){
        text = 'Done';
        bg="blue-400";
        tasksToMap = dones;
    }
    return (<>
    <div
    ref={drop}

     className={`w-64 
     p-2 rounded-md
     ${isOver? "bg-slate-300":""}`}>
        <Header 
        bg={bg}
        count={tasksToMap.length}
     text={text}/>
     {tasksToMap.length>0 && tasksToMap.map(task=><Task 
        key={task.id}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
     />
           
     )} 

      </div>
       
     
     
    </>);
}
const Header=({text,bg,count})=>{
    return (
        <div className={`bg-${bg} 
        text-black
        text-center
        flex items-center
        h-10 pl-4 
        uppercase
        text-xl
        px-2 py-1
        rounded-md
        `}>
            {text} List
            <span className='text-sm text-black rounded-sm'> ({count})</span>
        </div>
    );
}
const Task = ({task,tasks,setTasks}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item :{id:task.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }));
      console.log(isDragging);
    const handleRemove = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        localStorage.setItem('tasks',JSON.stringify(newTasks));
        toast.success('Task removed successfully',{icon:'🗑️'});
    }
    return <div 
    ref={drag}
    className={`relative
    cursor-grab
    ${isDragging && 'opacity-100'}
     p-4 mt-8 shadow-md`}>
        <p>{task.task}</p>
        <button
        onClick={()=>handleRemove(task.id)}
         className="absolute 
        text-red-500
        bottom-1 right-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        </button>
    </div>
}


    