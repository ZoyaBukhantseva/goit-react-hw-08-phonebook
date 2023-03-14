import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { store, persistor } from '..//src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';


import { BrowserRouter } from "react-router-dom";
import AuthLayout from './components/Authlayout/Authlayout.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={ store }>
      <PersistGate loading = { null} persistor = { persistor }>  
        <AuthLayout>
           <BrowserRouter basename='/goit-react-hw-08-phonebook'>
              <App />
           </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);