import { Component, OnInit } from '@angular/core';
import { DataService} from '../../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registroAcademico: string;
  password: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  login(){
    const user = {registroAcademico: this.registroAcademico, password: this.password};
    /*this.dataService.postAuthentication(user).subscribe(data =>{
      console.log(data);
    });*/
    this.dataService.postAuthentication(user).subscribe(user => console.log(user));
    /*console.log("--------Inicio-------");
    console.log(this.registroAcademico);
    console.log(this.password);
    console.log("--------Fin-------");*/


  }

}
