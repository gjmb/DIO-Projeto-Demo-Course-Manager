import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations:[
        NavBarComponent
    ],
    exports:[
        NavBarComponent
    ],
    imports:[
        RouterModule

    ]
})

export class CoreModule{

}