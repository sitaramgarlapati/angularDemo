import {   Component,  ReflectiveInjector   } from '@angular/core';
   import { NgForm } from '@angular/forms';

   import { UserService } from '../../core/services/user.service';

   @Component({
   selector: 'app-user-demo',
   templateUrl: './user.component.html'
   })
   export class UserComponent {
   userName: string;

   constructor(private userService: UserService) {
   }

   signIn(): void {
    // when we sign in, set the user
     // this mimics filling out a login form
     this.userService.setUser({
     name: 'Sitaram'
     });

     // now **read** the user name from the service
     this.userName = this.userService.getUser().name;
     console.log('User name is: ', this.userName);
     }
     }
