import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    		<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		<Link href="/sobre"><h1 className="items-center justify-between font-semibold">Quem nós somos?</h1></Link>
		<p className="max-w-[60%] text-sm">Somos entusiastas do aprendizado, e visando democratizar o acesso do pensamento empreendedor, criamos a fábrica de pão com o objetivo de atacar essa pauta em conjunto com os ODS(Objetivos de Desenvolvimento Sustentável) da ONU(Organização das Nações Unidas)</p>
	</div>
	<hr className="h-5"/>
	<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		<Link href="/aprenda"><h1 className="items-center justify-between font-semibold">Aprenda!</h1></Link>
		<p className="text-sm">Descubra as ideias atemporais do aprendizado</p>
     	</div>
	<hr className="h-5"/>
	<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		<Link href="/empreenda"><h1 className="items-center justify-between font-semibold">Empreenda!</h1></Link>
		<p>Empreender é para você também! Veja por onde começar</p>
     	</div>
	<hr className="h-5"/>
	<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		<Link href="/pao"><h1 className="items-center justify-between font-semibold">Pão!</h1></Link>
		<p>Entenda a proposta <i className="font-mono">quentinha</i> da Fabrica de Pão e faça a sua também!</p>
     	</div>
	<hr className="h-5"/>
	<div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
		<h1 className="items-center justify-between font-semibold">Valores</h1>
	</div>
	<div>
	<ld className="list-none">
	<li>§ Consistência</li> 
	<li>§ Compreensão </li>
	<li>§ Técnica</li>
	</ld>
     	</div>
	<hr className="h-5"/>


	<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		<h1 className="items-center justify-between font-semibold">Relatos</h1>
	Aqui podemos colocar as informações que coletamos dos clientes em potencial
     	</div>
	<hr className="h-5"/>
	
   </main>
  )
}
