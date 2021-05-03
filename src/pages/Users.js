import React from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    ScrollView
   } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { List, Divider } from 'react-native-paper';
import { fetchUsersData } from '../actions/actions.users';

const Users = ({ navigation }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)

    React.useEffect(() => {
        dispatch(fetchUsersData())
    }, [])

    const renderRow = ({ item }) => (
        <List.Item
          style={{ padding: 4 }}
          title={item?.username}
          description={item?.name}
          left={(props) => (
            <List.Icon {...props} size={30} icon="account" color="#c4c4c4" />
          )}
          right={(props) => (
            <List.Icon {...props} size={25} icon="chevron-right" color="#c4c4c4" />
          )}
          onPress={() => {
              console.log(item)
            navigation.navigate('UserDetails', { item })}
          }
        />
      );
    

    return (
        <SafeAreaView style={styles.container}>
            {
                users?.loading
                ? <ActivityIndicator 
                    size={35}
                    color="#000000"
                    style={{ marginTop: 150, alignSelf: 'center' }}
                />
                : <FlatList
                    data={users?.data}
                    renderItem={renderRow}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={7}
                    initialNumToRender={7}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={10}
                    windowSize={10}
                    ItemSeparatorComponent={() => <Divider />}
                />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
});

export default Users;
