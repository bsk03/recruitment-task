import { useRef} from 'react';
import DeleteIcon from '../../../public/icons/DeleteIcon';
import Move from '../../../public/icons/Move';
import useCustomizeObject from '../hooks/useCustomizeObject';

type ImageProps = {
	image: string | null;
	setImage: React.Dispatch<React.SetStateAction<string | null>>;
	containerRef: React.RefObject<HTMLDivElement>;
};

const ImageArea = (props: ImageProps) => {
	const imageRef = useRef<HTMLImageElement>(null);
	const {
		showEditBar,
		boxRef,
		moveButtonRef,
		resizeButtonRef,
		setShowEditBar,
	} = useCustomizeObject({
		containerRef: props.containerRef,
		imageRef: imageRef,
	});

	const deleteImage = () => {
		props.setImage(null);
	};

	

	return (
		<div
			className={`${
				showEditBar ? 'border-[2px] border-Primary' : ''
			} absolute top-[200px] select-none`}
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
					onClick={deleteImage}
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
			{props.image && (
				<img
					ref={imageRef}
					src={props.image}
					alt='Uploaded image'
					className='w-[200px] h-[200px] object-contain select-none'
				/>
			)}
		</div>
	);
};

export default ImageArea;
