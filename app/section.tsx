export default function Section({title="Sem titulo", descr, children}:{children: React.ReactNode}){
	/* 
	 * Aqui será definido o fundo da pagina, a formatação padrão das fontes dentro da div}
    	 * É para ser simples mesmo
	 * document.title = title;
	 */
	return (
    		<div className="flex justify-center grid grid-cols-1">
			<h1 className="flex justify-center p-[3.5em] font-semibold text-2xl">{title}</h1>
			
			<p className="opacity-[50%] text-sm">{descr}</p>
			{children}

		</div>
  	);
}
