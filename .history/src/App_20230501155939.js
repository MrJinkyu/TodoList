import { useState } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";
import Greeting from "./components/Greeting";

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Greeting/>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
