export default function Section({title="Sem titulo", descr, children}:{children: React.ReactNode}){
	// Aqui será definido o fundo da pagina, a formatação padrão das fontes dentro da div}
    	// Fazer um modelo para cada tipo de midia, ex: vídeo, texto e etc
    	// É para ser simples mesmo
	//document.title = title;
	return (
    		<div className="flex justify-center grid grid-cols-1 ">
			<h1 className="flex justify-center p-[3.5em] font-semibold text-2xl">{title}</h1>
			<p className="opacity-[50%] flex max-w-[80%] text-sm m-11 text-center">{descr}</p>
		

		{children}
    		

		</div>
  	);
}
