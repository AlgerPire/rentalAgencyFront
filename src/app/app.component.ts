import {Component, OnInit} from '@angular/core';
import {Owner} from './owner/Owner';
import {OwnerService} from './owner/owner-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rental-front';
  owners: Owner[];

  constructor(private router: Router, private ownerService: OwnerService) {
  }

  listOwner(){
    this.ownerService.listOwner().subscribe(data=>{
      this.owners=data;
    })
  }

  addOwner() : void{
    this.router.navigate(['add-owner'])
      .then((e)=>{
        if(e){
          console.log("Navigation is successful!");
        }
        else {
          console.log("Navigation has failed");
        }
      });
  };

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.listOwner();
    });
  }





}
