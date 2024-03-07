import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactFlowProvider } from 'reactflow';
import App from './App.jsx'
import './index.css'
import FlowMain from './AppMain.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* React flow needs to be inside an element with a known height and width to work */}
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>
        <App />
        {/* <FlowMain /> */}
      </ReactFlowProvider>
    </div>
  </React.StrictMode>,
)
