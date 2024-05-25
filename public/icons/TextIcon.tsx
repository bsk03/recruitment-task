
type SvgProps ={
    height:string,
    width:string,
    color:string
}

const TextIcon = (props: SvgProps) => {
	return (
		<svg
			width={props.width}
			height={props.height}
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10.3305 13.2404H11.7367V12.0625H15.2969V20.071H14.0783V21.4773H17.9217V20.071H16.7031V12.0625H20.2633V13.2404H21.6695V10.6562H10.3305V13.2404Z'
				fill={props.color}
			/>
			<path
				d='M26.3242 22.7971V9.20289C27.3066 8.79766 28 7.83006 28 6.70314C28 5.21261 26.7874 4 25.2969 4C24.1699 4 23.2023 4.69342 22.7971 5.67578H9.20289C8.79766 4.69342 7.83006 4 6.70314 4C5.21261 4 4 5.21261 4 6.70314C4 7.83006 4.69342 8.7977 5.67578 9.20294V22.7971C4.69342 23.2023 4 24.1699 4 25.2969C4 26.7874 5.21261 28 6.70314 28C7.83006 28 8.79766 27.3066 9.20289 26.3242H22.7971C23.2023 27.3066 24.1699 28 25.2969 28C26.7874 28 28 26.7874 28 25.2969C28 24.1699 27.3066 23.2023 26.3242 22.7971ZM22.6209 24.918H9.37914C9.2117 23.7302 8.2698 22.7882 7.08203 22.6209V9.37914C8.2698 9.21175 9.2117 8.2698 9.37914 7.08203H22.6209C22.7883 8.26984 23.7302 9.21175 24.918 9.37914V22.6208C23.7302 22.7882 22.7883 23.7302 22.6209 24.918ZM25.2969 5.40625C26.012 5.40625 26.5938 5.98802 26.5938 6.70314C26.5938 7.41827 26.012 8.00003 25.2969 8.00003C24.5818 8.00003 24 7.41827 24 6.70314C24 5.98802 24.5818 5.40625 25.2969 5.40625ZM6.70314 5.40625C7.41822 5.40625 7.99998 5.98802 7.99998 6.70314C7.99998 7.41827 7.41822 8.00003 6.70314 8.00003C5.98802 7.99998 5.40625 7.41822 5.40625 6.70314C5.40625 5.98802 5.98802 5.40625 6.70314 5.40625ZM6.70314 26.5938C5.98802 26.5938 5.40625 26.012 5.40625 25.2969C5.40625 24.5817 5.98802 24 6.70314 24C7.41822 24 7.99998 24.5817 7.99998 25.2969C7.99998 26.012 7.41822 26.5938 6.70314 26.5938ZM25.2969 26.5938C24.5818 26.5938 24 26.012 24 25.2969C24 24.5817 24.5818 24 25.2969 24C26.012 24 26.5938 24.5817 26.5938 25.2969C26.5938 26.012 26.012 26.5938 25.2969 26.5938Z'
				fill={props.color}
			/>
		</svg>
	);
};

export default TextIcon;
