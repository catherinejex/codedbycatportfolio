import {Button, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {functions, init} from "./firebase";

export default function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        init().then(() =>
            setLoading(false)
        )
    })
    return (
        <View style={styles.container}>
                <Text>{"TODO: Add a Button that triggers a cloud function and shows the temperature in London"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
