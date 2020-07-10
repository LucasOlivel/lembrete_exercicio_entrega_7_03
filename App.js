import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';
import TelefoneItem from './components/TelefoneItem';

export default function App() {

  const [contatos, setContatos] = useState([]);
  const [telefones, setTelefone] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);
  const [contadorTelefones, setContadorTelefones] = useState(0);
  
  const adicionarContato = (contato, telefone) => {
    setContatos(contatos => {
      setContadorContatos(contadorContatos +1);
      return [{ key: contadorContatos.toString(), 
        value: contato}, ...contatos];
    })
    setTelefone(telefones => {
      setContadorTelefones(contadorTelefones +1);
      return [{ key: contadorTelefones.toString(), 
        value: telefone}, ...telefones];
    })
    console.log(contato);
    console.log(telefone);
  }

  const apagarContatos = () => {
    setContatos([]);
    setTelefone([]);
  }

  return (
    <View style={styles.telaPrinciaplView}>

      <ContatoInput 
        onAdicionarContato={adicionarContato}
        onApagarTudo={apagarContatos}
      />

      {/* aqui será exibidsa a  lista de contatos */}
      <View>
        <FlatList
          data={contatos, telefones}
          renderItem={
            contato => (
              <ContatoItem 
                contato={contato.item.value} 
              />
            ),
            telefone => (
              <TelefoneItem 
                telefone={telefone.item.value}
              />
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrinciaplView: {
    padding: 50
  },
  contatoView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  contatoTextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 2,
    alignItems: 'center',
    width: '100%'
  },
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    alignItems: 'center'
  },
  btnAdicionarContato: {
    marginTop: 8,
  }
});
