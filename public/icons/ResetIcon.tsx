type SvgProps ={
    height:string,
    width:string,
    color:string
}


const ResetIcon = (props: SvgProps) => {
	return (
		<svg
			width={props.height}
			height={props.width}
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M16.8872 5C12.5039 5 8.63554 7.50344 6.83422 11.2985L5.58119 8.72324L4 9.47707L6.60226 14.8236L12.0039 12.2478L11.2422 10.683L8.42823 12.0245C9.94833 8.83762 13.2015 6.73711 16.8872 6.73711C22.0474 6.73711 26.2454 10.8925 26.2454 16C26.2454 21.1075 22.0474 25.263 16.8872 25.263C13.8487 25.263 10.9877 23.7938 9.23425 21.3329L7.79979 22.3343C9.88232 25.2558 13.2793 27 16.8872 27C23.0146 27 28 22.0654 28 16C28 9.93455 23.0147 5 16.8872 5Z'
				fill={props.color}
			/>
		</svg>
	);
};

export default ResetIcon;
