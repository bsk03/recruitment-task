const COLORS = [
	{ id: 1, name: 'black', color: '#353535' },
	{ id: 2, name: 'white', color: '#FFFFFF' },
	{ id: 3, name: 'red', color: '#CF0000' },
	{ id: 4, name: 'blue', color: '#0055FF' },
	{ id: 5, name: 'green', color: '#00DA16' },
];

type ColorPaletteProps = {
	handleColorChange: (color: string) => void;
	selectedColor: string;
};

const ColorPalette = ({
	handleColorChange,
	selectedColor,
}: ColorPaletteProps) => {
	return (
		<div className='w-[136px] h-[24px] flex flex-row gap-[4px] justify-center absolute bottom-[-32px] left-0'>
			{COLORS.map((variant) => (
				<div
					key={variant.id}
					className={`h-[24px] w-[24px] flex justify-center items-center rounded-full ${
						variant.color === selectedColor && 'border-[2px] border-white'
					}`}
				>
					<div
						className={`h-[16px] w-[16px] rounded-full cursor-pointer`}
						title={variant.name}
						onClick={() => handleColorChange(variant.color)}
						style={{backgroundColor: variant.color}}
					/>
				</div>
			))}
		</div>
	);
};

export default ColorPalette;
