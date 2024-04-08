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
import {useAppCommonDataProvider} from '../UseAppCommonDataProvider';

const Welcome = ({navigation}) => {
  const {colorScheme} = useAppCommonDataProvider();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          colorScheme === 'light' ? appColors?.white : appColors?.black,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={[
            styles?.WelcomeText,
            {
              color:
                colorScheme === 'light'
                  ? appColors?.textColor
                  : appColors?.white,
            },
          ]}>
          Welcome to {'\n'}With Me !!
        </Text>
        <Text
          style={[
            styles?.signup_text,
            {
              color:
                colorScheme === 'light'
                  ? appColors?.textColor
                  : appColors?.loaderColor,
            },
          ]}>
          Signup first to experience {'\n'}the app
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}>
            {colorScheme === 'light' ? (
              <Image source={imagePath?.PhoneNoLogin} />
            ) : (
              <Image source={imagePath?.DPhoneNo} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            {colorScheme === 'light' ? (
              <Image source={imagePath?.FacebookLogin} />
            ) : (
              <Image source={imagePath?.DFacebookBtn} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            {colorScheme === 'light' ? (
              <Image source={imagePath?.GoogleLogin} />
            ) : (
              <Image source={imagePath?.DGoogle} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            {colorScheme === 'light' ? (
              <Image source={imagePath?.AppleLogin} />
            ) : (
              <Image source={imagePath?.Dapple} />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={[
              styles?.group4text,
              {
                color:
                  colorScheme === 'light'
                    ? appColors?.textColor
                    : appColors?.loaderColor,
              },
            ]}>
            If you already have an Account then,
          </Text>
          <View
            style={{
              alignSelf: 'flex-end',
              marginRight: 30,
            }}>
            <TouchableOpacity onPress={() => navigation?.navigate('SignIn')}>
              {colorScheme === 'light' ? (
                <Image source={imagePath?.SignInBtn} />
              ) : (
                <Image source={imagePath?.DSignINBtn} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  WelcomeText: {
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
