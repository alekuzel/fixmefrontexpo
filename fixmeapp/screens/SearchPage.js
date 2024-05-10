import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, Text, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';



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
        <View style={styles.container}>
            {/* Narrow Header */}
            <View style={styles.header}>
                {/* Header could still contain other UI elements if needed */}
            </View>

            {/* Title on white background */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Hair</Text>
                <Text style={styles.subtitleText}>Search Appointment</Text> 
            </View>

                {/* Search Input with Icon */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="#808080" // Light grey color for placeholder
                        value={searchQuery}
                        onChangeText={handleSearchChange}
                    />
                    <TouchableOpacity onPress={() => console.log('Microphone pressed')}>
                    <Icon name="microphone" type="font-awesome" color="#517fa4" />
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#9e38ee', // Keep the top part purple if needed
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 30, // Reduced height for a more narrow header
        backgroundColor: '#9e38ee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        // Additional style to help with alignment and spacing
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#9e38ee', // Text color same as header background color
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        width: '80%',
        marginBottom: 12
    },
    input: {
        flex: 1,
        marginRight: 10, // ensures spacing between text input and icon
        borderWidth: 0 // removes individual border from text input
    },

    subtitleText: { 
        fontSize: 28,
        color: '#000000',
        
    },
});

export default SearchPage;
