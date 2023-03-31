import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-clasification-score',
  templateUrl: './clasification-score.component.html',
  styleUrls: ['./clasification-score.component.css']
})
export class ClasificationScoreComponent implements OnInit {

  public users: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.orderUserByScore().subscribe(response => {
      this.users = response;
    },
    error => { console.error(error) }
    );
  }

}
