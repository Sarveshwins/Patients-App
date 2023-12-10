import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ISection = ({
  isModalVisible,
  toggleModal,
  handleTabClick,
  iListData,
  questionMap,
  handleAnswerSubmit,
  defaultAnswers,
  selectedItem,
  answer,
  setAnswer,
  selectedDefaultAnswer,
  setSelectedDefaultAnswer,
}) => {
  return (
    <View style={styles.meContent}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {iListData.map((item) => (
          <TouchableHighlight underlayColor='transparent'
            key={item.key}
            style={styles.listItem}
            onPress={() => handleTabClick('I', item)}
          >
            <Text style={styles.sectiontexts}>
              {item.text === 'Brush' ? (
                <Text style={{ color: 'black' }}>{item.text} : </Text>
              ) : (
                <Text>{item.text} </Text>
              )}
              {item.answer ? (
                <Text style={{ color: 'black', fontWeight: '400' }}>- {item.answer}</Text>
              ) : null}
            </Text>
          </TouchableHighlight>
        ))}
      </ScrollView>

      <Modal
  animationType="slide"
  transparent={true}
  visible={isModalVisible}
  onRequestClose={() => toggleModal()}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      {/* Done button */}
      <TouchableHighlight underlayColor='transparent'
        style={styles.modalButton}
        onPress={handleAnswerSubmit}
      >
        <Text style={styles.modalButtonText}>Done</Text>
      </TouchableHighlight>

      <Text style={styles.Sliderfirsttext}>{selectedItem?.text}</Text>

      {/* Display default answers as selectable options */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
  {defaultAnswers[selectedItem?.key]?.map((defaultAnswer, index) => (
    <TouchableHighlight underlayColor='transparent'
      key={index}
      style={[
        styles.listItemslider,
        selectedDefaultAnswer === defaultAnswer
          ? styles.selectedDefaultAnswer
          : null,
      ]}
      onPress={() => {
        setAnswer(defaultAnswer);
        setSelectedDefaultAnswer(defaultAnswer);
      }}
    >
      <Text style={styles.sectiontextsslider}>
        {defaultAnswer}
        {selectedDefaultAnswer === defaultAnswer && (
          <Text style={[styles.checkmark, ]}>✓</Text>
        )}
      </Text>
    </TouchableHighlight>
  ))}
  <View style={styles.bottomparent}>
          <Image
            style={styles.poweredbyicon}
            resizeMode="cover"
            source={require("../../../../assets/isection/figma.png")}
          />
          <View style={styles.poweredByParent}>
            <Text style={[styles.poweredBy]}>
              Powered by
            </Text>
            <Text style={[styles.withDocs]}>
              With Doc’s
            </Text>
          </View>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
        </View>
</ScrollView>

    
    </View>
  </View>
</Modal>
    </View>
  );
};
const styles = StyleSheet.create({
    scrollContent: {
      minHeight: hp("70%"),
    },
  container:{
    
    backgroundColor:"#FFF"
  },
  header:{
    height:hp("25%"),
    backgroundColor:"#FFF"
  },
  Addsection:{
    height:hp("15%"),
    backgroundColor:"#FFF"
  
  
  },
  section2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  Mehavei:{
    height:hp("53%"),
    backgroundColor:"#FFF"
  },
  footer:{
    height:hp("7%"),
    backgroundColor:"#FFF"
  
  
  },
  

    // section2 start
  
    mesection: {
      left:51,
      alignItems: 'center',
      borderColor: 'transparent',
      borderBottomColor: '#CC9B66',
    },
    havesection: {
      alignItems: 'center',
      borderColor: 'transparent',
      borderBottomColor: '#CC9B66',
      color:"#291E17"
    },
    isection: {
      right:71,
      alignItems: 'center',
      borderColor: 'transparent',
      borderBottomColor: '#CC9B66',
      paddingBottom: 0
    },
    metext: {
      fontSize: 21,
      alignContent:"center",
      alignSelf:"center",
      fontWeight:"400",
      color:"#291E17"
    },
    havetext: {
      fontSize: 21,
      color:"#291E17",
      alignContent:"center",
      alignSelf:"center",
      fontWeight:"300"
    },
    itext: {
      fontSize: 21,
      alignItems: 'center',
      fontWeight:"400",
      color:"#291E17"
  
    },
    boldText:{
  fontWeight:"600"
    },
    borderBottom: {
  
      width: 21,
    },
    selectedTab: {
      borderColor: '#CC9B66',
      borderBottomWidth: 5,
      height: 30,
      fontWeight: '600',
    },
    borderBottomHave: {
      width: 55,
    },
    borderBottomMe: {
     
      width: 38,
      alignContent:"center",
      alignSelf:"center"
    },
    listItem:{
      left:30,
      marginTop:29,
      borderBottomWidth: 0.6,
      borderBottomColor: "#CC9B66",
      height: 30,
      width:344,
      
    },
  
    sectiontexts:{
      fontSize: 17,
      left:20,
  color:"#291E17",
  fontWeight:"700"
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      height:hp("70%"),
      backgroundColor: '#FFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      
    },
    modalText: {
      fontSize: 18,
      marginBottom: 10,
      left:30
  
    },
    modalInput: {
      
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 8,
      padding: 8,
      marginBottom: 10,
  
    },
    modalButton: {
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      position:"absolute",
      alignSelf:"flex-end",
      right: 30
    },
    modalButtonText: {
      color: '#2D8AE0',
      fontSize: 17,
      fontWeight:"500"
    },
    Sliderfirsttext:{
      color:"#CC9B66",
      fontSize: 28,
      fontWeight:"600",
      left:30,
      top:71
  
    },
    listItemslider: {
      left: 30,
      marginTop: 29,
      borderBottomWidth: 0.6,
      borderBottomColor: "#CC9B66",
      height: 30,
      width: 340,
      fontWeight: "500",
      color: "#291E17",
      top: 100,
    },
    sectiontextsslider: {
      fontSize: 17,
      left: 14,
      fontWeight: "500",
      color: "#291E17",
      bottom: 5,
      paddingRight: 100,
    },
  
  
    checkmark: {
      position: 'absolute',
      right: 200, // Adjust this value to move the checkmark to the desired position
      top: '50%', // Adjust this value to center the checkmark vertically
      color: '#000000', // You can adjust the color of the checkmark
    },
  // powered by doc
  bottomparent: {
    height: "61.63%",
    width: "76.53%",
    top: "25%",
    right: "11.73%",
    bottom: "38.37%",
    left: "11.73%",
    position: "absolute",
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
  },
  poweredByParent: {
    bottom: 1,
    left: 43,
    width: 69,
    height: 33,
    position: "absolute",
  },
  poweredBy: {
    bottom: 19,
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
    color: "#000",
    fontWeight: "600",
    textAlign: "left",
      fontFamily: "500",
      left: 0,
      position: "absolute",
  },
  groupItem: {
    borderColor: "#c5c5c5",
    borderTopWidth: 1,
    width: 288,
    top: 310,
    borderStyle: "solid",
  },
  groupItemPosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  });
export default ISection;
