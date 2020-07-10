import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const ContatoInput = (props) => {

    const [contato, setContato] = useState('');
    const [telefone, setTelefone] = useState('');
    
    return (
        <View style={estilos.contatoView}>
                <TextInput
                    placeholder='Nome Contato'
                    style={estilos.contatoTextInput}
                    onChangeText={(t) => setContato(t)}
                    value={contato}
                />
                <TextInput
                    placeholder='Telefone Contato'
                    style={estilos.contatoTextInput}
                    onChangeText={(t) => setTelefone(t)}
                    value={telefone}
                />
                <View 
                    style={estilos.botao}>
                    <Button
                        title="Adicionar contato"
                        onPress={() => props.onAdicionarContato
                            (contato, telefone)}
                    />
                </View>
                <View 
                    style={estilos.botao}>
                    <Button
                        title="Apagar tudo!"
                        onPress={() => { props.onApagarTudo() }} />
                </View>
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