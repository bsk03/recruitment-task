import { useEffect, useRef, useState } from 'react';
import DeleteIcon from '../../../public/icons/DeleteIcon';
import Move from '../../../public/icons/Move';
import ColorPalette from './ColorPalette';

type TextAreaProps = {
  containerRef: React.RefObject<HTMLDivElement>;
  setShowText: React.Dispatch<React.SetStateAction<boolean>>
};

const TextAreaSection = (props: TextAreaProps) => {
  const [showEditBar, setShowEditBar] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('#353535');
  const boxRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const moveButtonRef = useRef<HTMLDivElement>(null);
  const resizeButtonRef = useRef<HTMLDivElement>(null);

  const isMoving = useRef(false);
  const isResizing = useRef(false);
console.log(selectedColor);
  const cords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    startWidth: 0,
    startHeight: 0,
  });

  useEffect(() => {
    const container = props.containerRef.current;
    const box = boxRef.current;
    const moveButton = moveButtonRef.current;
    const resizeButton = resizeButtonRef.current;

    if (!container || !box || !moveButton || !resizeButton) return;

    const containerRect = container.getBoundingClientRect();
    const initialX = (containerRect.width - box.offsetWidth) / 2;
    const initialY = (containerRect.height - box.offsetHeight) / 4;

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
        const clampedWidth = Math.max(50, newWidth);
        const clampedHeight = Math.max(50, newHeight);

        box.style.width = `${clampedWidth}px`;
        box.style.height = `${clampedHeight}px`;
        if (textareaRef.current) {
          textareaRef.current.style.width = '100%';
          textareaRef.current.style.height = '100%';
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
  }, []);

  const deleteText = () => {
    if (textareaRef.current) {
      textareaRef.current.value = '';
      props.setShowText(false)
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
          <DeleteIcon height={'23'} width={'20'} color={'red'} />
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
        <Move height={'31'} width={'31'} color={'rgba(114, 9, 183, 1)'} />
      </div>
      <textarea
        className='w-[302px] h-[96px] bg-transparent text-[32px] font-bold text-center outline-none overflow-auto resize-none overflow-hidden'
        name='customText'
        id='customText'
        placeholder='Type your text here'
        ref={textareaRef}
        style={{ color: selectedColor }}
      ></textarea>
      <span className={`${!showEditBar ? 'hidden' : ''}`}>
        <ColorPalette handleColorChange={handleColorChange} selectedColor={selectedColor} />
      </span>
    </div>
  );
};

export default TextAreaSection;
