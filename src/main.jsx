import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {StateProvider} from "./hooks/StateProvider";
import reducer,{initialState} from './component/reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer= {reducer}>
      <App />
    </StateProvider>
    
  </React.StrictMode>,
)
