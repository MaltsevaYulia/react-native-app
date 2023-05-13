import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';

export const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocusedLog, setIsFocusedLog] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);

  const handleFocusLog = () => setIsFocusedLog(true);
  const handleBlurLog = () => setIsFocusedLog(false);
  const handleFocusEmail = () => setIsFocusedEmail(true);
  const handleBlurEmail = () => setIsFocusedEmail(false);
  const handleFocusPass = () => setIsFocusedPass(true);
  const handleBlurPass = () => setIsFocusedPass(false);

  const inputStyleLog = {
    ...styles.input,
    borderColor: isFocusedLog ? '#FF6C00' : '#E8E8E8',
  };

  const inputStyleEmail = {
    ...styles.input,
    borderColor: isFocusedEmail ? '#FF6C00' : '#E8E8E8',
  };

  const inputStyleEPass = {
    ...styles.passwordContainer,
    borderColor: isFocusedPass ? '#FF6C00' : '#E8E8E8',
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset="-147"
    >
      <View style={styles.form}>
        <View style={styles.avaWrapper}>
          <View style={styles.addBtn}>
            <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
          </View>
        </View>
        <Text style={styles.title}>Регистрация</Text>
        <TextInput
          style={inputStyleLog}
          placeholder="Логин"
          placeholderTextColor="#BDBDBD"
          value={login}
          onChangeText={text => setLogin(text)}
          onFocus={handleFocusLog}
          onBlur={handleBlurLog}
        />
        <TextInput
          style={inputStyleEmail}
          placeholder="Адрес электронной почты"
          placeholderTextColor="#BDBDBD"
          value={email}
          onChangeText={text => setEmail(text)}
          onFocus={handleFocusEmail}
          onBlur={handleBlurEmail}
        />
        <View style={inputStyleEPass}>
          <TextInput
            style={styles.passText}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
            onFocus={handleFocusPass}
            onBlur={handleBlurPass}
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={styles.passwordToggle}
          >
            <Text style={styles.show}>
              {showPassword ? 'Скрыть' : 'Показать'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTitle}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  //RegistrationScreen styles:
  form: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // flex: 0.7,
    justifyContent: 'center',
  },
  avaWrapper: {
    position: 'absolute',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    top: 0,
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },
  addBtn: {
    position: 'absolute',
    // borderColor: '#FF6C00',
    // borderRadius: '50%',
    // borderWidth: 1,
    // backgroundColor: '#FFFFFF',
    width: 25,
    height: 25,
    right: 0,
    bottom: 12,
    transform: [{ translateX: 12.5 }],
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    fontWeight: 500,
    color: '#212121',
    marginTop: 92,
    marginBottom: 32,
    textAlign: 'center',
  },

  input: {
    marginBottom: 12,
    borderWidth: 1,
    // borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#F6F6F6',
    // placeholderTextColor: '#BDBDBD',
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    marginHorizontal: 16,
    // position: 'relative',
  },
  btn: {
    backgroundColor: '#FF6C00',
    height: 40,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  btnTitle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  show: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  linkText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    textAlign: 'center',
    marginBottom: 45,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'base-line',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#F6F6F6',
    marginHorizontal: 16,
    // marginBottom: 12,
  },
  passText: {
    color: '#212121',
    fontSize: 16,
    lineHeight: 19,
  },
});
