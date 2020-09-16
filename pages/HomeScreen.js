import React, {useEffect} from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import MyButton from '../components/MyButton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: "UserDatabase.db" });

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        db.transaction( function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_mater WHERE type='table' AND name='table_user'",
                [],
                function(tx, res){
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0){
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXIST table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(50), user_email VARCHAR(70), user_number INT(12))',
                            [],
                        );
                    }
                }
            )
        });
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <MyButton
                    title = "Criar"
                    onClick={() => navigation.navigate('Criar')}
                />
                <MyButton
                    title = "Deletar"
                    onClick={() => navigation.navigate('Deletar')}
                />
                <MyButton
                    title = "Atualizar"
                    onClick={() => navigation.navigate('Atualizar')}
                />
                <MyButton
                    title = "Vizualizar Todos"
                    onClick={() => navigation.navigate('VizualizarTodos')}
                />
                <MyButton
                    title = "Vizualizar"
                    onClick={() => navigation.navigate('Vizualizar')}
                />
            </View>
    </SafeAreaView>
    )
}

export default HomeScreen;