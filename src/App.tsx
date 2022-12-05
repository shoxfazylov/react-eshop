import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Main} from './components/Pages/Main'
import './assets/css/main.css'
import {Provider} from "react-redux";
import {store} from "./store";
import {Section} from "./components/Pages/Catalog/Section";
import {Catalog} from "./components/Pages/Catalog/Catalog";
import {Detail} from "./components/Pages/Catalog/Detail";

function App() {
  return (
      <>
          <Provider store={store}>
                <Routes>
                  <Route path="/" element={ <Main /> } />
                  <Route path="/catalog/" element={<Catalog/>} />
                    <Route path="/catalog/:category/" element={<Section/>} />
                    <Route path="/catalog/:category/:id/" element={<Detail/>} />
                </Routes>
          </Provider>
      </>
  )
}

export default App
