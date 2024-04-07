import React, { useState } from 'react'
import styles from './form.module.css'
import { useDispatch } from 'react-redux'
import { todoActions } from '../store/tasks-slice';

export default function Formtask() {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>("");

    const Add_task = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) =>{
        e?.preventDefault();
        dispatch(todoActions.addTask(name));
        setName("")
    }

  return (
    <form action="" className={styles.form} style={{display: "flex", gap: "18px"}}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className={styles.input} name='name' placeholder='koderx...' />
        <button onClick={Add_task} type='submit' className={styles.btn}>Add task</button>
    </form>
  )
}
