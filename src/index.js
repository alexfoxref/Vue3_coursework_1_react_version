import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from './redux/store'
import App from './components/App'
import './index.css'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
