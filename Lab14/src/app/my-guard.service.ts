
import { Injectable } from '@angular/core';
import { DbService } from "./db/db.service";
import { ActivatedRoute } from '@angular/router';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class MyGuardService implements CanActivate{
  private id:string;
  private data;
  constructor(dataService: DbService, private router:Router){
    this.data = dataService.getData();
  }
 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{   
  this.id = route.params.id;
  for(let singleData of this.data){
      if(singleData['id']==this.id){
        return true;
      }    
  }
   this.router.navigate(['error']); 
  }

}
