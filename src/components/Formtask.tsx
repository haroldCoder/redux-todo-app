import React, { useEffect, useState } from 'react'
import styles from './form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { taskType, todoActions, update } from '../store/tasks-slice';

export default function Formtask() {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const updates : update = useSelector((state: any)=>state.todo.update);
    const taks: Array<taskType> = useSelector((state: any)=>state.todo.tasks);

    useEffect(()=>{
      if(updates.status){
        setName(taks[updates.id].name);
        setDate(new Date(taks[updates.id].date).getUTCFullYear()+"-0"+(new Date(taks[updates.id].date).getUTCMonth()+1)+"-0"+new Date(taks[updates.id].date).getUTCDate());
      }
    }, [updates]);

    const Add_task = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) =>{
        e?.preventDefault();
        if(!updates.status){
          dispatch(todoActions.addTask({name, status: false, date: new Date(date)}));
        }
        else{
          dispatch(todoActions.updateTask({newtask: {name, status: false, date: new Date(date)}, id: updates.id}));
          console.log(3);
          
        }
        
        setName("")
        setDate("")
    }

  return (
    <form action="" className={styles.form} style={{display: "flex", gap: "18px"}}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className={styles.input} name='name' placeholder='koderx...' />
        <label htmlFor="date">Date limit</label>
        <input type="date" onChange={(e)=>setDate(e.target.value)} value={date} className={styles.input} name='date'/>
        <button onClick={Add_task} type='submit' className={styles.btn}>{updates.status ? 'Update task' : 'Add task'}</button>
    </form>
  )
}
