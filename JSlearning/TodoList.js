let todoList = [];
// let todoListIndex = 0;

while (true) {
    const input = prompt("What would you like to do?");
    if (input.toLowerCase() === "quit") {
        console.log("OK, YOU QUIT THE APP")
        break;
    } else if (input.toLowerCase() === "new") {
        const addTodoList = prompt("Enter new Todo");
        console.log(`${addTodoList} added to list`);
        todoList.push(addTodoList);
        // todoListIndex++;
    } else if (input.toLowerCase() === "list") {
        console.log("**********");
        // console.log(todoList);
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
        console.log("**********");
    } else if (input.toLowerCase() === "delete") {
        const deleteTodoList = prompt("Enter Index of Todo to delete");
        todoList.splice(deleteTodoList, 1);
        console.log("Todo Removed");
    }
}
