type SvgProps = {
	height: string;
	width: string;
	color: string;
};

const Icon = (props: SvgProps) => {
	return (
		<svg
			width={props.width}
			height={props.height}
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M26 6H6V26H26V6ZM4 4V28H28V4H4Z'
				fill={props.color}
			/>
			<path d='M10 17.4202H10.8212V14.0657H10V17.4202Z' fill={props.color} />
			<path
				d='M13.1673 17.4953C13.6358 17.4953 13.9745 17.3639 14.2297 17.1153C14.457 16.8948 14.6055 16.5898 14.6287 16.2567H13.8075C13.7704 16.5804 13.5291 16.815 13.1626 16.815C12.6709 16.815 12.3647 16.3693 12.3647 15.7547C12.3647 15.1448 12.6198 14.6897 13.158 14.6897C13.5106 14.6897 13.7425 14.9196 13.7843 15.2198H14.6055C14.5637 14.8445 14.3967 14.5161 14.109 14.2956C13.8724 14.1126 13.5477 14 13.1626 14C12.1745 14 11.5296 14.7554 11.5296 15.7547C11.5296 16.7587 12.193 17.4953 13.1673 17.4953Z'
				fill={props.color}
			/>
			<path
				d='M16.816 16.8244C16.2825 16.8244 16.0088 16.3599 16.0088 15.75C16.0088 15.1401 16.2825 14.6709 16.816 14.6709C17.3542 14.6709 17.6186 15.1401 17.6186 15.75C17.6186 16.3599 17.3542 16.8244 16.816 16.8244ZM16.8114 17.5C17.8181 17.5 18.4537 16.754 18.4537 15.75C18.4537 14.746 17.8181 14 16.8114 14C15.8093 14 15.1737 14.746 15.1737 15.75C15.1737 16.754 15.8093 17.5 16.8114 17.5Z'
				fill={props.color}
			/>
			<path
				d='M19.1607 17.4202H19.9633V15.8579C19.9633 15.7406 19.9541 15.309 19.9541 15.309H19.9633C19.9633 15.309 20.1443 15.6702 20.1999 15.7594L21.1742 17.4202H22V14.0657H21.1974V15.6562C21.1974 15.7735 21.2067 16.1769 21.2067 16.1769H21.1974C21.1974 16.1769 21.0211 15.8438 20.9701 15.75L19.9865 14.0657H19.1607V17.4202Z'
				fill={props.color}
			/>
		</svg>
	);
};

export default Icon;