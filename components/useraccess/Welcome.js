import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {appColors} from '../../utils/Appcolors';
import {imagePath} from '../../utils/imagePath';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
        }}>
        <Text style={styles.WelcomeText}>Welcome to {'\n'}With Me !!</Text>
        <Text style={styles.signup_text}>
          Signup first to experience {'\n'}the app
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            flex: 0.9,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}>
            <Image resizeMode="cover" source={imagePath?.PhoneNoLogin} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={imagePath?.FacebookLogin} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MainContainer')}>
            <Image source={imagePath?.GoogleLogin} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={imagePath?.AppleLogin} />
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: appColors?.gray}}>
            If you already have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate('SignIn');
            }}>
            <Text
              style={{
                color: appColors?.orange,
                fontSize: 25,
                fontWeight: 500,
                textDecorationLine: 'underline',
              }}>
              {' Sign in'}
            </Text>
          </TouchableOpacity>
        </View> */}
        <Text style={styles.group4text}>
          If you already have an Account then,
        </Text>
        <View
          style={{
            alignSelf: 'flex-end',
            marginRight: 30,
          }}>
          <TouchableOpacity onPress={() =>  navigation?.navigate('SignIn')}>
            <Image source={imagePath?.SignInBtn} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  WelcomeText: {
    color: '#454545',
    fontSize: 40,
    fontWeight: '600',
    marginLeft: 35,
    marginTop: 20,
  },
  signup_text: {
    color: '#454545',
    fontSize: 19,
    marginLeft: 35,
    fontWeight: '500',
    color: '#9e9e9e',
  },

  button: {
    height: 75,
    marginBottom: 10,
  },
  group4text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#454545',
    left: 54,
    margin: 7,
  },
});

export default Welcome;
