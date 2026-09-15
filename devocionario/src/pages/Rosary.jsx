import "./Rosary.css";
import { joyfulMysteries } from "../data/rosary.js";

function Offering() {
    return (
        <>
            <h3>Oferecimento</h3>

            <p>
                Divino Jesus, nós vos oferecemos este terço que vamos rezar,
                meditando nos mistérios da Vossa Redenção. Concedei-nos, por
                intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as
                virtudes que nos são necessárias para bem rezá-lo e a graça de
                ganharmos as indulgências desta santa devoção.
            </p>

            <p>
                Oferecemos particularmente, em desagravo dos pecados cometidos
                contra o Santíssimo Coração de Jesus e Imaculado Coração de
                Maria, pela paz do mundo, pela conversão dos pecadores, pelas
                almas do Purgatório, pelas intenções do Santo Padre, pelo
                aumento e santificação do Clero, pelo nosso vigário, pela
                santificação das famílias, pelas missões, pelos doentes, pelos
                agonizantes, por todos aqueles que pediram nossas orações, pelo
                nosso país e por todas as nossas intenções particulares.
            </p>

            <span>(Apresentar suas intenções)</span>

            <span>(Creio, Pai Nosso, 3 Ave Marias, Glória ao Pai)</span>
        </>
    );
}

function ShortPrayers() {
    return (
        <>
            <h3>Jaculatórias</h3>

            <h4>Jaculatória 1</h4>

            <p>
                Óh! meu Jesus, perdoai-nos, livrai-nos do fogo do inferno. Levai
                as almas todas para o céu e socorrei principalmente as que mais
                precisarem.
            </p>

            <h4>Jaculatória 2</h4>

            <p>
                Oh! Virgem Santíssima, não permitais que morramos ou vivamos em
                pecado mortal, em pecado mortal, não haveremos de morrer, pois a
                Virgem Santíssima nos há de valer, nos há de valer na maior
                aflição.
            </p>

            <p>Ó Virgem Santíssima, tende de nós compaixão.</p>
        </>
    );
}

function Thanksgiving() {
    return (
        <>
            <h3>Agradecimento</h3>

            <p>
                Infinitas graças vos damos, Soberana Rainha, pelos benefícios
                que todos os dias recebemos de vossas mãos liberais. Dignai-vos
                agora e para sempre tomar-nos debaixo de vosso poderoso amparo e
                para mais nos obrigar vos saudamos com uma Salve Rainha.
            </p>

            <span>(Salve Rainha, Sinal da Cruz)</span>
        </>
    );
}

function Mystery({ data }) {
    return (
        <>
            <h3>{data.title}</h3>
        </>
    );
}

export default function Rosary() {
    return (
        <section className="content">
            <h2 className="page-title">Santo Terço</h2>

            <span>(Sinal da Cruz)</span>

            <Offering />

            <ShortPrayers />

            <Mystery data={joyfulMysteries} />

            <Thanksgiving />
        </section>
    );
}
