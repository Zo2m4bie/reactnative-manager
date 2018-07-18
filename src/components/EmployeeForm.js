import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label='Name' 
                        placeHolder='Jane'
                        value={ this.props.name } 
                        onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}/>
                </CardSection>
                <CardSection>
                    <Input 
                        label='Phone' 
                        placeHolder='555-555-555'
                        value={ this.props.phone } 
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value: value})}/>
                </CardSection>
                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.picketTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => {
                            console.log("day = " + day);
                            this.props.employeeUpdate({ prop: 'shift', value: day });
                        }}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saterday" value="Saterday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}
const styles = {
    picketTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);