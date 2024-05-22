import DeleteIcon from '../../../public/icons/DeleteIcon';
import Move from '../../../public/icons/Move';
type ImageProps = {
	image: string | null;
    setImage:React.Dispatch<React.SetStateAction<string | null>>

};
const ImageArea = (props: ImageProps) => {
    const deleteImage = () => {
        props.setImage(null);
    }
	return (
		<div className='border-[2px] border-Primary absolute top-[380px] right-[275px]'>
			<div className='absolute top-[-13px] right-[-13px]'>
				<button className='h-[24px] w-[24px] rounded-full bg-white flex justify-center items-center' onClick={deleteImage}>
					<DeleteIcon height={'23'} width={'20'} color={'red'} />
				</button>
			</div>
			<div className='h-[24px] w-[24px] bg-Primary border-[4px] border-white rounded-full absolute bottom-[-13px] right-[-13px]' />
			<div className='h-[40px] w-[40px] bg-white rounded-full  flex justify-center items-center absolute top-[-20px] left-[-20px]'>
				<Move height={'31'} width={'31'} color={'rgba(114, 9, 183, 1)'} />
			</div>
			{props.image !== null && <img src={props.image} alt='Uploaded image' />}
		</div>
	);
};

export default ImageArea;
