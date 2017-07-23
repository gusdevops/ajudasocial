import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }






  /*
**
* Adicionar serviço aod
*/
  public adicionarServico(servico: PojoService) {


  }

  public avaliarServico(servico: PojoService)  {

  }


  public vincularServico(servico: PojoService) {

  }

  public servicoFeito() {

  }

}


/*
*  Helper method for  service itself " and that is it'"
*/
export class PojoService  {

 idServico:string = "0" ;
 dataServico:number = Date.now();
 long: number = 0;
 lat: number = 0;
 feito : boolean = false;
 usuariosVinculados:any = null;
 avaliacao: any = null;


  constructor (idServico :string,
               dataServico : number,
               long:number,
               lat: number,
               feito: boolean){
              //Para mais informacoes basta consultar o id do seriviço
                

  }


}
