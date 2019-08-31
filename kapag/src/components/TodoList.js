import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { ActionButton } from 'react-native-action-button'

export default function TodoList(props) {
    return (
        <View style={styles.listContainer}>

            <View>
                {props.checked && <View style={styles.verticalLine} />}
                <Text style={styles.listItem}>{props.text}  -   R$ {props.price}    -   {props.qtd}</Text>

            </View>
            <Icon
                name="trash-2"
                size={30}
                color="#25316D"
                style={{ marginLeft: 'auto' }}
                onPress={props.deleteTodo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: '5%',
        flexDirection: 'row',
        borderColor: '#aaaaaa',
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40
    },
    listItem: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 6,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#25316D'
    },
    verticalLine: {
        borderBottomColor: 'green',
        borderBottomWidth: 4,
        marginLeft: 10,
        width: '100%',
        position: 'absolute',
        marginTop: 15,
        fontWeight: 'bold'
    }
})