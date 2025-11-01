function validarUsuario(usuario) {
    
    if (typeof usuario !== 'object' || usuario === null) {
      return false;
    }
 
    const camposObrigatorios = ['nome', 'email', 'senha'];
  
    for (let campo of camposObrigatorios) {
      
      if (!(campo in usuario)) {
        return false;
      }
  
      if (typeof usuario[campo] !== 'string' || usuario[campo].trim().length === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(validarUsuario({ nome: "Ana", email: "ana@email.com", senha: "123456" }));
 console.log(validarUsuario({ nome: "", email: "ana@email.com", senha: "123456" })); 
 console.log(validarUsuario({ nome: "Ana", email: "ana@email.com" })); 
 console.log(validarUsuario("não é um objeto")); 
