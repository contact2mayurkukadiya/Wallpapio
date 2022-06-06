import {ToastAndroid, AsyncStorage} from 'react-native';

export const showToast = (message, type = 'short') => {
  ToastAndroid.show(
    message,
    type == 'short' ? ToastAndroid.SHORT : ToastAndroid.LONG,
  );
};

export const setData = async (
  key,
  value,
  errorMsg = 'Unable to save data',
) => {
  try {
    await AsyncStorage.setItem('@wpio:' + key, value);
  } catch (error) {
    // Error saving data
    this.showToast(errorMsg);
  }
};

export const getData = async (key, errorMsg = 'Unable to get data') => {
  try {
    const value = await AsyncStorage.getItem('@wpio:' + key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (error) {
    this.showToast(errorMsg);
    return null;
  }
};
