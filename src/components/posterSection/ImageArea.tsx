import { useEffect, useRef } from 'react';
import DeleteIcon from '../../../public/icons/DeleteIcon';
import Move from '../../../public/icons/Move';

type ImageProps = {
	image: string | null;
	setImage: React.Dispatch<React.SetStateAction<string | null>>;
	containerRef: React.RefObject<HTMLDivElement>;
};

const ImageArea = (props: ImageProps) => {
	const deleteImage = () => {
		props.setImage(null);
	};

	const boxRef = useRef<HTMLDivElement>(null);
	const moveButtonRef = useRef<HTMLDivElement>(null);
	const resizeButtonRef = useRef<HTMLDivElement>(null);
	const isMoving = useRef<boolean>(false);
	const isResizing = useRef<boolean>(false);

	const cords = useRef<{
		startX: number;
		startY: number;
		lastX: number;
		lastY: number;
		startWidth: number;
		startHeight: number;
	}>({
		startX: 220,
		startY: 220,
		lastX: 0,
		lastY: 0,
		startWidth: 0,
		startHeight: 0,
	});

	useEffect(() => {
		if (
			!boxRef.current ||
			!props.containerRef.current ||
			!moveButtonRef.current ||
			!resizeButtonRef.current
		)
			return;
		console.log('wchodze');
		const container = props.containerRef.current;
		const box = boxRef.current;
		const moveButton = moveButtonRef.current;
		const resizeButton = resizeButtonRef.current;

		const containerRect = container.getBoundingClientRect();

		// Calculate initial position to center the image
		const initialX = (containerRect.width - box.offsetWidth) / 2;
		const initialY = (containerRect.height - box.offsetHeight) / 2;

		box.style.top = `${initialY}px`;
		box.style.left = `${initialX}px`;

		cords.current.lastX = initialX;
		cords.current.lastY = initialY;

		const onMouseDownMove = (e: MouseEvent) => {
			e.stopPropagation();
			isMoving.current = true;
			cords.current.startX = e.clientX;
			cords.current.startY = e.clientY;
		};

		const onMouseDownResize = (e: MouseEvent) => {
			e.stopPropagation();
			isResizing.current = true;
			cords.current.startX = e.clientX;
			cords.current.startY = e.clientY;
			cords.current.startWidth = box.clientWidth;
			cords.current.startHeight = box.clientHeight;
		};

		const onMouseUp = () => {
			isMoving.current = false;
			isResizing.current = false;
			cords.current.lastX = box.offsetLeft;
			cords.current.lastY = box.offsetTop;
			cords.current.startWidth = box.clientWidth;
			cords.current.startHeight = box.clientHeight;
		};

		const onMouseMove = (e: MouseEvent) => {
			if (isMoving.current) {
				const nextX = e.clientX - cords.current.startX + cords.current.lastX;
				const nextY = e.clientY - cords.current.startY + cords.current.lastY;
console.log('x ' +nextX);
console.log('y ' + nextY);
				const minX = 0;
				const minY = 0;
				const maxX = containerRect.width - box.offsetWidth;
				const maxY = containerRect.height - box.offsetHeight;

				const clampedX = Math.max(minX, Math.min(nextX, maxX));
				const clampedY = Math.max(minY, Math.min(nextY, maxY));
				console.log('clampedX ' + clampedX);
				console.log('clampedY ' + clampedY);
				console.log('moving');
				box.style.top = `${clampedY}px`;
				box.style.left = `${clampedX}px`;
			}

			if (isResizing.current) {
				const newWidth =
					cords.current.startWidth + (e.clientX - cords.current.startX);
				const newHeight =
					cords.current.startHeight + (e.clientY - cords.current.startY);

				const clampedWidth = Math.max(
					50,
					Math.min(newWidth, containerRect.width - box.offsetLeft)
				);
				const clampedHeight = Math.max(
					50,
					Math.min(newHeight, containerRect.height - box.offsetTop)
				);

				box.style.width = `${clampedWidth}px`;
				box.style.height = `${clampedHeight}px`;
			}
		};

		moveButton.addEventListener('mousedown', onMouseDownMove);
		resizeButton.addEventListener('mousedown', onMouseDownResize);
		document.addEventListener('mouseup', onMouseUp);
		document.addEventListener('mousemove', onMouseMove);

		return () => {
			moveButton.removeEventListener('mousedown', onMouseDownMove);
			resizeButton.removeEventListener('mousedown', onMouseDownResize);
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<div className='border-[2px] border-Primary absolute' ref={boxRef}>
			<div className='absolute top-[-13px] right-[-13px]'>
				<button
					className='h-[24px] w-[24px] rounded-full bg-white flex justify-center items-center'
					onClick={deleteImage}
				>
					<DeleteIcon height={'23'} width={'20'} color={'red'} />
				</button>
			</div>
			<div
				className='h-[24px] w-[24px] bg-Primary border-[4px] border-white rounded-full absolute bottom-[-13px] right-[-13px] cursor-nwse-resize'
				ref={resizeButtonRef}
			/>
			<div
				className='h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center absolute top-[-20px] left-[-20px] cursor-grab'
				ref={moveButtonRef}
			>
				<Move height={'31'} width={'31'} color={'rgba(114, 9, 183, 1)'} />
			</div>
			{props.image !== null && (
				<img
					src={props.image}
					alt='Uploaded image'
					className='w-full h-full object-cover'
				/>
			)}
		</div>
	);
};

export default ImageArea;
