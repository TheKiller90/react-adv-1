import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues= {{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={ values => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
                    .min(2, 'Debe tener un mínimo de 2 caracteres')
                    .max(15, 'Debe tener un máximo de 15 caracteres')
                    .required('Requerido'),
          email: Yup.string()
                    .email('El correo debe tener un formato válido')
                    .required('Requerido'),
          password1: Yup.string()
                    .min(6, 'Debe tener un mínimo de 6 caracteres')
                    .required('Requerido'),
          password2: Yup.string()
                    .oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales')
                    .required('Requerido')
        })}
      >
        {
          ({ handleReset }) => (
            <Form>
              <MyTextInput label='Name' name='name' placeholder='Juan' />
              <MyTextInput type='email' label='Email' name='email' placeholder='ejemplo@ejemplo.com' />
              <MyTextInput type='password' label='Password1' name='password1' placeholder='********' />
              <MyTextInput type='password' label='Password2' name='password2' placeholder='********' />

              <button type="submit">Crear</button>
              <button type="button" onClick={ handleReset }>Reiniciar formulario</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
