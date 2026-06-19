import { useState } from 'react'

export default function Calculator() {
    const [precio, setPrecio] = useState(180000)
    const [plazo, setPlazo] = useState(25)

    const entrada = Math.round(precio * 0.2)
    const capital = precio - entrada
    const tasa = 0.0319 / 12
    const meses = plazo * 12
    const cuota = Math.round(
        (capital * tasa * Math.pow(1 + tasa, meses)) /
        (Math.pow(1 + tasa, meses) - 1)
    )

    const fmt = (n) => '€' + n.toLocaleString('es-ES')

    return (
        <section id="calculadora">
            <h2 className="section-title">Calcula tu cuota mensual</h2>
            <p className="section-sub">Una estimación rápida para que vayas con números claros</p>
            <div id="calc-box">
                <div className="calc-row">
                    <label htmlFor="slider-precio">Precio del piso <strong>{fmt(precio)}</strong></label>
                    <input
                        id="slider-precio"
                        type="range" min="80000" max="500000" step="5000"
                        value={precio}
                        onChange={(e) => setPrecio(Number(e.target.value))}
                        aria-label="Precio del piso"
                    />
                </div>
                <div className="calc-row">
                    <label htmlFor="slider-plazo">Plazo de la hipoteca <strong>{plazo} años</strong></label>
                    <input
                        id="slider-plazo"
                        type="range" min="10" max="30" step="1"
                        value={plazo}
                        onChange={(e) => setPlazo(Number(e.target.value))}
                        aria-label="Plazo de la hipoteca en años"
                    />
                </div>
                <div id="calc-info">
                    Entrada estimada (20%): <strong>{fmt(entrada)}</strong> · Tipo fijo estimado: 3,19%
                </div>
                <div id="calc-result">
                    <span>Cuota mensual estimada</span>
                    <strong>~{fmt(cuota)}/mes</strong>
                </div>
            </div>
        </section>
    )
}