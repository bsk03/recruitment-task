import { useEffect,useState } from 'react';
import DeleteIcon from '../../../public/icons/DeleteIcon';
import Move from '../../../public/icons/Move';
import ColorPalette from './ColorPalette';
import useCustomizeObject from '../hooks/useCustomizeObject';

type TextAreaProps = {
	containerRef: React.RefObject<HTMLDivElement>;
	setShowText: React.Dispatch<React.SetStateAction<boolean>>;
};

const TextAreaSection = (props: TextAreaProps) => {
	const {
		textareaRef,
		showEditBar,
		boxRef,
		setShowEditBar,
		resizeButtonRef,
		moveButtonRef,
	} = useCustomizeObject({ containerRef: props.containerRef });

	const [selectedColor, setSelectedColor] = useState<string>('#353535');
	const [TextareaIsEmpty, setTextareaIsEmpty] = useState(true);

	useEffect(() => {
		const handleInput = () => {
			if (textareaRef.current) {
				setTextareaIsEmpty(textareaRef.current.textContent?.trim() === '');
			}
		};

		if (textareaRef.current) {
			textareaRef.current.addEventListener('input', handleInput);
		}

		return () => {
			if (textareaRef.current) {
				textareaRef.current.removeEventListener('input', handleInput);
			}
		};
	}, []);

	const deleteText = () => {
		if (textareaRef.current) {
			textareaRef.current.textContent = '';
			props.setShowText(false);
			setTextareaIsEmpty(true);
		}
	};

	const handleColorChange = (color: string) => {
		setSelectedColor(color);
		if (textareaRef.current) {
			textareaRef.current.style.color = color;
		}
	};

	return (
		<div
			className={`absolute top-[200px] left-[220px] bg-transparent ${
				showEditBar && 'border-[2px] border-Primary'
			} px-[24px] py-[12px]`}
			ref={boxRef}
			onMouseDown={() => setShowEditBar(true)}
		>
			<div
				className={`${
					!showEditBar ? 'hidden' : ''
				} absolute top-[-13px] right-[-13px]`}
			>
				<button
					className='h-[24px] w-[24px] rounded-full bg-white flex justify-center items-center'
					onClick={deleteText}
				>
					<DeleteIcon height={'18'} width={'18'} color={'red'} />
				</button>
			</div>
			<div
				className={`${
					!showEditBar ? 'hidden' : ''
				} h-[24px] w-[24px] bg-Primary border-[4px] border-white rounded-full absolute bottom-[-13px] right-[-13px] cursor-nwse-resize`}
				ref={resizeButtonRef}
			/>
			<div
				className={`${
					!showEditBar ? 'hidden' : ''
				} h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center absolute top-[-20px] left-[-20px] cursor-grab`}
				ref={moveButtonRef}
			>
				<Move height={'32'} width={'32'} color={'rgba(114, 9, 183, 1)'} />
			</div>
			<div
				className={`w-[302px] h-[96px] bg-transparent text-[32px] font-bold text-center outline-none overflow-hidden resize-none ${
					TextareaIsEmpty
						? 'after:content-["Type_here_your_text"] after:opacity-50 after:text-Black100'
						: ''
				}`}
				contentEditable='true'
				style={{ color: selectedColor }}
				ref={textareaRef}
			></div>

			<span className={`${!showEditBar ? 'hidden' : ''}`}>
				<ColorPalette
					handleColorChange={handleColorChange}
					selectedColor={selectedColor}
				/>
			</span>
		</div>
	);
};

export default TextAreaSection;
