







import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome:'loiane',
    email: 'loiane@.com'
  }

  onSubmit(form: any){
    console.log(form);
   //console.log(this.usuario);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
