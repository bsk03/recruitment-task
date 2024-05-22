import React from 'react';
type SvgProps = {
	height: string;
	width: string;
	color: string;
};

const AlertIcon = (props: SvgProps) => {
	return (
		<svg
			width={props.width}
			height={props.height}
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M27.6174 22.6751L18.444 6.44164C17.9339 5.53897 17.0203 5 16 5C14.9797 5 14.0661 5.53897 13.556 6.44164L4.3826 22.675C3.87247 23.5778 3.87247 24.6557 4.3826 25.5584C4.89274 26.4611 5.80633 27 6.82661 27H25.1733C26.1936 27 27.1072 26.461 27.6174 25.5584C28.1275 24.6557 28.1275 23.5778 27.6174 22.6751ZM26.3997 24.8401C26.1437 25.2931 25.6853 25.5635 25.1733 25.5635H6.82661C6.31465 25.5635 5.85621 25.2931 5.60027 24.8401C5.34434 24.3872 5.34434 23.8464 5.60027 23.3934L14.7737 7.15996C15.0297 6.707 15.4881 6.43661 16 6.43661C16.5119 6.43661 16.9704 6.707 17.2263 7.15996L26.3997 23.3934C26.6556 23.8464 26.6556 24.3872 26.3997 24.8401Z'
				fill={props.color}
			/>
			<path d='M16.703 12.1691H15.2969V19.352H16.703V12.1691Z' fill={props.color} />
			<path
				d='M16 20.7887C15.4831 20.7887 15.0626 21.2183 15.0626 21.7464C15.0626 22.2745 15.4831 22.7042 16 22.7042C16.5168 22.7042 16.9374 22.2745 16.9374 21.7464C16.9374 21.2183 16.5169 20.7887 16 20.7887Z'
				fill={props.color}
			/>
		</svg>
	);
};

export default AlertIcon;
