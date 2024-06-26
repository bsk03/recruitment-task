import React, { useRef } from 'react';
import { Option, OPTIONS } from './MenuOptions'; 

type SetFileProps = {
  setFile: React.Dispatch<React.SetStateAction<string | null>>;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  setShowText: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditMain = (props: SetFileProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (id: number) => {
    if (id === 3 && inputFileRef.current) {
      inputFileRef.current.click();
    } else if (id === 2 && inputImageRef.current) {
      inputImageRef.current.click();
    } else if (id === 1) {
      props.setShowText(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      props.setFile(fileURL);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      props.setImage(imgURL);
    }
  };

  return (
    <div className='w-[759px] h-[609px] grid grid-cols-2 gap-x-[29px] gap-y-[32px] content-center'>
      {OPTIONS.map((option: Option) => (
        <button
          key={option.id}
          onClick={() => handleButtonClick(option.id)}
          className='w-[365px] h-[256px] bg-white97 rounded-[10px] p-[12px] flex flex-col justify-center items-center hover:bg-Black25 transition-[0.4s] hover:cursor-pointer focus:border-[4px] focus:border-Primary50'
        >
          <div className='h-[128px] w-[128px] flex justify-center items-center'>
            {option.svg}
          </div>
          <p className='text-[18px] mt-[25px] text-Black100'>{option.text}</p>
          {option.id === 3 && (
            <input
              type="file"
              name="backgroundImage"
              id="file"
              className='hidden'
              ref={inputFileRef}
              onChange={handleChange}
              onClick={(e) => (e.currentTarget.value = '')}
            />
          )}
          {option.id === 2 && (
            <input
              type="file"
              name="image"
              id="image"
              className='hidden'
              ref={inputImageRef}
              onChange={handleImageChange}
              onClick={(e) => (e.currentTarget.value = '')}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default EditMain;
