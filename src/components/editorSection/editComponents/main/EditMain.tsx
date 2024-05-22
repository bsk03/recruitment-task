import React from 'react';
import TextIcon from '../../../../../public/icons/TextIcon';
import ImgIcon from '../../../../../public/icons/ImgIcon';
import BackgroundIcon from '../../../../../public/icons/BackgroundIcon';

const OPTIONS = [
  { id: 1, text: 'Text', svg: <TextIcon height={'96'} width={'88'} color={'#676767'}/> },
  { id: 2, text: 'Image', svg: <ImgIcon height={'96'} width={'88'} color={'#676767'}/> },
  { id: 3, text: 'Background', svg: <BackgroundIcon height={'96'} width={'96'} color={'#676767'}/> },
];

const EditMain = () => {
  return (
    <div className='w-[759px] h-[609px] grid grid-cols-2 gap-x-[29px] gap-y-[32px] content-center'>
      {OPTIONS.map((option) => (
        <div key={option.id} className='w-[365px] h-[256px] bg-white97 rounded-[10px] p-[12px] flex flex-col justify-center items-center'>
          <div className='h-[128px] w-[128px] flex justify-center items-center'>
            {option.svg}
          </div>
          <p className='text-[18px] mt-[25px] text-Black100'>{option.text}</p>
        </div>
      ))}
    </div>
  );
};

export default EditMain;
