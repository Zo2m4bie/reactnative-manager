import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    
    createDataSource({employees}){
        console.log("createdatasource");
        console.log(employees);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }
    render() {
        console.log(this.props);
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}
const mapStateToProps = state => {
    console.log('mapstatetoprops ' + state);
    console.log(state);
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);