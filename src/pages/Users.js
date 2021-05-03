import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from '../actions/actions.users';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)

    React.useEffect(() => {
        dispatch(fetchUsersData())
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {console.log(users)}
            <Text>Users</Text>
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

export default Users;
