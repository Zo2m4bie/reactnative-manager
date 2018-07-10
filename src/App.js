import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyAUqvrRptfuuF4FyGneVLlgB8zyEZTPFl4",
            authDomain: "manager-7f190.firebaseapp.com",
            databaseURL: "https://manager-7f190.firebaseio.com",
            projectId: "manager-7f190",
            storageBucket: "manager-7f190.appspot.com",
            messagingSenderId: "702686794501"
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;