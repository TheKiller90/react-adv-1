import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name='firstName' component="span" />
            
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name='lastName' component="span" />
            
            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name='email' component="span" />
            
            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-Senior</option>
              <option value="it-jr">It-Junior</option>
            </Field>
            <ErrorMessage name='jobType' component="span" />
            
            <label>
              <Field type="checkbox" name="terms" />
              Terms & Conditions
            </label>
            <ErrorMessage name='terms' component="span" />

            <button type='submit'>Submit</button>
          </Form>
        )
      }
      </Formik>

    </div>
  );
};