import React from 'react'
import ReactDOM from 'react-dom/client'

// @Import styles css
import '@/assets/styles/normalize.css'
import '@/assets/styles/main.css'

import { App } from '@/App'

ReactDOM.createRoot(document.getElementById('__app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
