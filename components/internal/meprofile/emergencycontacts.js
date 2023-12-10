import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, FlatList, StyleSheet , TextInput, Image, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import Contacts from 'react-native-contacts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BlurView } from '@react-native-community/blur';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';


const EmergencyContacts = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    // Fetch contacts or load them from your data source
    // ...

    // Example: Assuming you have an array of contacts fetched/loaded
    const fetchedContacts = [
      { id: 1, name: 'Contact 1' },
      { id: 2, name: 'Contact 2' },
      // ... other contacts
    ];

    // Update the contacts state
    setContacts(fetchedContacts);

  }, []);
  const handleContactPress = (contact) => {
    // Example: Toggle the selection status of the contact
    const isSelected = selectedContacts.some((c) => c.id === contact.id);
  
    if (isSelected) {
      // If the contact is already selected, remove it from the selected list
      setSelectedContacts((prevSelected) =>
        prevSelected.filter((c) => c.id !== contact.id)
      );
    } else {
      // If the contact is not selected, add it to the selected list
      setSelectedContacts((prevSelected) => [...prevSelected, contact]);
    }
  };
  const handleDone = () => {
    // Call the handleSelectedContacts function passed through navigation params
    if (route.params && route.params.handleSelectedContacts) {
      route.params.handleSelectedContacts(selectedContacts);
    }

    // Navigate back to RenderContacts screen
    navigation.goBack();
  };

  const fetchContacts = async () => {
    try {
      let status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
      console.log('Permission status: ', status);

      if (status === 'denied' || status === 'never_ask_again') {
        throw new Error('Permission not granted');
      }

      Contacts.getAll()
        .then((actualData) => {
          console.log('my contacts: ', actualData);
          setContacts(actualData);
        })
        .catch((err) => {
          console.log('something wrong', err);
        });
    } catch (error) {
      console.error('Error fetching contacts: ', error.message);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.givenName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (contact.phoneNumbers &&
        contact.phoneNumbers.length > 0 &&
        contact.phoneNumbers[0].number.includes(searchQuery))
  );

  const renderItem = ({ item, index }) => {
    if (item.isBorderline) {
      return (
        <View style={styles.borderlineContainer}>
          <Text style={styles.borderlineText}></Text>
        </View>
      );
    }

    const isSelected = selectedContacts.some((contact) => contact.recordID === item.recordID);

    return (
        <TouchableHighlight
      onPress={() => handleContactPress(item)}
      onLongPress={() => handleContactLongPress(item)}
      underlayColor="transparent"
    >
      <View style={{}}>
        <Text style={[styles.contactname, isSelected && styles.selectedContact]}>
          {item.givenName}
        </Text>
        <Text style={styles.phonename}>
          {item.phoneNumbers && item.phoneNumbers.length > 0
            ? item.phoneNumbers[0].number
            : 'N/A'}
        </Text>
        {isSelected && editMode && (
          <TouchableHighlight
            onPress={() => handleDeleteConfirmation(item)}
            underlayColor="transparent"
          >
              <Image
            style={styles.deleteContactIcon}
            resizeMode="cover"
            source={require("../../../assets/mesection/deleteicon.png")}
          />
            {/* <Text style={styles.deleteContactIcon}>-</Text> */}
          </TouchableHighlight>
        )}
        {isSelected && !editMode && index === selectedContacts.length - 1 && (
          <View style={styles.selectedContactBorder} />
        )}
      </View>
    </TouchableHighlight>
    );
  };


  const handleContactLongPress = (contact) => {
    if (!editMode) {
      // Activate edit mode
      setEditMode((prevEditMode) => !prevEditMode);
    }
  };
  const toggleContactSelection = (contact) => {
    const isSelected = selectedContacts.some((c) => c.recordID === contact.recordID);
  
    if (isSelected) {
      // If the contact is already selected, remove it from the selected list
      setSelectedContacts((prevSelected) =>
        prevSelected.filter((c) => c.recordID !== contact.recordID)
      );
      // Add the contact back to the unselected list
      setContacts((prevContacts) => [...prevContacts, contact]);
    } else {
      // If the contact is not selected, add it to the selected list
      if (selectedContacts.length < 5) {
        setSelectedContacts((prevSelected) => [...prevSelected, contact]);
        // Remove the contact from the unselected list
        setContacts((prevContacts) =>
          prevContacts.filter((c) => c.recordID !== contact.recordID)
        );
      } else {
        Alert.alert(
          'Info',
          'You have selected the maximum number of contacts.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
        return; // Prevent adding more than the allowed number of contacts
      }
    }
  };
  
 

  const handleDeleteConfirmation = (contact) => {
    Alert.alert(
      'Delete Contact',
      'Do you really want to delete this contact?',
      [
        {
          text: 'Cancel',
          onPress: () => handleCancelDelete(),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => handleDeleteContact(contact),
        },
      ],
      { cancelable: false }
    );
  }

  const handleDeleteContact = (contact) => {
    setSelectedContacts((prevSelected) =>
      prevSelected.filter((c) => c.recordID !== contact.recordID)
    );
    setDeleteConfirmationVisible(false);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmationVisible(false);
    setContactToDelete(null);
  };
  return (
    <View style={{backgroundColor:"#FFF",borderTopRightRadius:40,borderTopLeftRadius:40}}>
        <View style={styles.group1}>
        <TouchableHighlight underlayColor="transparent" onPress={() => setEditMode(!editMode)}>
          <Text style={[styles.edit]}>{editMode ? 'Cancel' : 'Edit'}</Text>
        </TouchableHighlight>
        <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleContactPress(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
        <TouchableOpacity onPress={handleDone}>
        <Text>Done</Text>
      </TouchableOpacity>

        <Text style={styles.EmergencyContactstext}>Emergency Contacts</Text>
        </View>

            <View style={styles.searchBarContainer}>

        <TextInput
          style={[styles.searchBar, { fontSize: 16 , fontWeight:"400"}]}
          placeholder="Search Contacts"
          placeholderTextColor="#CCC"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <View style={styles.group2}>
      <FlatList
          data={selectedContacts.concat([{ isBorderline: true }], filteredContacts)}
          keyExtractor={(item, index) => (item.isBorderline ? 'borderline' : item.recordID.toString() + index)}
          renderItem={renderItem}
        />

      </View>
      <View style={styles.group3}>
      <View style={styles.bottomparent}>
          <Image
            style={styles.poweredbyicon}
            resizeMode="cover"
            source={require("../../../assets/isection/figma.png")}
          />
          <View style={styles.poweredByParent}>
            <Text style={[styles.poweredBy]}>
              Powered by
            </Text>
            <Text style={[styles.withDocs]}>
              With Doc’s
            </Text>
          </View>
          <BlurView
              style={styles.groupItem}
              blurType="light"
              blurAmount={22}
              reducedTransparencyFallbackColor="white"
            />
          <View style={styles.groupItemPosition}>
              <View style={{ ...styles.groupItem, backgroundColor: 'transparent' }} />
            </View>
                    </View>      
                    </View>
                    {deleteConfirmationVisible && (
        <View style={styles.deleteConfirmation}>
          <Text>Do you really want to delete this contact?</Text>
          <TouchableHighlight onPress={handleDeleteContact} underlayColor="transparent">
            <Text style={styles.deleteConfirmationButton}>Yes</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={handleCancelDelete} underlayColor="transparent">
            <Text style={styles.deleteConfirmationButton}>Cancel</Text>
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    group1:{
        height:hp("10%")
    },
    group2:{
        height:hp("68%")

    },
    group3:{
        height:hp("20%")

    },
    contactname:{
        color:"#291E17",
      
        fontWeight: "500",
        left: 44,
        marginTop:25,
        fontSize:15,

    },
    phonename:{
        fontWeight: "300",
        left: 44,
        color:"#291E17",
        fontSize:15


    },
    EmergencyContactstext:{
        top: 60,
        fontSize: 22,
        fontWeight: "700",
        color: "#291E17",
        left: 44,
        textAlign: "left",
        fontFamily: "700",
        position: "absolute",

    },
    done: {
        textAlign: "left",
        color: "#2D8AE0",
        top: 30,
        fontWeight: "500",
        fontSize: 17,
        position: "absolute",
        alignSelf:"flex-end",
        right:30
      },
      edit:{
        textAlign: "left",
        color: "#2D8AE0",
        top: 30,
        fontWeight: "500",
        fontSize: 17,
        position: "absolute",
        left:30
      },
      searchBarContainer: {
        paddingVertical: 20,
      },
      searchBar: {
        width:355,
       borderBottomWidth:1,
        borderRadius: 8,
        paddingLeft: 10,
        alignSelf:"center",
        color:"#454545",
        textAlign:"center"
      },
    
        // powered by doc
  bottomparent: {
    width: "76.53%",
    right: "11.73%",
    left: "11.73%",
  },
  poweredbyicon: {
  height: 36,
  width:33,
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    top:25
  },
  poweredByParent: {
    top:32,

    left: 43,
    width: 69,
    height: 33,
    position: "absolute",
  },
  poweredBy: {

    fontSize: 12,
    lineHeight: 13,
    color: "rgba(60, 60, 67, 0.60)",
    fontWeight: "500",
    textAlign: "left",
      fontFamily: "500",
      left: 0,
      position: "absolute",
  },
  withDocs: {
    bottom: 0,
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    color: "black",
    fontWeight: "600",
    textAlign: "left",
      left: 0,
      position: "absolute",
  },
  groupItem: {
    borderColor: "#c5c5c5",
    borderTopWidth: 1,
    width: 310,
    borderStyle: "solid",
    top:10
    
  },
  groupItemPosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  selectedContactBorder: {
    top:12,
    borderBottomColor: '#000', // Customize the border color for the last selected contact
    borderBottomWidth: 0.6, 
    width:320,
    alignSelf:"center" // Adjust the width of the border as needed
  },
  deleteContactIcon: {
   
    right: 30,
    alignSelf:"flex-end",
    marginTop:-35
    
  },


})
export default EmergencyContacts;