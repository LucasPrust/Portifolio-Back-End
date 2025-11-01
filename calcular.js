function calcularMediaDeCurtidas(postagens) {
    
    if (postagens.length === 0) {
      return 0;
    }
  
   
    let somaCurtidas = 0;
    for (let i = 0; i < postagens.length; i++) {
      somaCurtidas += postagens[i].curtidas || 0; 
    }
  
   
    return somaCurtidas / postagens.length;
  }
  
  const postagens = [
    { id: 1, curtidas: 10 },
    { id: 2, curtidas: 5 },
    { id: 3, curtidas: 15 }
  ];
  
  console.log(calcularMediaDeCurtidas(postagens));
  
