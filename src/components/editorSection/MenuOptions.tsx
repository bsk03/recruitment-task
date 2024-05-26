
import {TextIcon,ImgIcon,BackgroundIcon} from '../icons';

export type Option = {
	id: number;
	text: string;
	svg: JSX.Element;
};

export const OPTIONS: Option[] = [
	{
		id: 1,
		text: 'Text',
		svg: <TextIcon height={'128'} width={'8128'} color={'#676767'} />,
	},
	{
		id: 2,
		text: 'Image',
		svg: <ImgIcon height={'128'} width={'128'} color={'#676767'} />,
	},
	{
		id: 3,
		text: 'Background',
		svg: <BackgroundIcon height={'128'} width={'128'} color={'#676767'} />,
	},
];
