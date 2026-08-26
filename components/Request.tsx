import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, Pressable, Alert } from 'react-native';

export default function RequestFunction(props: any) {
        
        const[data, setData] = useState([]);

        async function request() {
            // do the actual request and get a response
            var response = await fetch(props.url);

            // parse response into a json
            var json = await response.json();

            console.log(json);
            setData(json.instrumentos);
        }

        // how to fix the loop? hooks!
        useEffect(() => {
            request();
        }, []);

        return (
        <View>
            {
                data.length > 0 ?
                    <FlatList 
                        data={data}
                        renderItem={({item}) => {
                            return(
                                <View>
                                    <Pressable onPress={() => {Alert.alert(
                                        item['nombre'],
                                        `Familia: ${item['familia']}\nOrigen: ${item['origen']}\nPrecio: $${item['precioAproximado']}`
                                    )}}>
                                    <Text>{item['nombre']}</Text>
                                    </Pressable>
                                </View>
                            );
                        }}
                    />
                :
                    <ActivityIndicator size="large" />
            }
        </View>
        );
}