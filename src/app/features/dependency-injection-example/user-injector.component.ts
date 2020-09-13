import {   Component,  ReflectiveInjector   } from '@angular/core';
   import { NgForm } from '@angular/forms';

   import { UserInjectorService } from '../../core/services/user-injector.service';

   @Component({
   selector: 'app-injector-demo',
   templateUrl: './user-injector.component.html'
   })
   export class UserInjectorComponent {
   userName: string;
   userService: UserInjectorService;

   constructor() {
   // Create an _injector_ and ask for it to resolve and create a UserService
   const injector: any = ReflectiveInjector.resolveAndCreate([UserInjectorService]);

   // use the injector to **get the instance** of the UserService
   this.userService = injector.get(UserInjectorService);
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
