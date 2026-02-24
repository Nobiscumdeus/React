import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as Sentry from '@sentry/react'



Sentry.init({
  dsn: "https://8c5c1acdbf9925db1bcc4ca1c9efef42@o4510903301111808.ingest.us.sentry.io/4510928737533952",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true, 
  tracesSampleRate:0.2, 
  environment:'production'
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<p> Something went wrong </p>}>
         <App />
    </Sentry.ErrorBoundary>

   
  </React.StrictMode>,
)

