import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Routes } from './routes';
import Header from 'features/Header';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss'



function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.root}>
          <Header />
          <main className={styles.main}>
            <Routes />
          </main>
        </div >
      </Provider>
    </BrowserRouter>
  );
}

export default App;
