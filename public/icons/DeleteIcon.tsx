type SvgProps ={
    height:string,
    width:string,
    color:string
}

const DeleteIcon = (props: SvgProps) => {
	return (
		<svg
			width={props.width}
			height={props.height}
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M23.7778 10.5451C23.4831 10.5451 23.2005 10.6601 22.9921 10.8646C22.7837 11.0692 22.6667 11.3467 22.6667 11.636V23.8437C22.6348 24.3953 22.3822 24.9123 21.9639 25.2819C21.5456 25.6515 20.9954 25.8439 20.4333 25.8171H11.5667C11.0046 25.8439 10.4544 25.6515 10.0361 25.2819C9.61781 24.9123 9.36521 24.3953 9.33333 23.8437V11.636C9.33333 11.3467 9.21627 11.0692 9.0079 10.8646C8.79952 10.6601 8.51691 10.5451 8.22222 10.5451C7.92754 10.5451 7.64492 10.6601 7.43655 10.8646C7.22817 11.0692 7.11111 11.3467 7.11111 11.636V23.8437C7.14283 24.9741 7.62954 26.0461 8.46464 26.8248C9.29975 27.6036 10.4152 28.0258 11.5667 27.9988H20.4333C21.5848 28.0258 22.7002 27.6036 23.5354 26.8248C24.3705 26.0461 24.8572 24.9741 24.8889 23.8437V11.636C24.8889 11.3467 24.7718 11.0692 24.5635 10.8646C24.3551 10.6601 24.0725 10.5451 23.7778 10.5451Z'
				fill={props.color}
			/>
			<path
				d='M24.8889 7.27256H20.4444V5.09085C20.4444 4.80154 20.3274 4.52408 20.119 4.3195C19.9106 4.11493 19.628 4 19.3333 4H12.6667C12.372 4 12.0894 4.11493 11.881 4.3195C11.6726 4.52408 11.5556 4.80154 11.5556 5.09085V7.27256H7.11111C6.81643 7.27256 6.53381 7.38749 6.32544 7.59207C6.11706 7.79664 6 8.0741 6 8.36341C6 8.65273 6.11706 8.93019 6.32544 9.13476C6.53381 9.33934 6.81643 9.45427 7.11111 9.45427H24.8889C25.1836 9.45427 25.4662 9.33934 25.6746 9.13476C25.8829 8.93019 26 8.65273 26 8.36341C26 8.0741 25.8829 7.79664 25.6746 7.59207C25.4662 7.38749 25.1836 7.27256 24.8889 7.27256ZM13.7778 7.27256V6.18171H18.2222V7.27256H13.7778Z'
				fill={props.color}
			/>
			<path
				d='M14.8889 21.4537V13.8177C14.8889 13.5284 14.7718 13.2509 14.5635 13.0463C14.3551 12.8418 14.0725 12.7268 13.7778 12.7268C13.4831 12.7268 13.2005 12.8418 12.9921 13.0463C12.7837 13.2509 12.6667 13.5284 12.6667 13.8177V21.4537C12.6667 21.743 12.7837 22.0204 12.9921 22.225C13.2005 22.4296 13.4831 22.5445 13.7778 22.5445C14.0725 22.5445 14.3551 22.4296 14.5635 22.225C14.7718 22.0204 14.8889 21.743 14.8889 21.4537Z'
				fill={props.color}
			/>
			<path
				d='M19.3333 21.4537V13.8177C19.3333 13.5284 19.2163 13.2509 19.0079 13.0463C18.7995 12.8418 18.5169 12.7268 18.2222 12.7268C17.9275 12.7268 17.6449 12.8418 17.4365 13.0463C17.2282 13.2509 17.1111 13.5284 17.1111 13.8177V21.4537C17.1111 21.743 17.2282 22.0204 17.4365 22.225C17.6449 22.4296 17.9275 22.5445 18.2222 22.5445C18.5169 22.5445 18.7995 22.4296 19.0079 22.225C19.2163 22.0204 19.3333 21.743 19.3333 21.4537Z'
				fill={props.color}
			/>
		</svg>
	);
};

export default DeleteIcon;
