import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "@nativescript/angular"

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
})
export class LoginComponent {

    constructor(private router:RouterExtensions, private activeRoute : ActivatedRoute){}

    public Login():void{
       console.log("-------------------------------------------Login Pressed")
        this.router.navigate(["/tabs"], {clearHistory:true, relativeTo: this.activeRoute});
        console.log("------------------------------------------Page changed");
    }
}
