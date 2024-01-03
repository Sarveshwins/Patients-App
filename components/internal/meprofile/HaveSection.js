import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BlurView} from '@react-native-community/blur';

const HaveSection = ({
  isHaveModalVisible,
  toggleModalHave,
  handleTabClickHave,
  haveListData,
  handleAnswerSubmitHave,
  defaultAnswersHave,
  selectedItemHave,
  answerHave,
  setAnswerHave,
  selectedDefaultAnswerHave,
  setSelectedDefaultAnswerHave,
}) => {
  const [customAnswer, setCustomAnswer] = useState('');
  const [pain, setPain] = useState('');
  const [injuries, setInjuries] = useState('');
  const [surguries, setSurguries] = useState('');

  const renderItemContent = item => {
    if (['16', '19', '20'].includes(item.key)) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          key={item.key}
          style={[styles.listItem]}
          onPress={() => handleTabClickHave('Have', item)}>
          <Text style={styles.sectiontexts}>
            <Text style={{color: 'black'}}>{item.text} </Text>
            {item.answerHave ? (
              <Text style={{color: 'black', fontWeight: '400'}}>
                 {item.answerHave}
              </Text>
            ) : null}
          </Text>
        </TouchableHighlight>
      );
    } else if (item.key === '15') {
      return (
        <View key={item.key} style={styles.listItem}>
          <Text style={styles.sectiontexts}>{item.text}</Text>
          <TextInput
            style={styles.textInput}
            value={pain}
            onChangeText={text => setPain(text)}
          />
        </View>
      );
    } else if (item.key === '17') {
      return (
        <View key={item.key} style={styles.listItem}>
          <Text style={styles.sectiontexts}>{item.text} </Text>
          <TextInput
            style={styles.textInputInjuruies}
            value={injuries}
            onChangeText={text => setInjuries(text)}
          />
        </View>
      );
      // } else if (item.key === '18') {
    } else {
      return (
        <View key={item.key} style={styles.listItem}>
          <Text style={styles.sectiontexts}>{item.text}</Text>
          <TextInput
            style={styles.textInputSurguries}
            value={surguries}
            onChangeText={text => setSurguries(text)}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.meContent}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {haveListData.map((item, index) => (
          <React.Fragment key={index}>{renderItemContent(item)}</React.Fragment>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isHaveModalVisible}
        onRequestClose={() => toggleModalHave()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableHighlight
              underlayColor="transparent"
              style={styles.modalButton}
              onPress={handleAnswerSubmitHave}>
              <Text style={styles.modalButtonText}>Done</Text>
            </TouchableHighlight>
            <Text style={styles.Sliderfirsttext}>{selectedItemHave?.text}</Text>
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              nestedScrollEnabled={true}>
              {defaultAnswersHave[selectedItemHave?.key]?.map(
                (defaultAnswer, index) => (
                  <TouchableHighlight
                    underlayColor="transparent"
                    key={index}
                    style={[
                      styles.listItemslider,
                      selectedDefaultAnswerHave === defaultAnswer
                        ? styles.selectedDefaultAnswerme
                        : null,
                    ]}
                    onPress={() => {
                      setAnswerHave(defaultAnswer);
                      setSelectedDefaultAnswerHave(defaultAnswer);
                    }}>
                    <Text style={styles.sectiontextsslider}>
                      {defaultAnswer}
                      {selectedDefaultAnswerHave === defaultAnswer && (
                        <Text style={styles.checkmark}>  ✓</Text>
                      )}
                    </Text>
                  </TouchableHighlight>
                ),
              )}
            </ScrollView>
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
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  meContent: {
    position: 'absolute',
  },
  scrollContent: {
    minHeight: hp('50%'),
  },

  footer: {
    height: hp('7%'),
    backgroundColor: '#FFF',
  },

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
    left: 30,
    marginTop: 29,
    borderBottomWidth: 0.6,
    borderBottomColor: '#CC9B66',
    height: 30,
    width: 374,
    top: 30,
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    left: 30,
    top: 71,
  },
  listItemslider: {
    left: 30,
    marginTop: 29,
    borderBottomWidth: 0.6,
    borderBottomColor: '#CC9B66',
    height: 30,
    width: 340,
    fontWeight: '500',
    color: '#291E17',
    top: 100,
  },
  sectiontextsslider: {
    fontSize: 17,
    left: 14,
    fontWeight: '500',
    color: '#291E17',
    bottom: 5,
    paddingRight: 100,
  },

  checkmark: {
    position: 'absolute',
    right: 200,
    top: '50%',
    color: '#000000',
  },

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
    left: 64,
    bottom: 60,
    fontWeight: '500',
    color: '#291E17',
    fontSize: 17,
  },
  textInputInjuruies: {
    height: 100,
    color: '#291E17',
    left: 87,
    bottom: 60,
    fontWeight: '500',
    color: '#291E17',
    fontSize: 17,
  },
  textInputSurguries: {
    height: 100,
    color: '#291E17',
    left: 80,
    bottom: 60,
    paddingLeft: 30,
    fontWeight: '500',
    color: '#291E17',
    fontSize: 17,
  },
});
export default HaveSection;
