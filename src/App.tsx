import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { EmptyTaskList } from "./components/EmptyTaskList"
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList"

interface Task {
  id: number
  content: string
  isComplete: boolean
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [task, setTask] = useState('')

  function handleAddTask(event: FormEvent){
    if(task){
      event.preventDefault()

      const newTask = {
        id: Math.random(),
        content: task,
        isComplete: false
      }

      setTaskList([...taskList, newTask])
      localStorage.setItem('@tasksList', JSON.stringify(taskList))
      
      setTask('')
    }
  }

  function handleTaskInputChange(event: ChangeEvent<HTMLInputElement>){
    setTask(event.target.value)
  }

  function handleCompleteTask(taskId: number){
    const tasksWithCompletedTasks = taskList.map(task => 
      task.id === taskId ? {...task, isComplete: !task.isComplete} : task
    )

    setTaskList(tasksWithCompletedTasks)
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedTask = taskList.filter(task => {
      return task.content != taskToDelete
    })

    setTaskList(tasksWithoutDeletedTask)
  }

  useEffect(() => {
    const storageTasksList = JSON.parse(localStorage.getItem('@tasksList') as string)

    // if(storageTasksList){
    //   setTaskList(storageTasksList)
    // }
  }, [])
 
  return (
    <div className="w-full h-full">
      <Header />

      <div className="w-full max-w-[750px] flex flex-col items-center mx-auto justify-center">
        <form 
          onSubmit={handleAddTask}
          className="w-full flex mt-[-25px] px-4"
        >
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa"
            onChange={handleTaskInputChange}
            value={task}
            className="
              w-full px-4 py-3 bg-gray-500 rounded-md placeholder:text-gray-300
              border-[1px] border-gray-700 shadow-sm text-gray-300
            "
          />
          <button 
            type="submit"
            className="
              flex items-center justify-center ml-2 bg-blue-500 text-gray-100 font-bold 
              p-3 rounded-md transition-all hover:brightness-75
            "
          >
            Criar
            <PlusCircle size={20} className="ml-2" />
          </button>
        </form>

        <div className="w-full flex items-center justify-between mt-14 px-4">
          <p className="text-blue-300 font-bold">
            Tarefas criadas
            <span className="text-gray-200 bg-gray-400 ml-2 px-3 py-[0.20rem] rounded-full">
              {taskList.length}
            </span>
          </p>

          <p className="text-purple-300 font-bold">
            Concluídas
            <span className="text-gray-200 bg-gray-400 ml-2 px-3 py-[0.20rem] rounded-full">
              0
            </span>
          </p>
        </div>

        { taskList.length != 0 ? (
          <TaskList 
            taskList={taskList} 
            onDeleteTask={deleteTask} 
            onCompleteTask={handleCompleteTask}
          />
        ) : (
          <EmptyTaskList />
        ) }
      </div>
    </div>
  )
}

export default App
