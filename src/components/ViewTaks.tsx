import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import styles from "./view.module.css"
import { taskType, todoActions } from '../store/tasks-slice';

export default function ViewTaks() {
  const tasks: Array<taskType> = useSelector((state: any) => state.todo.tasks);
  const dispatch = useDispatch();
  const [deletes, setDeletes] = useState<Array<boolean>>(new Array(tasks.length).fill(false));

  console.log(tasks);
  
  const deleteTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, position: number) =>{
    setDeletes((prev)=>{
      const newarray = [...prev];

      newarray[position] = true
      return newarray;
    });
    setTimeout(()=>{
      dispatch(todoActions.deleteTask(position));
      setDeletes((prev)=>{
        const newarray = [...prev];

      newarray[position] = false
      return newarray;
      })
    }, 1200);
    e.stopPropagation();
  }

  return (
    <>
      {
        tasks.map((tks, index) => (
          <div key={index} onClick={()=>{dispatch(todoActions.modifyUpdate({status: true, id: index}))}} className={`${styles.container} ${deletes[index] && styles.container_delete}`}>
            <section style={{maxWidth: "150px"}}>
              <h2 style={{color: "white"}}>{tks.name}</h2>
              <p style={{"color": "white"}}>Limit time: <span style={{color: "#3A0AFF"}}>{
                new Date(tks.date.toString()).getUTCDate()+"/"+(new Date(tks.date.toString()).getUTCMonth()+1)+"/"+new Date(tks.date.toString()).getUTCFullYear()
              }</span></p>
            </section>
            <section className={styles.controller}>
              <button className={styles.button}>
                <IoIosCheckmarkCircle style={{color: "#7DFF30", fontSize: "30px"}} />
              </button>
              <button className={styles.button} onClick={(e)=>deleteTask(e, index)}>
                <IoIosRemoveCircle style={{color: "#DF5C44", fontSize: "30px"}} />
              </button>
            </section>
          </div>
        ))
        }
    </>
  )
}
