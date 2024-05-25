 
type ButtonProps ={
    value: string;
}

const Button = (props : ButtonProps) => {
	return (
		<button className='py-[8px] px-[32px] bg-Primary text-white text-[15px] rounded-[5px] font-semibold'>
			{props.value}
		</button>
	);
};

export default Button;
