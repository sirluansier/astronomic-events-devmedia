const imprimeListaChuva = (listaChuvas) => {
    listaChuvas.forEach( imprimeItemListaChuva );
  }
  
  const imprimeItemListaChuva = (chuva) => {
    console.log(`${ chuva.nome } - ${ chuva.intensidade } - ${ chuva.declinacao } - ${ chuva.inicio } à ${ chuva.fim } `);
  }
  
  export default imprimeListaChuva;
  