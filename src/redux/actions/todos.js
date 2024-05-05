export const addTodo = (content)=>({
type:"ADD_TODO",
payload:{
    id:Date.now(),
    content
}
})