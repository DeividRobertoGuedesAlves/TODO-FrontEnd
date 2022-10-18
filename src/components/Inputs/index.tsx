import { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import inputStyles from './input.module.css';
import passwordStyles from './password.module.css';

type InputProps = {
	max?: number;
	icon: IconName;
	iconType: IconPrefix;
	name: string;
	type: string;
	label: string;
}

type PasswordProps = {
	name: string;
	label: string;
}

export const Input = ( { name, type, label, icon, iconType, max}: InputProps ) => {
	return (
		<div className={inputStyles.inputGroup}>
			<div className={inputStyles.before}>
				<Icon icon={[iconType, icon]} fontSize={22}/>
			</div>
			<input type={type} name={name} id={name} placeholder=' ' className={inputStyles.input} maxLength={max}/>
			<span className={inputStyles.label}>{label}</span>
		</div>
	);
}

export const PasswordInput = ( { name, label }: PasswordProps ) => {

	const [passwordVisible, setPasswordVisible] = useState(false);
	const [passwordType, setPasswordType] = useState('password');

	const passwordInputChange = () => {
		if (passwordType == 'password') {
			setPasswordVisible(true)
			setPasswordType('text')
		} else {
			setPasswordVisible(false)
			setPasswordType('password')
		}
	}

	return (
		<div className={passwordStyles.inputGroup}>
			<div className={passwordStyles.before}>
				<Icon icon={['fas', 'lock']} fontSize={22}/>
			</div>
			<input type={passwordType} name={name} id={name} placeholder=' ' className={passwordStyles.input} />
			<span className={passwordStyles.label}>{label}</span>
			<div className={passwordStyles.after}>
				{passwordVisible ?
					<Icon icon={['far', 'eye']} onClick={passwordInputChange} />
				:
					<Icon icon={['far', 'eye-slash']} onClick={passwordInputChange} />
				}
			</div>
		</div>
	);
}