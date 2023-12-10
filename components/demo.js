import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RenderContacts = ({ navigation }) => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  // This function will be called when you navigate back from EmergencyContacts
  const handleSelectedContacts = (selectedContacts) => {
    setSelectedContacts(selectedContacts);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('EmergencyContacts', { handleSelectedContacts })}>
        <Text style={{ color: 'black', height: 30, textAlign: 'center' }}>
          Click here to navigate to Emergency contacts
        </Text>
      </TouchableOpacity>

      {/* Display selected contacts in RenderContacts screen */}
      <Text>Selected Contacts: {selectedContacts.map(contact => contact.name).join(', ')}</Text>
    </View>
  );
};

export default RenderContacts;
