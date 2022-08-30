import { Task } from "./Task"

interface Task {
    id: number
    content: string
    isComplete: boolean
}

interface TaskListProps {
    taskList: Task[]
    onDeleteTask: (task: string) => void 
    onCompleteTask: (taskId: number) => void    
}

export function TaskList({ taskList, onDeleteTask, onCompleteTask }: TaskListProps){
    return(
        <div className="w-full mt-10 px-4">
            <ul>
            {taskList.map(task => {
                return(
                    <Task 
                        key={task.id}
                        task={task} 
                        onDeleteTask={onDeleteTask}
                        onCompleteTask={onCompleteTask}
                    />
                )
            })}
            </ul>
        </div>
    )
}