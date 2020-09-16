import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderHeightContext, HeaderStyleInterpolators} from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import CreateUser from './pages/CreateUser';
import DeleteUser from './pages/DeleteUser';
import UpdateUser from './pages/UpdateUser';
import ViewAllUser from './pages/ViewAllUser';
import ViewUser from './pages/ViewUser';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }
        }
        />
        <Stack.Screen
          name="Criar"
          component={CreateUser}
          options={{
            title: 'Criar Usuário',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }
        }
        />
        <Stack.Screen
          name="Deletar"
          component={DeleteUser}
          options={{
            title: 'Deletar Usuário',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }
        }
        />
        <Stack.Screen
          name="Atualizar"
          component={UpdateUser}
          options={{
            title: 'Atualizar Usuário',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }
        }
        />
        <Stack.Screen
          name="VizualizarTodos"
          component={ViewAllUser}
          options={{
            title: 'Listagem de Usuários',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }
        }
        />
        <Stack.Screen
          name="Vizualizar"
          component={ViewUser}
          options={{
            title: 'Vizualizar Usuário',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;