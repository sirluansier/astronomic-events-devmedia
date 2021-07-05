import chuvasDeMeteoros from "./data/chuvas-de-meteoros.js";

  chuvasDeMeteoros.forEach((chuva) => {
    console.log(`${ chuva.nome } - ${ chuva.intensidade } - ${ chuva.declinacao } - ${ chuva.inicio } à ${ chuva.fim } `);
  });
