import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';
import { Actions } from 'react-native-router-flux';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar >
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Please login' initial />
                </Scene>
                <Scene key='main'>
                    <Scene 
                        rightTitle='Add'
                        onRight={() => {Actions.employeeCreate()}}
                        key='employeeList' 
                        component={EmployeeList} 
                        title='Employees'  />
                    <Scene
                        key='employeeCreate' 
                        component={EmployeeCreate}
                        title='Create employee'
                    />
                    <Scene
                        key='employeeEdit'
                        component={EmployeeEdit}
                        title='Emplyee edit'/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;