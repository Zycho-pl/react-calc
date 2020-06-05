import React from 'react';
import {default as bemCssModules} from 'bem-css-modules';
import {Display} from "./components/Display/Display";
import {MemoryContainer} from "./containers/MemoryContainer/MemoryContainer";
import {Keyboard} from "./containers/Keyboard/Keyboard";
import {default as AppStyles} from './App.module.scss';
import {Provider} from 'mobx-react'
import {getRootStores} from "./stores/getRootStores";

const style = bemCssModules(AppStyles);

bemCssModules.setSettings({
    modifierDelimiter: '--'
})

function App() {
  return (
      <Provider {...getRootStores()}>
        <div className={style()}>
          <Display />
          <MemoryContainer/>
          <Keyboard/>
        </div>
    </Provider>
  );
}

export default App;
