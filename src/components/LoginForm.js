import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';
import { conntect } from 'react-redux';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeHolder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Input 
                        label='Password'
                        placeHolder='password'/>
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, { emailChanged })(LoginForm);