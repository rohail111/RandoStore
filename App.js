
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/components/Route'
import { ContextProvider } from './src/helpers/Context'

export default class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ContextProvider>
    );
  }
}