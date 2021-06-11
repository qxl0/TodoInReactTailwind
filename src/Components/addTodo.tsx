import { ChangeEvent, FormEvent } from "react"
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg"

export type AddTodoProps = {
    task: string
    handleSubmitTodo: (e: FormEvent) => void
    handleChange: (e: ChangeEvent ) => void
}

export const AddTodo = ({ 
        task,
        handleSubmitTodo,
        handleChange,
    }: AddTodoProps) => (
    <form className = "flex justify-between w-full"  onSubmit={handleSubmitTodo}>
        <input  
            className="flex-l rounded shadow p-2 text-gray-dark mr-2"
            type="text" name="task" value={task} onChange={handleChange} />
        <button type="submit" aria-label="Add todo">
            <PlusIcon/>
        </button>
    </form>
)