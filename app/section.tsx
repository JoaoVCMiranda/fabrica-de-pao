interface BaseLayoutProps{
	children?: React.ReactNode;
	title: string;
	descr: string;
}

const Section : React.FC<BaseLayoutProps> = ({title="Sem titulo", descr="", children}) => {
	return (
    		<div className="flex justify-center grid grid-cols-1">
			<h1 className="flex justify-center p-[3.5em] font-semibold text-2xl">{title}</h1>
			
			<p className="opacity-[50%] text-sm">{descr}</p>
			{children}

		</div>
  	);
};
export default Section;
