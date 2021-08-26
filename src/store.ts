import { Store } from "pure-framework/core";
import { ToDoState } from "./model";

export const store = new Store<ToDoState>({
  todoList: [
      'Kupi mleko',
      'Odvezi auto kod majstora',
      'Napiši master rad',
      'Odbrani master rad',
  ]
});
