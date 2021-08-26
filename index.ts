import { bootstrap } from "pure-framework/core";
import { todoApp } from "./src/ToDoApp";
import { store } from "./src/store";

bootstrap(document.getElementById('app'), todoApp, store);