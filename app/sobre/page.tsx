import Section from "../section"
import Image from "next/image"
import nostudo from "../../public/nos.jpeg"

export default function Page(){
	return(
		<Section 
		title="Quem nós somos ?"
		descr="Somos entusiatas do aprendizado, e visando democratizar o acesso do pensamento empreendedor, criamos a fábrica de pão com o objetivo de atacar essa pauta em conjunto com os ODS da ONU"
		>
		<Image src={nostudo}
			className= "max-w-[80%] m-[5%] flex justify-center"
			alt="Integrantes do grupo"
		/>
		</Section>
	);
}
