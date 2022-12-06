import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

  const {
    formData, onInputChange, onResetForm, isValidEmail,
    name, email, password1, password2
  } = useForm({
		name: '',
		email: '',
		password1: '',
		password2: ''
	});

	const onSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={ onSubmit } noValidate>
        <input
          type="text"
          placeholder="Name"
          name="name"
					value={ name }
					onChange={ onInputChange }
          className={ `${name.trim().length <= 0 && 'has-error'}` }
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }

        <input
          type="email"
          placeholder="Email"
					name="email"
					value={ email }
					onChange={ onInputChange }
          className={ `${!isValidEmail(email) && 'has-error'}` }
        />
        { !isValidEmail(email) && <span>Email no válido</span> }
        
        <input
          type="password"
          placeholder="Contraseña"
					name="password1"
					value={ password1 }
					onChange={ onInputChange }
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password1.trim().length < 6 && <span>La contraseña debe tener un mínimo de 6 caracteres</span> }
        
        <input
          type="password"
          placeholder="Repita su contraseña"
					name="password2"
					value={ password2 }
					onChange={ onInputChange }
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
        { (password2.trim().length > 0 && password1 !== password2) && <span>Las contraseñas deben ser iguales</span> }

        <button type="submit">Crear</button>
        <button type="button" onClick={ onResetForm }>Reiniciar formulario</button>
      </form>
    </div>
  )
}
