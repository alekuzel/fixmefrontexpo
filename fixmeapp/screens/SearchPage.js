import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, Text, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient'; // Import the LinearGradient component

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const handleSearchSubmit = () => {
        console.log(`Searching for: ${searchQuery}`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
               <View style={styles.header} />
            <LinearGradient
                colors={['#FBF7FF', '#E9D2FD']} // Start with purple and transition to white
                start={{x: 0, y: 0}} // Gradient starts at left-middle
                end={{x: 1, y: 0}} // Gradient ends at right-middle
                style={styles.gradient}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        {/* Header could still contain other UI elements if needed */}
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Hair</Text>
                        <Text style={styles.subtitleText}>Search Appointment</Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <TouchableOpacity style={styles.nowButton} onPress={() => console.log('Now button pressed')}>
                            <Text style={styles.nowButtonText}>Now </Text>
                            <Icon name="clock-o" type="font-awesome" color="#FFFFFF" size={18} />
                        </TouchableOpacity>
                        <TextInput
                            style={[styles.input, { fontSize: 20 }]}
                            placeholder="   Search"
                            placeholderTextColor="#A9A9A9"
                            value={searchQuery}
                            onChangeText={handleSearchChange}
                        />
                        <TouchableOpacity onPress={() => console.log('Microphone pressed')}>
                            <Icon name="microphone" type="font-awesome" color="#000000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    gradient: {
        flex: 1,
    },
    header: {
        height: 70, // Adjust the height of the header as needed
        backgroundColor: '#9E38EE',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#9e38ee',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        marginBottom: 12
    },
    input: {
        flex: 1,
        marginRight: 10,
        borderWidth: 0
    },
    nowButton: {
        flexDirection: 'row',
        backgroundColor: '#333333',
        borderRadius: 35,
        paddingVertical: 5,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nowButtonText: {
        color: '#FFFFFF',
        marginLeft: 4, // Space between text and icon
        fontSize: 16
    },
    subtitleText: { 
        fontSize: 28,
        color: '#000000',
    },
});

export default SearchPage;


// I guess these links to other pages is still better to do with real navigation and not just a placeholder.
//simply easer to make CSS work that way as it looks like now.