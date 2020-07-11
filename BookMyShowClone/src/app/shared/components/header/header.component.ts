import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../common.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  level: number
  // totalPoints:number
  userName: string
  user: any
  @Input() totalPoints: number;
  constructor(private commonService: CommonService, private router: Router) {
    console.log(JSON.parse(localStorage.getItem('user')))
    this.user = JSON.parse(localStorage.getItem('user'));
     this.totalPoints = this.user.total_points;
    this.userName = this.user.name
    this.level = this.user.level; 

  }

  ngOnInit() {


    // if(!this.totalPoints)   //   this.totalPoints=this.user.total_points;
    // }

  }

  logout() {
    localStorage.clear()
    // this.commonService.flashMessage("You have been logged out successfully.", 'alert-success');
    window.location.href = '/login';
    // this.router.navigateByUrl('/login');
  }

}
