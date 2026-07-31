'use client'
import { useState } from "react";
import toast from "react-hot-toast";



const TaskCard = ({ task }) => {

    const [completed , setCompleted] = useState(task.completed)

    const changeCompleted = async () => {
        setCompleted(!completed)
        toast.success(`Your task's compleating status is : ${completed}`)
    }

    // const data  = await fetchData;
    // console.log(fetchedData, ' data ')
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                
                <div className="card-body">
                    <h2 className="card-title">
                        {task.title}
                        <div onClick={changeCompleted}
                        className={`btn ${completed ? "btn-accent" : "btn-error"}`}>{`${completed ? "Completed" : "Not Completed"}`}</div>
                    </h2>
                    <p>{task.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-accent">{task.category}</div>
                        <div className="badge badge-outline">{task.difficulty}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;