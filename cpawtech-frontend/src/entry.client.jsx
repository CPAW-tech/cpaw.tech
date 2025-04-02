import React from 'react'
import ReactDOM from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import './root.css'

ReactDOM.hydrateRoot(
    // eslint-disable-next-line no-undef
    document,
    <React.StrictMode>
        <HydratedRouter />
    </React.StrictMode>
)
