import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskList = () => {
    //task for default
    const defaultTask = new Task('Example', 'default description', false,LEVELS.NORMAL )
    
    return (
        <div>
            <div>
               <h1>Your task:</h1> 
            </div>
            {/** Aplicar for o map para */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};




export default TaskList;
