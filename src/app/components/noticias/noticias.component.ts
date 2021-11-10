import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  Noticias = [
    {
      id: "1",
      name: "Noticia 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: "2",
      name: "Noticia 2",
      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
    },
    {
      id: "3",
      name: "Noticia 3",
      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
    }
  ]

  ngOnInit(): void {
  }

}
