interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className='bg-zinc-300 w-10 h-10 text-white rounded m-2 flex itens-center justify-center'>
            {props.completed}
        </div>
    )
}