import './App.css';
import {Entry} from './page/entry/Entry'
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard';
import { NewTicket } from './page/new-ticket/NewTicket';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <NewTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
