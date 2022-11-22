import React from 'react';
import MainStackNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/api/redux/store';




export default function App() {
  return (
    <Provider store={store}>
    <MainStackNavigator />
    </Provider>
  )
}