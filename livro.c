#include <stdio.h>

int main(){
    int quantidade[10];
    char livro[10][50];
    char autor[10][50];
    int var = 0;
    int op;
    int i; 
    
    do{
        printf("\n1.Exibir Livro\n");
        printf("2.Exibir Autor e Quantidade\n");
        printf("3.Sair\n");
        scanf("%i", &op);
        
        switch(op){
            case 1:
                if(var < 10){
                    printf("Qual Nome do Livro?\n");
                    scanf("%s", livro[var]);
                    printf("Qual Nome do Autor?\n");
                    scanf("%s", autor[var]);
                    printf("Qual a Quantidade?\n");
                    scanf("%i", &quantidade[var]);
                    var++;
                } else {
                    printf("Espaco cheio\n");
                }
                break;
                
            case 2:
                if (var == 0) {
                    printf("Nenhum livro cadastrado ainda.\n");
                } else {

                    for(i = 0; i < var; i++){
                        printf("O Nome do livro e %s e o Autor e %s e a Quantidade %i\n", livro[i], autor[i], quantidade[i]);
                    }
                }
                break;
                
            case 3:
                printf("Encerrado\n");
                break;
                
            default:
                printf("Essa opcao nao existe\n");
        }
    } while(op != 3);
}
