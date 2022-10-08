import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  React from 'react';
import SetupRouters from './routes/SetupRouters';
import { store, persistor } from "./store/store"

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <SetupRouters/>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
