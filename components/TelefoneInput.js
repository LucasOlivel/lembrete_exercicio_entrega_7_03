import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const ContatoInput = (props) => {

    const [telefone, setTelefone] = useState('');
    
    return (
        <View style={estilos.contatoView}>
            <TextInput
                placeholder='Telefone Contato'
                style={estilos.contatoTextInput}
                onChangeText={(t) => setTelefone(t)}
                value={telefone}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    contatoTextInput: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        marginBottom: 4, 
        padding: 2,
        alignItems: 'center',
        width: '80%'
    },
    contatoView: {
        marginBottom: 8,
        alignItems: 'center'
    },
    botao: {
        width: '80%',
        marginTop: 8
    }
});

export default ContatoInput;