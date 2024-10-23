import {View, Text, StyleSheet} from 'react-native'

const InternalStyleSheet = () => {
    return (
        <View style={{backgroundColor: 'green',}}>
            <Text style={styles.textContent}>InternalStyleSheet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContent: {
        color: 'crimson',
        fontSize: 30,
        backgroundColor: 'yellow',
        margin: 20,
        padding: 20
    }
})

export default InternalStyleSheet;