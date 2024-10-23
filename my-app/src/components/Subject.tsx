import {View, Text, StyleSheet} from 'react-native'

const Subject = ({subject}:{subject:string}) =>{
    return(
        <View >
            <Text style={styles.ShadowStyle}>I Love {subject}</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
  ShadowStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Subject