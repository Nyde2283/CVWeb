import React from 'react';

const titleClass = 'legendtitle';
const contentClass = 'legendcontent';

export const legendeContent = [
	[
		<span className={titleClass} key={'span0'}>
			générateur de cartes pour un jeu
		</span>,
		<>
			<p className={contentClass} key={'p0.0'}>
				Ce programme sert à générer des cartes de jeu du genre rogue like avec
				un level design basé sur des salles reliées entre elles par des
				couloirs.
			</p>
			<p className={contentClass} key={'p0.1'}>
				L’algorithme de génération est basé sur la{' '}
				<a href="https://fr.wikipedia.org/wiki/Partition_binaire_de_l%27espace">
					partition binaire de l’espace
				</a>{' '}
				(BSP) et est implémentée à l’aide d’un arbre binaire de recherche pour
				découper le plan en section. Ensuite, à l’intérieur de celle-ci, des
				salles de tailles aléatoires sont générées puis reliées par des
				couloirs.
			</p>
			<p className={contentClass} key={'p0.2'}>
				L’ensemble du jeu s’inspire de{' '}
				<a href="https://www.devolverdigital.com/games/enter-the-gungeon">
					Enter The Gungeon
				</a>
				.
			</p>
		</>,
	],
	[
		<span className={titleClass} key={'span1'}>
			lorem ipsum
		</span>,
		<>
			<p className={contentClass} key={'p1.0'}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci
				erat, imperdiet non varius at, scelerisque ut ligula. Pellentesque
				molestie eros at luctus ultrices. Suspendisse at sapien ac eros
				scelerisque vehicula vitae pharetra felis.
			</p>
			<p className={contentClass} key={'p1.1'}>
				Morbi sodales ipsum eget lobortis pulvinar. Curabitur lobortis est nunc,
				a fermentum neque fermentum a. Mauris augue arcu, pharetra scelerisque
				scelerisque at, auctor eget tellus. Vestibulum felis urna, ornare non
				massa dictum, aliquet accumsan ex. Maecenas dignissim odio a tempus
				varius.
			</p>
			<p className={contentClass} key={'p1.2'}>
				Nunc venenatis, felis ut auctor gravida, ante dui vehicula lorem, et
				semper purus nulla et purus. Mauris eleifend orci at nulla pretium
				tincidunt. Ut aliquet.
			</p>
		</>,
	],
];
