import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username :string;
  private clientid = '3dfeefac56a73af0baa0';
  private clientsecret= '9a4256cc5070d33c398836e792a1ee13552a856a';

  constructor( private http:HttpClient) {
    console.log("service is now ready");
    this.username = "owinolawrence";
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   }
}
