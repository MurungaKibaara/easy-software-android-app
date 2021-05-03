import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsersData } from '../actions/actions.users';

const UserDetails =({ navigation, route }) => {
    const item = route.params;
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const [state, setState] = React.useState({});

    const update = () => {

    }
    
    return (
        <SafeAreaView style={styles.container}>
            {console.log({ item })}
            <Text>User Details</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default UserDetails;
