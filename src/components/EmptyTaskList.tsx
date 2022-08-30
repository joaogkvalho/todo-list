import { Notepad } from "phosphor-react";

export function EmptyTaskList(){
    return(
        <div className="
            border-t-[1px] mt-8 pt-14 px-4 border-gray-400 w-full rounded-lg
            flex flex-col items-center justify-center
        ">
            <Notepad size={60} weight={"thin"} color="#808080" />

            <p className="mt-4 text-gray-300 font-bold">
                Você ainda não tem tarefas cadastradas
            </p>
            <span className="text-gray-300">
                Crie tarefas e organize seus itens a fazer
            </span>
        </div>
    )
}