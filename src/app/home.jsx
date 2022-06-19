import { Container } from "react-bootstrap";

export function Home() {
  return (
    <section>
      <div className="d-flex flex-row-reverse mt-4  ">
        <img
          src="/homeDos.webp"
          width="400px"
          height="300px"
          className="d-flex flex-row rounded-circle"
        />
        <p
          className="p-2 text-center mx-3 p-5"
          style={{ fontSize: "20px", fontFamily: "serif" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione in
          doloremque dolor repellendus libero porro quidem molestias repudiandae
          cum, beatae dignissimos, at odio sapiente illum suscipit minus
          laudantium repellat aperiam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam asperiores totam nesciunt dolorum aut
          aliquid, aspernatur nihil sint iusto autem? Nobis explicabo nam quod,
          modi accusamus sunt officia ratione quas! <hr /> AQUI VA QUIENES SOMOS
          NOSOTROS Y PORQUE SE CREÓ HOMEWORK
        </p>
      </div>
      <div className="d-flex flex-row mt-5 ">
        <img
          src="/homeUno.webp"
          width="600px"
          height="300px"
          className="d-flex flex-row rounded-circle"
        />
        <p
          className="p-2 text-center mx-3 p-5"
          style={{ fontSize: "20px", fontFamily: "serif" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nihil
          labore nobis praesentium qui nesciunt. Odit accusamus consequuntur
          temporibus nam in laudantium culpa repudiandae nostrum minima. Minima
          mollitia nihil architecto. <hr /> AQUI VA A QUE MERCADO ETSÁ ORIENTADO
          HOMEWORK Y QUE BENEFICIOS OFRECE A DIFRENCIA DE OTROS WEBSITIES DE
          TRABAJO
        </p>
      </div>
    </section>
  );
}
