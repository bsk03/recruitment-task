import React, { useEffect, useRef, useState } from 'react';

const useCustomizeObject = ({
	containerRef,
	imageRef,
}: {
	containerRef: React.RefObject<HTMLDivElement>;
	imageRef?: React.RefObject<HTMLImageElement>;
}) => {
	const [showEditBar, setShowEditBar] = useState(false);
	const boxRef = useRef<HTMLDivElement>(null);
	const textareaRef = useRef<HTMLDivElement>(null);
	const moveButtonRef = useRef<HTMLDivElement>(null);
	const resizeButtonRef = useRef<HTMLDivElement>(null);

	const isMoving = useRef(false);
	const isResizing = useRef(false);

	const cords = useRef({
		startX: 0,
		startY: 0,
		lastX: 0,
		lastY: 0,
		startWidth: 0,
		startHeight: 0,
	});

	useEffect(() => {
		const image = imageRef?.current;
		const container = containerRef.current;
		const box = boxRef.current;
		const moveButton = moveButtonRef.current;
		const resizeButton = resizeButtonRef.current;

		if (!container || !box || !moveButton || !resizeButton) return;

		const containerRect = container.getBoundingClientRect();
		const initialX = (containerRect.width - box.offsetWidth) / 2;
		const initialY =
			(containerRect.height - box.offsetHeight) / (!image ? 4 : 2);

		box.style.top = `${initialY}px`;
		box.style.left = `${initialX}px`;
		cords.current.lastX = initialX;
		cords.current.lastY = initialY;

		const handleMouseDownMove = (e: MouseEvent) => {
			e.stopPropagation();
			isMoving.current = true;
			cords.current.startX = e.clientX;
			cords.current.startY = e.clientY;
		};

		const handleMouseDownResize = (e: MouseEvent) => {
			e.stopPropagation();
			isResizing.current = true;
			cords.current.startX = e.clientX;
			cords.current.startY = e.clientY;
			cords.current.startWidth = box.clientWidth;
			cords.current.startHeight = box.clientHeight;
		};

		const handleMouseUp = () => {
			isMoving.current = false;
			isResizing.current = false;
			cords.current.lastX = box.offsetLeft;
			cords.current.lastY = box.offsetTop;
			cords.current.startWidth = box.clientWidth;
			cords.current.startHeight = box.clientHeight;
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (isMoving.current) {
				const nextX = e.clientX - cords.current.startX + cords.current.lastX;
				const nextY = e.clientY - cords.current.startY + cords.current.lastY;
				const maxX = containerRect.width - box.offsetWidth;
				const maxY = containerRect.height - box.offsetHeight;

				box.style.top = `${Math.max(0, Math.min(nextY, maxY))}px`;
				box.style.left = `${Math.max(0, Math.min(nextX, maxX))}px`;
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

					if (image) {
						image.style.width = `${clampedWidth}px`;
						image.style.height = `${clampedHeight}px`;
					} else {
						box.style.width = `${clampedWidth}px`;
						box.style.height = `${clampedHeight}px`;
						if (textareaRef.current) {
							textareaRef.current.style.width = '100%';
							textareaRef.current.style.height = '100%';
						}
					}
				}
			
		};

		const handleClickOutside = (e: MouseEvent) => {
			if (box && !box.contains(e.target as Node)) {
				setShowEditBar(false);
			}
		};

		moveButton.addEventListener('mousedown', handleMouseDownMove);
		resizeButton.addEventListener('mousedown', handleMouseDownResize);
		document.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			moveButton.removeEventListener('mousedown', handleMouseDownMove);
			resizeButton.removeEventListener('mousedown', handleMouseDownResize);
			document.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [containerRef]);
	return {
		textareaRef,
		showEditBar,
		boxRef,
		setShowEditBar,
		resizeButtonRef,
		moveButtonRef,
	};
};

export default useCustomizeObject;