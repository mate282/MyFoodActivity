import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'tabs-page',
  templateUrl: './tabs.component.html',
  styleUrls:['tabs.component-global']
})
export class TabsComponent implements OnInit{
  
  constructor(private routerExtension:RouterExtensions, private activeRoute:ActivatedRoute){

  }

  ngOnInit():void{
    console.log("-------------------------------------------------------------------------------------Tabs View Loaded");
  }

  navigate(path:string):void{
    this.routerExtension.navigate([{ outlets: { tabsOutlet: [path] } }], { relativeTo: this.activeRoute });
  }
}
