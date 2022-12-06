import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={ (values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
                  .max(15, 'Debe tener 15 caracteres o menos')
                  .required('Requerido'),
          lastName: Yup.string()
                  .max(15, 'Debe tener 15 caracteres o menos')
                  .required('Requerido'),
          email: Yup.string()
                  .email('El correo no tiene un formato válido')
                  .required('Requerido'),
          terms: Yup.boolean()
                  .oneOf([true], 'Debe aceptar los términos y condiciones'),
          jobType: Yup.string()
                  .notOneOf(['it-jr'], 'Esta opción no es permitida')
                  .required('Requerido')
        })}
      >
      { formik => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Juan'
            />
            
            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Camaney'
            />
            
            <MyTextInput
              label='Email Address'
              name='email'
              placeholder='ejemplo@ejemplo.com'
              type='email'
            />

            <MySelect label='jobType' name='jobType'>
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-Senior</option>
              <option value="it-jr">It-Junior</option>
            </MySelect>
            
            <MyCheckbox label='Terms & Conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )
      }
      </Formik>

    </div>
  );
};