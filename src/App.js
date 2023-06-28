import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* <!-- BARRA TITULO --> */}
      <div className="barra">
        <div className="contenido">
          <div className="logo">
            <h1>Veny</h1>
            <h3>Lavanderia</h3>
          </div>
          <div className="mensaje">
            <div className="logoBox">
              <div className="icon-whatsapp"></div>
            </div>
            <div className="textoBox">
              <h2>Contactenos</h2>
              <p><a href="https://api.whatsapp.com/send?phone=+51940143617&text=Hola!%20Quiero%20que%20Laves%20mi%20ropa..." target="_blank">940-143-617</a></p>
              <p><a href="https://api.whatsapp.com/send?phone=+51900255254&text=Hola!%20Quiero%20que%20Laves%20mi%20ropa..." target="_blank">900-255-254</a></p>
            </div>
          </div>
          <div className="mensaje">
            <div className="logoBox">
              <div className="icon-location"></div>
            </div>
            <div className="textoBox">
              <a href="#map">
                <h2>Ubíquenos</h2>
                <p>Huancayo - Perú</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- TITULO --> */}
      <div className="intro">
        <div className="box">
          <div className="imgBox">
            <div className="titulo">
              <h1>Lavanderia a Domicilio en Huancayo</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- DONDE BUSCAR --> */}
      <div className="donde">
        <div className="titulo-donde">
          <h1>Veny <span>Lavanderia</span></h1>
          <h2><a href="https://api.whatsapp.com/send?phone=+51940143617&text=Hola!%20Quiero%20que%20Laves%20mi%20ropa..." target="_blank">940143617</a></h2>
        </div>
      </div>

      {/* <!-- LINEA DIVISION --> */}
      <div className="linea">
        <div className="contenido">
          <div className="circulo"></div>
        </div>
      </div>

      {/* <!-- COMO FUNCIONA --> */}
      <div className="como">
        <h1>¿Como Funciona?</h1>
        <div className="contenido">
          <div className="box aparece">
            {/* <img src="<?php echo RUTA_IMG ?>lavado/modo.jpg"> */}
            <h2>Modo de pedido</h2>
            <p>Seleccione si desea que recojamos su ropa a domicilio o desea acercarse a nuestros locales.</p>
          </div>
          <div className="box aparece">
            {/* <img src="<?php echo RUTA_IMG ?>lavado/tiempo.jpg"> */}
            <h2>Programe a su tiempo</h2>
            <p>Por protocolos por COVID-19 la entrega es dentro de las 48 horas, pero se pueden hacer excepciones, solo coordínelo.</p>
          </div>
          <div className="box aparece">
            {/* <img src="<?php echo RUTA_IMG ?>lavado/ropa.jpg"> */}
            <h2>Escoja su Plan</h2>
            <p>Cada prenda tiene un diferente costo, prendas simples de vestir por kilo y el resto por unidad, también puede hacer un paquete, hasta un plan mensual.</p>
          </div>
          <div className="box aparece">
            {/* <img src="<?php echo RUTA_IMG ?>lavado/relajese.jpg"> */}
            <h2>Mas tiempo para usted</h2>
            <p>Relájese, nosotros lavamos su ropa y usted disfrute de su tiempo.</p>
          </div>
          <div className="box aparece">
            {/* <img src="<?php echo RUTA_IMG ?>lavado/planchado.jpg"> */}
            <h2>Ropa como Nueva</h2>
            <p>Le entregamos su ropa planchada, perfumada y si tiene algo que coser, lo coseremos.</p>
          </div>
        </div>
      </div>

      {/* <!-- LINEA DIVISION --> */}
      <div className="linea">
        <div className="contenido">
          <div className="diamante"></div>
        </div>
      </div>

      {/* <!-- PEDIDOS --> */}
      <div class="como">
        <h1>Escoja como decea entregarnos su ropa.</h1>
        <div class="itemBox delyveri">
          <h2>¿Como confiar en nosotros?</h2>
          <p>En lavanderias </p>
          <span>Veny</span>
          <p>, nos preocupamos por su seguridad, por ello, cumplimos con los protocolos del COVID-19.</p>
          <p>Además, al momento de recoger se programará a una persona en especial, la cual tendrá que identificarse y responder el código que se genera al momento de hacer el pedido.
            Y también, solo responderemos a estos números telefónicos
          </p>
          <div class="enlaceBox">
            <a href="https://api.whatsapp.com/send?phone=+51940143617&text=Hola!%20Quiero%20que%20Laves%20mi%20ropa..." target="_blank" class="icon-whatsapp">&nbsp;940143617</a>
            <a href="https://api.whatsapp.com/send?phone=+51900255254&text=Hola!%20Quiero%20que%20Laves%20mi%20ropa" target="_blank" class="icon-whatsapp">&nbsp;900255254</a>
          </div>
        </div>
        <div class="itemBox local">
          <h2>¿Donde nos Ubicas?</h2>
          <p>
            La dirección exacta es  Pje. Tauro 185 - El Tambo - Huancayo
            Referencia Av. Atalaya a tres cuadras de Av. Ferrocarril
          </p>
        </div>
      </div>

      {/* <!-- LINEA DIVISION --> */}
      <div class="linea">
        <div class="contenido">
          <div class="circulo"></div>
        </div>
      </div>

      {/* <!-- TIEMPO --> */}
      <div class="como">
        <h1>¿Cuanto tiempo demora?</h1>
        <p>En lavanderias <span>Veny</span>, el tiempo promedio de entrega es de 48 horas.</p>
        <p>Se hace excepciones del tiempo de entrega, solo coordínelo.</p>
      </div>

      {/* <!-- LINEA DIVISION --> */}
      <div class="linea">
        <div class="contenido">
          <div class="diamante"></div>
        </div>
      </div>


    </div>
  );
}

export default App;
