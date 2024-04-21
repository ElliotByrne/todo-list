export const getTodos = async () => {
    const todos = fetch("https://dummyjson.com/todos")
    // If promise is resolved it runs then()
    .then(res => res.json())
    // If promise is rejected is runs catch()
    .catch(err => err);
    

    
    return todos;
}