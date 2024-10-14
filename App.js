import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';  
import { Provider, useSelector} from 'react-redux'; 
import { store } from './store';
import HomeScreen from './Screens/HomeScreen';


export default function App() { 

  return (
    <Provider store={store}>
      <SafeAreaView>
       <HomeScreen/>
    </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
   
});
