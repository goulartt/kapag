import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import ActionButton from 'react-native-action-button';

import TodoList from './TodoList';

export default function App() {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState([]);

	addTodo = () => {
		if (value.length > 0) {
			setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
			setValue('');
		}
	};

	checkTodo = id => {
		setTodos(
			todos.map(todo => {
				if (todo.key === id) todo.checked = !todo.checked;
				return todo;
			})
		);
	};

	deleteTodo = id => {
		setTodos(
			todos.filter(todo => {
				if (todo.key !== id) return true;
			})
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Shop List</Text>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					multiline={true}
					placeholder="What do you want to do today?"
					placeholderTextColor="#abbabb"
					value={value}
					onChangeText={value => setValue(value)}
				/>
				<TouchableOpacity onPress={() => addTodo()}>
					<Icon name="plus" size={30} color="blue" style={{ marginLeft: 15 }} />
				</TouchableOpacity>
			</View>
			<ScrollView style={{ width: '100%' }}>
				{todos.map(item => (
					<TodoList
						text={item.text}
						key={item.key}
						checked={item.checked}
						setChecked={() => checkTodo(item.key)}
						deleteTodo={() => deleteTodo(item.key)}
					/>
				))}
			</ScrollView>

			<ActionButton buttonColor="rgba(231,76,60,1)">
				<ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
					<Icon name="md-create" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
					<Icon name="md-notifications-off" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
					<Icon name="md-done-all" style={styles.actionButtonIcon} />
				</ActionButton.Item>
			</ActionButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	header: {
		marginTop: '15%',
		fontSize: 20,
		color: 'red',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'black',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		paddingLeft: 10,
		minHeight: '3%'
	}
});