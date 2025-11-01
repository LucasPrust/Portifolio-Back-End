function formatarTitulo(titulo) {
    return titulo
      .trim()
      .replace(/\r?\n|\r/g, ' ') 
      .replace(/\s+/g, ' ') 
      .split(' ') 
      .map(palavra => 
        palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
      ) 
      .join(' '); 
  }
  console.log(formatarTitulo("O Vento Levou Tudo")); 


  