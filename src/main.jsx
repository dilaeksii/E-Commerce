import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from "./app/store.js"
import App from './App.jsx'
import { Provider } from 'react-redux'
import axios from "axios"  


const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </StrictMode>,
)
