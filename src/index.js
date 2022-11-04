import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './component/LoginComponent'
import RegisterComponent from './component/RegisterComponent';
import FormComponent from './component/FormComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FormikDemoComponent from './component/FormikDemoComponent';
import FormValidationComponent from './component/FormValidationComponent';
import YupValidationComponent from './component/YupValidationComponent';
import ValidationComponent from './component/ValidationComponent';
import LifeCycleComponent from './component/LifeCycleComponent';
import CycleDemoComponent from './component/CycleDemoComponent';
import NasaMarsRowerComponent from './component/NasaMarsRowerComponent';
import FetchAPIComponent from './component/FetchAPIComponent';
import AxiosDemoComponent from './component/AxiosDemoComponent';
import ConsumeAPIComponent from './component/ConsumeAPIComponent';
import AppHomeComponent from './component/AppHomeComponent';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import IndexComponent from './WebAPI/IndexComponent';
import AlertComponent from './component/AlertComponent';
import SecurityComponent from './component/SecurityComponent';
import Login from './component/CookieDemoComponent';
import ContextDemoComponent from './component/ContextDemoComponent';
import ReducerDemoComponent from './component/ReducerDemoComponent';
import SecurityDemo from './component/SecurityDemo';
// import IndexComponent from './WebAPI/IndexComponent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/Index';
import ReduxApp from './component/ReduxApp';


// Now we need to create a redux store & inside it we need to pass a reducer 
const store=createStore(
  reducer,
  // these extensions will tell us store created or not 
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <ReduxApp />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
