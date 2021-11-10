import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  user = [
    {
      nombre: "Pepita Cruz",
      genero : "Femenino",
      pais : "Chile",
      ciudad: "Valparaíso"
    },
    {
      nombre: "Juan Tutti",
      genero : "Masculino",
      pais : "Chile",
      ciudad: "Metropolitana"
    },
    {
      nombre: "Pedro Tijuana",
      genero : "Masculino",
      pais : "Chile",
      ciudad: "Valparaíso"
    },
    {
      nombre: "Juana de Arco",
      genero : "Femenino",
      pais : "Chile",
      ciudad: "Valparaíso"
    },
  ]

  myForm: FormGroup=new FormGroup({
    nombre:new FormControl(""),
    genero:new FormControl(""),
    pais:new FormControl(""),
    ciudad:new FormControl(""),
  });
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: '',
      genero: '',
      pais: '',
      ciudad: '',
    });
  }

  

  onSubmit(form: FormGroup) {
    if (form.valid)alert("Enviado")
    else alert("formulario incompleto")
  }
  CambiarOpcion(e:any) {
    // this.dirigido.setValue(e.target.value, {
    //   onlySelf: true
    // })
    // alert("funcion")
    console.log(e);
    
  }
  title = 'angular-categorias';
  mostrar_cards=true;
  mostrar_lista=false;
  mostrar_form=false;
  lista()
  {
  this.mostrar_cards=false;
  this.mostrar_lista=true;
  this.mostrar_form=false;
 }
 cards()
 {
  this.mostrar_cards=true;
  this.mostrar_lista=false;
  this.mostrar_form=false;
 }

 mostrar_forms(){
   this.mostrar_form=true;
   this.mostrar_cards=false;
  this.mostrar_lista=false;
   
 }
 
 
 
}
