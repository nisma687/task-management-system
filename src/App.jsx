
import { useContext, useEffect, useState } from 'react';
import './App.css'
import CreateTasks from './components/CreateTasks';
import ListTasks from './components/ListTasks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './providers/AuthProvider';
function App() {
  
  const [tasks,setTasks] = useState([]);
  const {user}=useContext(AuthContext);
  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks){
      setTasks(tasks);
    }
  },[])
  return (  
    <DndProvider backend={HTML5Backend}>
      
      <Toaster/>
      
      <h1 className='text-4xl text-center mb-2 mt-2'>
        Hello,
        <br />
         Welcome to your Task Management list {user?.displayName?user.displayName:''}
         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?
          <img src={user?.photoURL} alt=""/>
          :<img alt="Default Picture" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />}
        </div>
      </div>
      </h1>
      {/* <h1 className='text-2xl text-center mt-2'>To do task</h1> */}
      <div className='flex
        flex-col p-8
        items-center
        bg-gray-100
        
        mt-4 
       '>
        <CreateTasks
         tasks={tasks} setTasks={setTasks}/>
          {console.log(tasks)} 
        <ListTasks
        
         tasks={tasks} setTasks={setTasks}/>

      
      </div>
      
      
    </DndProvider>
  )
}

export default App
