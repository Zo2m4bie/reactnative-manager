import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false };
    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }
    onButtonPress(){
        const {name, phone, shift} = this.props;
        console.log({name, phone, shift});
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
    onTextPress() {
        const {phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }
    onAccept(){
        this.props.employeeDelete({uid: this.props.employee.uid });
    }
    onDecline(){
        this.setState({showModal: false});
    }
    render (){
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>this.setState({showModal: !this.state.showModal})}>
                        Fire user
                    </Button>
                </CardSection>
                <Confirm visible={this.state.showModal} 
                    onDecline={this.onDecline.bind(this)}
                    onAccept={this.onAccept.bind(this)}>
                    Are you sure?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);