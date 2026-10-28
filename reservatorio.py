reservatorio = []
 
while True:
    print('===== MONITORAMENTO DE RESERVATÓRIOS ===== ')
    print('1- Cadastrar Nivel')
    print('2- Exibir níveis cadastrados')
    print('3- Exibir menor nível registrado ')
    print('4- Sair')
 
    opcao = int(input('Escolha uma opçao\n'))
    
    match opcao:
        case 1:

            if len(reservatorio) < 7:
                nivel = float(input('Digite o nivel do reservatorio em %:\n'))
                reservatorio.append(nivel)
                print('Nivel Cadastrado')
            else:
                print('Limite de 7 reservatorios')
                
        case 2:
            if len(reservatorio) == 0:
                print('Não existem dados disponiveis')
            else:
                print('===== NÍVEIS CADASTRADOS ===== ')
                for i in range(len(reservatorio)):
                    print(f'Reservatorio {i + 1}: {reservatorio[i]}%')
                    
        case 3:
            if len(reservatorio) == 0:
                print('Não existem dados disponiveis')
            else:
                menor_nivel = reservatorio[0]
                for nivel in reservatorio:
                    if nivel < menor_nivel:
                        menor_nivel = nivel
                print(f'Menor nivel registrado: {menor_nivel}%')
                
        case 4:
            print('Encerrado')
            break
 