import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed =0;
  totalActive =0;
  totalDeaths = 0;
  totalRecovered = 0;

  constructor(private dataservice : DataServiceService) { }

  ngOnInit(): void {

    this.dataservice.getGLobalData().subscribe(
      {
        next: (result: any)=>{
          
          console.log(result);
          
          result.forEach((cs: { active: number; confirmed: number; deaths: number; }) => {
              if(!Number.isNaN(cs.confirmed))
              {
            this.totalActive+=cs.active;
            this.totalConfirmed+=cs.confirmed
            this.totalDeaths+=cs.deaths;
            this.totalRecovered+=cs.active;
              }

            
          });
          
        }
      }
    )
  }

}
