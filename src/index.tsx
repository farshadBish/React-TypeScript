import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './components/contexts/TodoContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<TodoProvider>
  <App />
</TodoProvider>
);
