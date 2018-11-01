// Code taken expo's AppEntry.js, changing relative path for App.js

import { KeepAwake, registerRootComponent } from 'expo';
import App from './App';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);
