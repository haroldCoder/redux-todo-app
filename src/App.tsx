import { useState } from 'react'
import './App.css'
import { todoActions } from './store/tasks-slice';
import Formtask from './components/Formtask';
import ViewTaks from './components/ViewTaks';

function App() {  
  return (
    <>
      <div>
        <h1>App todo</h1>
        <Formtask />
        <ViewTaks />
      </div>
    </>
  )
}

export default App
