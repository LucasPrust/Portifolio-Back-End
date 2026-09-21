#include <stdio.h>
 
int main(){
    int edicao[6];
    int op;
    int var = 0;
    char revista[6][50];
    char tema[6][50];
    int i;
 
    do{
        printf("1.Nome da Revista\n");
        printf("2.Tema da Revista e Edicao\n");
        printf("3.Sair\n");
        scanf("%i",&op);
 
        switch(op){
            case 1:
                if(var < 6){
                    printf("Qual nome da revista?\n");
                    scanf("%s",&revista[var]);
 
                    printf("Qual tema da revista?\n");
                    scanf("%s",&tema[var]);
 
                    printf("Qual a edicao da revista?\n");
                    scanf("%i",&edicao[var]);
 
                    var++;
 
                    break;
                }else{
                    printf("Espaco cheio\n");
                }
 
            case 2:
                for(i = 0; i < var; i++){
                    printf("O nome da revista e %s o tema e %s e a edicao e %i\n",
                           revista[i], tema[i], edicao[i]);
                }
                break;
 
            case 3:
                printf("Encerrando\n");
                break;
 
            default:
                printf("Esta opcao nao existe\n");
        }
 
    }while(op != 3);
}