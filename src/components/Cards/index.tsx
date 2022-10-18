import { ReactNode } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import loginStyles from './form.module.css';

type Props = {
	icon: IconName;
	iconType: IconPrefix;
	children: ReactNode;
}

export const CardForm = ( { icon, iconType, children }: Props ) => {
	return (
		<div className={loginStyles.card}>
			<div className={loginStyles.cardHeader}>
				<div className={loginStyles.icon}>
					<Icon icon={[iconType, icon]} fontSize={40}/>
				</div>
			</div>
			<div className={loginStyles.cardBody}>
				{children}
			</div>
		</div>
	);
}