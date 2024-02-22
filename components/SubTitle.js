import {View, Text, StyleSheet } from 'react-native'

export default function subtitulo() {
  return(
    <View>
     <Text style={styles.paragrafo2}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turquesa.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
 paragrafo2: {
    marginLeft: 10,
  }
})