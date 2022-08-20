import React from 'react'
import ReactDOM from 'react-dom/client'
import Manu from './Manu';
import Text from './home';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Manu />
        <Text />
    </React.StrictMode>
)