import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BlurView} from '@react-native-community/blur';
import {useTheme} from '../../ThemeContext';

import {useNavigation} from '@react-navigation/native';

const Mesection = ({
  ismeModalVisible,
  toggleModalme,
  handleTabClickme,
  meListData,
  questionMapme,
  handleAnswerSubmitme,
  defaultAnswersme,
  selectedItemme,
  answerme,
  setAnswerme,
  selectedDefaultAnswerme,
  setSelectedDefaultAnswerme,
}) => {
  const navigation = useNavigation();
  const [customAnswer, setCustomAnswer] = useState('');

  const renderItemContent = item => {
    if (['8', '9', '10'].includes(item.key)) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          key={item.key}
          style={[styles.listItem]}
          onPress={() => handleTabClickme('Me', item)}>
          <Text style={styles.sectiontexts}>
            {item.text === 'Brush' ? (
              <Text style={{color: 'black'}}>{item.text} : </Text>
            ) : (
              <Text style={{color: 'black'}}>{item.text} </Text>
            )}
            {item.answerme ? (
              <Text style={{color: 'black', fontWeight: '400'}}>
                {item.answerme}
              </Text>
            ) : null}
          </Text>
        </TouchableHighlight>
      );
    } else if (item.key === '7') {
      return (
        <View key={item.key} style={styles.listItem}>
          <Text style={styles.sectiontexts}>{item.text}</Text>
          <TextInput
            style={styles.textInput}
            value={customAnswer}
            onChangeText={text => setCustomAnswer(text)}
          />
        </View>
      );
    } else if (item.key === '6') {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          key={item.key}
          style={[styles.listItem]}
          // onPress={() => navigation.navigate('EmergencyContacts')}
        >
          <Text style={styles.sectiontexts}>{item.text}</Text>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          key={item.key}
          style={[styles.listItem]}
          onPress={() => navigation.navigate('MeContacts')}>
          <Text style={styles.sectiontexts}>{item.text}</Text>
        </TouchableHighlight>
      );
    }
  };

  return (
    <View style={styles.meContent}>
      <ScrollView contentContainerStyle={{paddingBottom: 300}}>
        {meListData.map(item => renderItemContent(item))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={ismeModalVisible}
        onRequestClose={() => toggleModalme()}
        style={{}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View underlayColor="transparent" style={styles.GlassMorphism}>
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.modalButton}
                onPress={handleAnswerSubmitme}>
                <Text style={styles.modalButtonText}>Done</Text>
              </TouchableHighlight>
              <Text style={styles.Sliderfirsttext}>{selectedItemme?.text}</Text>
            </View>
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              nestedScrollEnabled={true}>
              {defaultAnswersme[selectedItemme?.key]?.map(
                (defaultAnswer, index) => (
                  <TouchableHighlight
                    underlayColor="transparent"
                    key={index}
                    style={[
                      styles.listItemslider,
                      selectedDefaultAnswerme === defaultAnswer
                        ? styles.selectedDefaultAnswerme
                        : null,
                    ]}
                    onPress={() => {
                      setAnswerme(defaultAnswer);
                      setSelectedDefaultAnswerme(defaultAnswer);
                    }}>
                    <Text style={styles.sectiontextsslider}>
                      {defaultAnswer}
                      {selectedDefaultAnswerme === defaultAnswer && (
                        <Text style={styles.checkmark}>✓</Text>
                      )}
                    </Text>
                  </TouchableHighlight>
                ),
              )}
            </ScrollView>
            {/* Input field for custom answer */}
            <View style={styles.bottomparent}>
              <Image
                style={styles.poweredbyicon}
                resizeMode="cover"
                source={require('../../../assets/isection/figma.png')}
              />
              <View style={styles.poweredByParent}>
                <Text style={[styles.poweredBy]}>Powered by</Text>
                <Text style={[styles.withDocs]}>With Doc’s</Text>
              </View>
              <BlurView
                style={styles.groupItem}
                blurType="light"
                blurAmount={22}
                reducedTransparencyFallbackColor="white"
              />
              <View style={styles.groupItemPosition}>
                <View
                  style={{
                    ...styles.groupItem,
                    backgroundColor: 'transparent',
                  }}
                />
              </View>
            </View>
            {/* ... (you can add an input field if needed) */}
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  meContent: {
    //  position: 'absolute',
    width: '100%',
  },
  scrollContent: {
    backgroundColor: '#FFF',
  },

  footer: {
    height: hp('7%'),
    backgroundColor: '#FFF',
  },

  modal: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  // section2 start

  boldText: {
    fontWeight: '600',
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
    alignContent: 'center',
    alignSelf: 'center',
  },
  listItem: {
    left: 20,
    marginTop: 30,
    borderBottomWidth: 0.6,
    borderBottomColor: '#CC9B66',
    height: 40,
    width: 374,
    top: 10,
  },
  GlassMorphism: {
    backgroundColor: 'rgba(255, 255, 255)',
    height: hp('10%'),
    // backgroundColor: 'red',
  },
  sectiontexts: {
    fontSize: 17,
    left: 20,
    color: '#291E17',
    fontWeight: '700',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: hp('70%'),
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    left: 30,
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
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  modalButtonText: {
    color: '#2D8AE0',
    fontSize: 17,
    fontWeight: '500',
  },
  Sliderfirsttext: {
    color: '#CC9B66',
    fontSize: 28,
    fontWeight: '600',
    left: 20,
    top: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  listItemslider: {
    marginTop: 9,
    borderBottomWidth: 0.6,
    borderBottomColor: '#CC9B66',
    height: 40,
    fontWeight: '500',
    color: '#291E17',
  },
  sectiontextsslider: {
    fontSize: 17,
    left: 14,
    fontWeight: '500',
    color: '#291E17',
    height: 40,
  },

  checkmark: {
    color: 'blue',
    textAlign: 'right',
    width: 30,
  },
  // powered by doc
  bottomparent: {
    height: hp('11%'),
    width: '76.53%',
    right: '11.73%',
    left: '11.73%',
    bottom: 35,
  },
  poweredbyicon: {
    height: 36,
    width: 33,
    bottom: '0%',
    left: '0%',
    borderRadius: 5,
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  poweredByParent: {
    bottom: 1,
    left: 43,
    width: 69,
    height: 33,
    position: 'absolute',
  },
  poweredBy: {
    bottom: 19,
    fontSize: 12,
    lineHeight: 13,
    color: 'rgba(60, 60, 67, 0.60)',
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: '500',
    left: 0,
    position: 'absolute',
  },
  withDocs: {
    bottom: 0,
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    color: '#000',
    fontWeight: '600',
    textAlign: 'left',
    fontFamily: '500',
    left: 0,
    position: 'absolute',
  },
  groupItem: {
    top: hp('33%'),
    borderColor: '#c5c5c5',
    borderTopWidth: 1,
    width: 288,
    borderStyle: 'solid',
  },
  groupItemPosition: {
    height: 1,
    left: 0,
    position: 'absolute',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    top: 40,
    left: 60,
    borderBottomWidth: 0.6,
    borderBottomColor: '#CC9B66',
    fontWeight: '500',
  },
  textInput: {
    height: 100,
    color: '#291E17',
    left: 80,
    bottom: 60,
    fontWeight: '500',
    color: '#291E17',
    fontSize: 17,
  },
});
export default Mesection;
