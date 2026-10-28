#Match Case#
 
Nomes = []
while True:
 print('Cadastro')
 print('1- Cadastrar Nome')
 print('2- Listar Nomes')
 print('3- Sair')
 
 opcao = int(input('Escolha:\n'))
 match opcao:
  case 1:
   nome = input('Digite o nome\n')
   Nomes.append(nome)
   print('Nome Cadastrado')
  case 2:
   if len(Nomes) == 0:
    print('Nenhum nome cadastrado')
   else:
    for nome in Nomes:
     print(nome)
  case 3:
     print('Encerrado')
     break