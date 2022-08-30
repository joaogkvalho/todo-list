import { CheckCircle, Circle, Trash } from "phosphor-react"

interface Task {
    id: number
    content: string
    isComplete: boolean
}

interface TaskProps {
    task: Task
    onDeleteTask: (task: string) => void
    onCompleteTask: (taskId: number) => void
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps){
    function handleDeleteTask(){
        onDeleteTask(task.content)
    }

    function handleCompleteTask(){
        onCompleteTask(task.id)
    }

    return(
        <li className={`
            w-full flex items-center justify-between bg-gray-500 text-gray-200 mb-4 
            px-6 py-5 rounded-lg
        `}>
            <div 
                className="flex items-center cursor-pointer"
                onClick={handleCompleteTask}
            >
                {task.isComplete ? (
                    <CheckCircle size={20} color="#5E60CE" weight="fill" />                    
                ) : (
                    <Circle size={20} color="#1E6F9F" />
                )}                
                <p className={`ml-4 ${task.isComplete ? 'line-through' : 'no-underline'}`}>
                    {task.content}
                </p>                
            </div>
            <button onClick={handleDeleteTask}>
                <Trash 
                    size={20} 
                    className="transition-all hover:text-red-500"
                />
            </button>
        </li>
    )
}