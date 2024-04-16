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
  let isLightMode = colorScheme === 'light';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isLightMode ? appColors?.white : appColors?.black,
      }}>
      <View style={{flex: 1}}>
        <Text
          style={[
            styles?.WelcomeText,
            {
              color: isLightMode ? appColors?.textColor : appColors?.white,
            },
          ]}>
          Welcome to {'\n'}With Me !!
        </Text>
        <Text
          style={[
            styles?.signup_text,
            {
              color: isLightMode
                ? appColors?.textColor
                : appColors?.loaderColor,
            },
          ]}>
          Signup first to experience {'\n'}the app
        </Text>
        <View style={styles.innerView}>
          <OptionButton
            onPress={() => navigation.navigate('Signup')}
            image={isLightMode ? imagePath?.PhoneNoLogin : imagePath?.DPhoneNo}
          />

          <OptionButton
            image={
              isLightMode ? imagePath?.FacebookLogin : imagePath?.DFacebookBtn
            }
          />
          <OptionButton
            image={isLightMode ? imagePath?.GoogleLogin : imagePath?.DGoogle}
          />
          <OptionButton
            image={isLightMode ? imagePath?.AppleLogin : imagePath?.Dapple}
          />
        </View>

        <Text
          style={[
            styles?.group4text,
            {
              color: isLightMode
                ? appColors?.textColor
                : appColors?.loaderColor,
            },
          ]}>
          If you already have an Account then,
        </Text>

        <OptionButton
          onPress={() => navigation?.navigate('SignIn')}
          containerStyle={styles.touchSignIn}
          image={isLightMode ? imagePath?.SignInBtn : imagePath?.DSignINBtn}
        />
      </View>
    </SafeAreaView>
  );
};

const OptionButton = ({onPress, image, containerStyle}) => {
  return (
    <TouchableOpacity
      style={[containerStyle]}
      onPress={() => onPress && onPress()}>
      <Image source={image} />
    </TouchableOpacity>
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
  innerView: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
  },

  group4text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#454545',
    left: 54,
    margin: 7,
  },
  touchSignIn: {alignSelf: 'flex-end', marginRight: 30},
});

export default Welcome;
