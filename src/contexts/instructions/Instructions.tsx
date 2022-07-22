import styled from '@emotion/styled'

export function Instructions() {
	
	return (
        <Section>
			<p>
            	Bienvenidos al <b>Matamasía</b>, un juego donde el objetivo es matar de forma sutil y el último que quede vivo gana*.
			</p>
			<p>
				Recibirás una forma de matar y una víctima por correo. No la compartas con nadie.
			</p>
			<p>
				A la hora de matar máximo puede haber un testigo, a excepción de los casos en que esté indicado lo contrario, (estará indicado en el mismo correo para los casos más difíciles).
				En este caso no importará el número de testigos presentes y se podrá realizar en cualquier momento a excepción de cuando el juego se dé por pausado por parte de la policía de la masía.
			</p>
			<p>
				Testigo se considera persona/s presente/s en el potencial escenario del crimen.	
			</p>
			<p>
				Cuando hayas matado a tu víctima, ésta te dará la siguiente victima a la que deberás matar y el método, reenviándote su correo o explicándotelo detalladamente.
			</p>
			<p>
				Si tu víctima pide que le enseñes el correo con el método y el nombre para comprobarlo, estás obligado a hacerlo.
			</p>
			<p>
				En caso de ser pillado en intento de asesinato por alguno de los presentes, esto conllevará a tu muerte y quien te haya visto se llevará el nuevo target.
			</p>
			<p>
				Si presencias algún incumplimiento de alguna de estas cláusulas, denúncialo a la policía de la masía: Anna, Busvar, Canut o Esther.
				Si tienes alguna duda, también puedes preguntar a la policía de la masía.
			</p>
			<p>
				Cuando todos hayan muerto y solo quede uno en pie, ese será el ganador. 
				
			</p>
			<Note>
				*En ningún momento se matará de verdad a nadie. La policía de la masía no se hace responsable de los cafres de sus compañeros.
			</Note>

        </Section>
	)
}

const Section = styled.section`
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-center;
	align-items: center;
`

const Note = styled.p`
	font-size: .8rem;
	text-align: right;
`
