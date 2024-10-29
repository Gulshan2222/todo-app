
export default function Header(props) {
    const {todos} = props
    const todosLength = todos.length

    const isTasksPlural = todos.length != 1

    const tasksOrTasks = isTasksPlural ? 'tasks' : 'task'

  return (
    <h1 className="text-gradient">You have {todosLength} open {tasksOrTasks}...</h1>
  )
}