import { SafeAreaView, Text, StyleSheet } from 'react-native'

import Title  from './components/Title'
import SubTitle  from './components/SubTitle'
import  Button  from './components/Button'
import  Footer  from './components/Footer'

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.titulo}>Bem-vindo a Fernando de Noronha</Text>

      <Title />
      <Text style={styles.subtitulo}>Explore as Maravilhosas Praias</Text>
      <SubTitle />
      <Button />
      <Footer />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#006400',
    paddingBottom: 30,
    paddingLeft: 10,
    paddingTop: 20,
  },

 
  subtitulo: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ff8c00',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 20,
    margin: 0,
    marginTop: 30,
  }
})