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

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocusEmail = () => setIsFocusedEmail(true);
  const handleBlurEmail = () => setIsFocusedEmail(false);
  const handleFocusPass = () => setIsFocusedPass(true);
  const handleBlurPass = () => setIsFocusedPass(false);

  const inputStyleEmail = {
    ...styles.input,
    borderColor: isFocusedEmail ? '#FF6C00' : '#E8E8E8',
  };

  const inputStyleEPass = {
    ...styles.passwordContainer,
    borderColor: isFocusedPass ? '#FF6C00' : '#E8E8E8',
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset="-212"
    >
      <View style={styles.form}>
        <Text style={styles.title}>Войти</Text>
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
          <Text style={styles.btnTitle}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  //LoginScreen styles:
  form: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // flex: 0.6,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    fontWeight: 500,
    color: '#212121',
    marginTop: 32,
    marginBottom: 32,
    textAlign: 'center',
  },

  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#F6F6F6',
    color: '#212121',
    fontSize: 16,
    lineHeight: 19,
    marginHorizontal: 16,
    // position: 'relative',
  },
  btn: {
    backgroundColor: '#FF6C00',
    height: 40,
    borderRadius: 100,
    marginTop: 31,
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
  link: { marginBottom: 111 },
  linkText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#F6F6F6',
    marginHorizontal: 16,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  passText: {
    color: '#212121',
    fontSize: 16,
    lineHeight: 19,
  },
});
