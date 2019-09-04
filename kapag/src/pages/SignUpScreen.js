import React, { Component, useState } from "react"

import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  StatusBar,
  Button,
  Switch,
  ActivityIndicator
} from "react-native"
import styles from "../styles/MainStyles"
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik'
import * as yup from 'yup'


const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
    <Text style={{ marginBottom: 3, color: '#fff' }}>{label}</Text>
    {children}
    <Text style={{ color: 'red' }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    styles.input.borderColor = 'red';
  } else {
    styles.input.borderColor = '#fff';
  }

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <TextInput
        style={styles.input}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};

const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
  <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
    <Switch
      value={formikProps.values[formikKey]}
      onValueChange={value => {
        formikProps.setFieldValue(formikKey, value);
      }}
      {...rest}
    />
  </FieldWrapper>
);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email('Email está em um formato inválido')
    .required('Email é um campo obrigatório'),
  password: yup
    .string()
    .label('Password')
    .required('Senha é um campo obrigatório')
    .min(6, 'Muito curta...')
    .max(12, 'Tente uma senha mais curta.'),
  confirmPassword: yup
    .string()
    .required('Senha é um campo obrigatório')
    .label('Confirm password')
    .test('passwords-match', 'As senhas devem ser as mesmas.', function (value) {
      return this.parent.password === value;
    }),
  agreeToTerms: yup
    .boolean()
    .label('Termos')
    .test(
      'is-true',
      'Confirme os termos para poder continuar.',
      value => value === true
    ),
});


export default function SignUpScreen(props) {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  function handle(e) {
    setUser(e.target.value);
  }

  const signUp = ({ email }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'a@a.com') {
          reject(new Error("You playin' with that fake email address."));
        }
        resolve(true);
      }, 1000);
    });

  register = async () => {
    try {
      await auth().createUserWithEmailAndPassword(this.state.user, this.state.pass)
    } catch (e) {
      console.error(e.message)
    }
  }


  componentDidMount = () => {
    const subscriber = auth().onAuthStateChanged((user, err) => {
      this.setState(user)
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          agreeToTerms: false,
        }}
        onSubmit={(values, actions) => {
          signUp({ email: values.email })
            .then(() => {
              alert(JSON.stringify(values));
            })
            .catch(error => {
              actions.setFieldError('general', error.message);
            })
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <React.Fragment>
            <StyledInput
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="johndoe@example.com"
              autoFocus
            />

            <StyledInput
              label="Senha"
              formikProps={formikProps}
              formikKey="password"
              placeholder="senha"
              secureTextEntry
            />

            <StyledInput
              label="Confirmar Senha"
              formikProps={formikProps}
              formikKey="confirmPassword"
              placeholder="confirmar senha"
              secureTextEntry
            />

            <StyledSwitch
              label="Aceito os termos."
              formikKey="agreeToTerms"
              formikProps={formikProps}
            />

            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
                <React.Fragment>
                  <Button title="Salvar" onPress={formikProps.handleSubmit} />
                  <Text style={{ color: 'red' }}>{formikProps.errors.general}</Text>
                </React.Fragment>
              )}
          </React.Fragment>
        )}
      </Formik>
    </View >
  )
}

