import { Injectable } from '@angular/core';
import { NgPluralCase } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
 export class UserService {
 user: any;

 setUser(newUser) {
 this.user = newUser;
 }

 getUser(): any {
 return this.user;
 }
 }
