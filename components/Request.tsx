import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, Pressable } from 'react-native';

export default function RequestFunction(props: any) {
    
    const[data, setData] = useState([]);

    async function request() {
        // do the actual request and get a response
        var response = await fetch(props.url);

        // parse response into a json
        var json = await response.json();

        console.log(json);
        setData(json);
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
                                <Text>{item['marca']}</Text>
                                <Text>{item['modelo']}</Text>
                                <Text>{item['anio']}</Text>
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