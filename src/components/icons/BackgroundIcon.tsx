
type SvgProps ={
    height:string,
    width:string,
    color:string
}


const BackgroundIcon = (props: SvgProps) => {
	return (
		<svg
			width={props.width}
			height={props.height}
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4.2533 8.4096C4.17304 8.3303 4.10933 8.23596 4.06586 8.13201C4.02238 8.02806 4 7.91657 4 7.80396C4 7.69135 4.02238 7.57985 4.06586 7.4759C4.10933 7.37195 4.17304 7.27761 4.2533 7.19831L7.14764 4.31508C7.30889 4.15446 7.52759 4.06422 7.75563 4.06422C7.86854 4.06422 7.98035 4.08637 8.08467 4.12942C8.18898 4.17246 8.28377 4.23555 8.36361 4.31508C8.44345 4.39462 8.50679 4.48904 8.55 4.59296C8.59321 4.69688 8.61545 4.80825 8.61545 4.92073C8.61545 5.03321 8.59321 5.14459 8.55 5.24851C8.50679 5.35242 8.44345 5.44684 8.36361 5.52638L5.46926 8.4096C5.38966 8.48956 5.29495 8.55302 5.1906 8.59632C5.08625 8.63963 4.97432 8.66193 4.86128 8.66193C4.74824 8.66193 4.63631 8.63963 4.53196 8.59632C4.42761 8.55302 4.3329 8.48956 4.2533 8.4096ZM4.86128 13.451C4.97398 13.4516 5.08569 13.4301 5.19003 13.3877C5.29436 13.3452 5.38925 13.2827 5.46926 13.2036L13.1761 5.52638C13.2559 5.44684 13.3193 5.35242 13.3625 5.24851C13.4057 5.14459 13.4279 5.03321 13.4279 4.92073C13.4279 4.80825 13.4057 4.69688 13.3625 4.59296C13.3193 4.48904 13.2559 4.39462 13.1761 4.31508C13.0963 4.23555 13.0015 4.17246 12.8972 4.12942C12.7928 4.08637 12.681 4.06422 12.5681 4.06422C12.3401 4.06422 12.1214 4.15446 11.9601 4.31508L4.2533 11.9923C4.17304 12.0716 4.10933 12.166 4.06586 12.2699C4.02238 12.3739 4 12.4853 4 12.598C4 12.7106 4.02238 12.8221 4.06586 12.926C4.10933 13.03 4.17304 13.1243 4.2533 13.2036C4.33331 13.2827 4.4282 13.3452 4.53254 13.3877C4.63687 13.4301 4.74858 13.4516 4.86128 13.451ZM4.86128 18.2791C4.97398 18.2798 5.08569 18.2582 5.19003 18.2158C5.29436 18.1733 5.38925 18.1108 5.46926 18.0317L18.04 5.52638C18.1352 5.45259 18.2137 5.35959 18.2704 5.25347C18.327 5.14735 18.3605 5.0305 18.3686 4.91059C18.3768 4.79067 18.3594 4.6704 18.3176 4.55765C18.2758 4.44489 18.2106 4.34221 18.1262 4.25632C18.0418 4.17043 17.9401 4.10328 17.8279 4.05926C17.7156 4.01525 17.5953 3.99536 17.4747 4.00091C17.3542 4.00646 17.2362 4.03731 17.1285 4.09146C17.0208 4.1456 16.9258 4.22181 16.8497 4.31508L4.2533 16.8631C4.17304 16.9424 4.10933 17.0367 4.06586 17.1407C4.02238 17.2446 4 17.3561 4 17.4687C4 17.5813 4.02238 17.6928 4.06586 17.7968C4.10933 17.9007 4.17304 17.9951 4.2533 18.0744C4.41901 18.2247 4.63729 18.3043 4.86128 18.2962V18.2791ZM4.86128 23.1072C4.97398 23.1079 5.08569 23.0864 5.19003 23.0439C5.29436 23.0015 5.38925 22.9389 5.46926 22.8598L22.8867 5.52638C23.048 5.36575 23.1386 5.14789 23.1386 4.92073C23.1386 4.69357 23.048 4.47571 22.8867 4.31508C22.7255 4.15446 22.5068 4.06422 22.2787 4.06422C22.0507 4.06422 21.832 4.15446 21.6708 4.31508L4.2533 21.6656C4.17304 21.7449 4.10933 21.8393 4.06586 21.9432C4.02238 22.0472 4 22.1586 4 22.2713C4 22.3839 4.02238 22.4954 4.06586 22.5993C4.10933 22.7033 4.17304 22.7976 4.2533 22.8769C4.33331 22.956 4.4282 23.0185 4.53254 23.061C4.63687 23.1034 4.74858 23.1249 4.86128 23.1243V23.1072ZM27.7335 4.34068C27.6539 4.26072 27.5592 4.19726 27.4548 4.15396C27.3505 4.11065 27.2385 4.08835 27.1255 4.08835C27.0124 4.08835 26.9005 4.11065 26.7962 4.15396C26.6918 4.19726 26.5971 4.26072 26.5175 4.34068L4.2533 26.5193C4.17304 26.5986 4.10933 26.693 4.06586 26.7969C4.02238 26.9009 4 27.0124 4 27.125C4 27.2376 4.02238 27.3491 4.06586 27.453C4.10933 27.557 4.17304 27.6513 4.2533 27.7306C4.3329 27.8106 4.42761 27.874 4.53196 27.9173C4.63631 27.9606 4.74824 27.9829 4.86128 27.9829C4.97432 27.9829 5.08625 27.9606 5.1906 27.9173C5.29495 27.874 5.38966 27.8106 5.46926 27.7306L27.7335 5.55197C27.8177 5.47228 27.8847 5.37636 27.9306 5.27004C27.9764 5.16372 28 5.04923 28 4.93353C28 4.81783 27.9764 4.70333 27.9306 4.59701C27.8847 4.4907 27.8177 4.39477 27.7335 4.31508V4.34068ZM26.5175 9.18586L9.14286 26.4937C9.0626 26.573 8.99889 26.6674 8.95542 26.7713C8.91194 26.8753 8.88956 26.9868 8.88956 27.0994C8.88956 27.212 8.91194 27.3235 8.95542 27.4274C8.99889 27.5314 9.0626 27.6257 9.14286 27.705C9.22246 27.785 9.31717 27.8484 9.42152 27.8917C9.52587 27.9351 9.6378 27.9573 9.75084 27.9573C9.86389 27.9573 9.97581 27.9351 10.0802 27.8917C10.1845 27.8484 10.2792 27.785 10.3588 27.705L27.7335 10.3545C27.8486 10.1881 27.9007 9.9864 27.8804 9.78532C27.8602 9.58425 27.7689 9.39686 27.6229 9.25655C27.4769 9.11624 27.2857 9.03212 27.0832 9.01917C26.8808 9.00622 26.6803 9.06529 26.5175 9.18586ZM26.5175 14.014L13.9468 26.4937C13.8665 26.573 13.8028 26.6674 13.7593 26.7713C13.7159 26.8753 13.6935 26.9868 13.6935 27.0994C13.6935 27.212 13.7159 27.3235 13.7593 27.4274C13.8028 27.5314 13.8665 27.6257 13.9468 27.705C14.0264 27.785 14.1211 27.8484 14.2255 27.8917C14.3298 27.9351 14.4417 27.9573 14.5548 27.9573C14.6678 27.9573 14.7797 27.9351 14.8841 27.8917C14.9884 27.8484 15.0832 27.785 15.1628 27.705L27.7335 15.157C27.8947 14.9964 27.9853 14.7785 27.9853 14.5514C27.9853 14.3242 27.8947 14.1064 27.7335 13.9457C27.5722 13.7851 27.3535 13.6949 27.1255 13.6949C26.8974 13.6949 26.6788 13.7851 26.5175 13.9457V14.014ZM26.5175 18.8421L18.8107 26.5193C18.7304 26.5986 18.6667 26.693 18.6232 26.7969C18.5797 26.9009 18.5574 27.0124 18.5574 27.125C18.5574 27.2376 18.5797 27.3491 18.6232 27.453C18.6667 27.557 18.7304 27.6513 18.8107 27.7306C18.8903 27.8106 18.985 27.874 19.0893 27.9173C19.1937 27.9606 19.3056 27.9829 19.4186 27.9829C19.5317 27.9829 19.6436 27.9606 19.748 27.9173C19.8523 27.874 19.947 27.8106 20.0266 27.7306L27.7335 20.0534C27.8947 19.8928 27.9853 19.6749 27.9853 19.4477C27.9853 19.2206 27.8947 19.0027 27.7335 18.8421C27.5722 18.6815 27.3535 18.5912 27.1255 18.5912C26.8974 18.5912 26.6788 18.6815 26.5175 18.8421ZM26.5175 23.6532L23.6232 26.5364C23.5429 26.6157 23.4792 26.71 23.4357 26.814C23.3922 26.9179 23.3699 27.0294 23.3699 27.142C23.3699 27.2546 23.3922 27.3661 23.4357 27.4701C23.4792 27.574 23.5429 27.6684 23.6232 27.7477C23.7028 27.8276 23.7975 27.8911 23.9018 27.9344C24.0062 27.9777 24.1181 28 24.2311 28C24.3442 28 24.4561 27.9777 24.5605 27.9344C24.6648 27.8911 24.7595 27.8276 24.8391 27.7477L27.7335 24.8645C27.8133 24.7849 27.8766 24.6905 27.9199 24.5866C27.9631 24.4827 27.9853 24.3713 27.9853 24.2588C27.9853 24.1463 27.9631 24.035 27.9199 23.931C27.8766 23.8271 27.8133 23.7327 27.7335 23.6532C27.6536 23.5736 27.5588 23.5105 27.4545 23.4675C27.3502 23.4244 27.2384 23.4023 27.1255 23.4023C27.0126 23.4023 26.9008 23.4244 26.7964 23.4675C26.6921 23.5105 26.5973 23.5736 26.5175 23.6532Z'
				fill={props.color}
			/>
		</svg>
	);
};

export default BackgroundIcon;