import { Link } from 'react-router-dom';

export const Erro404 = () => {
	return (
		<div style={{
			height: "100vh",
			background: "#111826",
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<h1 style={{
				color: 'white'
			}}>Erro 404</h1>
			<Link to='/' style={{
				color: 'purple',
				textDecoration: 'none'
			}} >Voltar para a tela inicial</Link>
		</div>
	);
};