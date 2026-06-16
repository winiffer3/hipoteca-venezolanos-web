import { useState } from 'react'

const faqs = [
    {
        q: '¿Puedo pedir hipoteca si llevo menos de 2 años en España?',
        a: 'Sí, hay bancos que trabajan con residentes de menos de 2 años. Depende de tus ingresos y situación laboral. Consúltanos y lo vemos juntos sin compromiso.'
    },
    {
        q: '¿Cuánto hay que tener ahorrado?',
        a: 'Normalmente un 20% del precio del piso más un 10-12% para gastos de notaría e impuestos. En total calcula tener entre un 30-32% del valor de la vivienda. Sin embargo con nosotros podrias conseguir hasta el 100%'
    },
    {
        q: '¿Cuánto dinero necesito de entrada?',
        a: 'Los bancos suelen financiar hasta el 80% del valor de tasación. El 20% restante lo pones tú como entrada más los gastos asociados a la compra. Con nosotros no es necesario en algunos casos tener ese 20% ahorrado.'
    },
    {
        q: '¿Cuánto cuesta el servicio?',
        a: 'El estudio inicial es completamente gratuito. Solo cobramos honorarios si conseguimos la hipoteca que necesitas. Te lo explicamos todo en la primera llamada.'
    },
]

export default function FAQ() {
    const [abierto, setAbierto] = useState(null)

    const toggle = (i) => {
        setAbierto(abierto === i ? null : i)
    }

    return (
        <section id="faq">
            <h2 className="section-title">FAQ</h2>
            <p className="section-sub">Las preguntas más frecuentes</p>
            <div id="faq-list">
                {faqs.map((f, i) => (
                    <div className="faq-item" key={i}>
                        <button className="faq-q" onClick={() => toggle(i)}>
                            {f.q}
                            <span>{abierto === i ? '−' : '+'}</span>
                        </button>
                        {abierto === i && (
                            <div className="faq-a">{f.a}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
