import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residente } from 'src/app/models/Residente';
import { ResidentesService } from "src/app/services/residentes.service";

@Component({
  selector: 'app-residente-info',
  templateUrl: './residente-info.page.html',
  styleUrls: ['./residente-info.page.scss'],
})

export class ResidenteInfoPage implements OnInit {
  @Input() residente:any;

  constructor(private activatedRoute: ActivatedRoute, private residentesService:ResidentesService, private router:Router) { }

  ngOnInit() {  
    this.getResidente();
  }

  getResidente(): void {
    //Cuando este tratando de hacer bind antes del ngOnInit utilizar {{object?.value}}
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.residentesService.getResidente(id).subscribe(residente => { 
      this.residente = residente['data']; 
      this.residentesService.residente = residente['data'];
      //console.log(this.residente);
      this.router.navigate([`residentes/${id}/historial`]);
    });
  
  }

}
