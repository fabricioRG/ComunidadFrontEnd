import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { DataService} from '../../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registroAcademico: number;
  password: string;
  user: User;
  infoToke:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  login(){
    //this.user = {registroAcademico: this.registroAcademico, password: this.password};
    this.user = new User();
    this.user.registroAcademico=this.registroAcademico;
    this.user.password=this.password;
    /*this.dataService.postAuthentication(user).subscribe(data =>{
      console.log(data);
    });*/
//    this.dataService.postAuthentication(this.user).subscribe(user => console.log(user));

    this.dataService.postAuthentication(this.user).subscribe(result => {
      //let cadena = JSON.parse(result.toString());
      if(result!=null){
        console.log(result);
        this.infoToke=result;
        console.log("PROBANDO"+this.infoToke['correoElectronico']);
        this.user.rolUsuario=this.infoToke['rolUsuario'];
        console.log("Rollll:"+this.user.rolUsuario);
      }
    });

    console.log("Seguimos....")

  }

}
