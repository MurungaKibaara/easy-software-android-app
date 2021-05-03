import React from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { Divider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData, updateUsersData } from '../actions/actions.users';

const UserDetails =({ navigation, route }) => {
    const { item } = route.params;
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const [state, setState] = React.useState({});

    React.useEffect(() => {
        setState({...item})
    },[])

    React.useEffect(() => {
        const { data } = users;

        if (data != null || data != undefined) {
            return
        }
        
        users?.data?.filter((user) => { user?.id == item?.id ? setState({...user}) : null })
    }, [users])

    const handleChange = (name) => (value) => {
        setState({ ...state, [name]: value });
    }
    
    const updateUserData = () => {
        dispatch(updateUsersData(state, state?.id))
        dispatch(fetchUsersData())
    }

    const fields = [
        { name: 'name' },
        { name:'email' },
        { name: 'phoneNumber'}
    ]
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topDrawerSection}>
                    {state?.name ? (
                    <UserAvatar
                        size={80}
                        style={{ marginBottom: 5 }}
                        borderRadius={50}
                        name={state?.name ? state?.name : item?.name}
                        bgColor="#000"
                    />
                    ) : null}
                    <View style={{ marginTop: 7 }}>
                    <View style={{ flexDirection: 'row', padding: 3, alignItems: 'center' }}>
                        <Text style={styles.inputLabel}>User</Text>
                        <Text
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            style={{ textAlign: 'center', margin: 3 }}
                        >
                        {state?.username}
                        </Text>
                    </View>
                    </View>
                </View>
              <Divider />

              {fields?.map((field) => (
                  <View key={field.name}>
                    <TextInput
                        style={styles.textInput}
                        name={state[field.name]}
                        defaultValue={state[field.name]}
                        placeholder=""
                        onChangeText={handleChange(field?.name)}
                        returnKeyType="next"
                        autoCapitalize="none"
                        selectionColor="#000"
                        />
                    </View>
                ))}
            </ScrollView>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => updateUserData()
            }>
                <Text style={{color: '#fff', fontSize: 18 }}>Save Changes</Text> 
            </TouchableOpacity>

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
    inputLabel: {
        width: '20%',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 2
      },
      topDrawerSection: {
        marginTop: 15,
        alignItems: 'flex-start',
        borderBottomColor: `${'#f4f4f4'}`,
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 30,
        height: 80
      },
      button :{
        width: '100%',
        backgroundColor: '#000000',
        borderRadius: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: -5,
        alignSelf: 'center',
      },
      textInput: {
        backgroundColor: 'rgb(238, 238, 238)',
        color: '#000',
        width: '90%',
        alignSelf: 'center',
        height: 45,
        margin: 10,
        padding: 10,
      },
    
    
});

export default UserDetails;
