import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store/redux-store'; 
import {Provider} from "react-redux";


let funRender = () => {
    ReactDOM.render(

      <React.StrictMode>
        <BrowserRouter>
         <Provider store={store}>
         
                <App />
        
            </Provider>
            </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
funRender();

store.subscribe(()=> {
  funRender()
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
