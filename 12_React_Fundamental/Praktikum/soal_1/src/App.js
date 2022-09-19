import Pages from './pages/Pages';
import { mockUsers } from './mockData';

function App() {
  return (
    <Pages users={mockUsers}/>
  );
}

export default App;
