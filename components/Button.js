import {View, Text, StyleSheet} from 'react-native'

export default function Button() {
  return (
    <View style={styles.container}>
       <Text  style={styles.button}>Resever sua Viagem</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    fontSize: 25,
    color: '#0000FF',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#B7d5e5',
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 20,
    margin: 50,
  }
})


