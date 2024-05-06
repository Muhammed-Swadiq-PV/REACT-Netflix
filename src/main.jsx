import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import RowPost from './components/RowPost/RowPost.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import {originals,action} from './urls.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <App />
    <RowPost url={originals} title='Netflix originals'/>
    <RowPost url={action} title='Action' isSmall/>
  </React.StrictMode>,
)
