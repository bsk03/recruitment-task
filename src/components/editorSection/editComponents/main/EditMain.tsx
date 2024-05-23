import React, { useRef, useState } from 'react';
import TextIcon from '../../../../../public/icons/TextIcon';
import ImgIcon from '../../../../../public/icons/ImgIcon';
import BackgroundIcon from '../../../../../public/icons/BackgroundIcon';

interface Option {
  id: number;
  text: string;
  svg: JSX.Element;
}

type SetFileProps = {
	setFile:React.Dispatch<React.SetStateAction<string | null>>
  setImage:React.Dispatch<React.SetStateAction<string | null>>
  setShowText: React.Dispatch<React.SetStateAction<boolean>>;
}


const OPTIONS: Option[] = [
  {
    id: 1,
    text: 'Text',
    svg: <TextIcon height={'96'} width={'88'} color={'#676767'} />,
    
  },
  {
    id: 2,
    text: 'Image',
    svg: <ImgIcon height={'96'} width={'88'} color={'#676767'} />,
    
  },
  {
    id: 3,
    text: 'Background',
    svg: <BackgroundIcon height={'96'} width={'96'} color={'#676767'} />,
    
  },
];

const EditMain = (props:SetFileProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);

  // const [file, setFile] = useState<string | null>(null);

  const handleButtonClick = (id: number) => {
    if (id === 3 && inputFileRef.current) {
      inputFileRef.current.click();
    }else if(id === 2 && inputImageRef.current){
      inputImageRef.current.click();

    }else if(id===1){
      props.setShowText(true);
    }
  };

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      props.setFile(fileURL);
      console.log(fileURL);
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
      {OPTIONS.map((option) => (
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
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default EditMain;
