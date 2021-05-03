import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const UserDetails =() => {
    return (
        <SafeAreaView style={styles.container}>
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
