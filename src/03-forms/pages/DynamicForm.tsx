import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

	if(!input.validations) continue;

	let schema = Yup.string();

	for (const rule of input.validations) {
		if(rule.type === 'Required') {
			schema = schema.required('Este campo es requerido');
		}
		if(rule.type === 'minLength') {
			schema = schema.min((rule as any).value || 1, `Mínimo de caracteres`)
		}
		if(rule.type === 'email') {
			schema = schema.email('Debe introducir un correo válido');
		}
		// ... Otras Reglas
	}
	requiredFields[input.name] = schema;
};

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
	return (
		<div>
			<h1>DynamicForm</h1>

			<Formik
				initialValues={initialValues}
				validationSchema={ validationSchema }
				onSubmit={values => {
					console.log(values);
				}}
			>
				{formik => (
					<Form noValidate>
						{formJson.map(({ type, name, label, placeholder, options }) => {
							if(type === 'input' || type === 'password' || type === 'email') {
								return <MyTextInput
									key={name}
									type={(type as any)}
									name={name}
									label={label}
									placeholder={ placeholder }
								/>
							} else if(type === 'select') {
								return(
									<MySelect
									  key={ name }
										label={ label }
										name={ name }
									>
										<option value="">Select an option</option>
										{
											options?.map(({ id, label }) => (
												<option key={id} value={label} >{ label }</option>
											))
										}
									</MySelect>
								)
							}
							
							throw new Error(`Type: ${ type } no es soportado`);
						})}

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};