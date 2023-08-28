import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import './main.scss'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Layout from './Layout'
import NotFound from './NotFound'








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="app" element={<App />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>
            
          

    </BrowserRouter>
  </React.StrictMode>
);



