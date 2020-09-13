 export class UserInjectorService {
 user: any;

 setUser(newUser) {
 this.user = newUser;
 }

 getUser(): any {
 return this.user;
 }
 }
