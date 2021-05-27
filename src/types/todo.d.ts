interface Todo {
    content: string;
    state: string;
}

export interface TodoResponse {
    todos: Todo[];
}
