import { useState } from 'react'
import { CardForm as Card } from '../../components/Cards';
import { Input, PasswordInput } from '../../components/Inputs';
import styles from './styles.module.css';

export const Login = () => {

	const [cardType, setCardType] = useState('login');
	const TypeCardChange = () => {
		if (cardType == 'login') {
			setCardType('register');
		} else {
			setCardType('login');
		}
	}

	return (
		<div className={styles.bg}>
			<div className={styles.center}>
				{cardType == 'login' ?
					<Card iconType='fas' icon='user'>
						<Input name='email' icon='envelope' iconType='far' type='email' label='E-mail'/>
						<PasswordInput name='password' label='Senha'/>
						<input type="submit" value="Entrar" className={styles.btn} />
						<a className={styles.link} onClick={TypeCardChange}>Não tenho uma conta ainda</a>
					</Card>
				:
					<Card iconType='fas' icon='address-card'>
						<Input name='name' icon='user' iconType='fas' type='text' label='Nome e Sobrenome' />
						<Input name='email' icon='envelope' iconType='far' type='email' label='E-mail'/>
						<Input name='cpforcnpj' icon='person' iconType='fas' type='number' label='CPF ou CNPJ'/>
						<PasswordInput name='password' label='Senha'/>
						<PasswordInput name='password_Confirmed' label='Confirmação de Senha'/>
						<input type="submit" value="Cadastrar" className={styles.btn} />
						<a className={styles.link} onClick={TypeCardChange}>Já tenho uma conta</a>
					</Card>
				}
			</div>
		</div>
	);
}