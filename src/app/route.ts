import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddeventComponent } from './addevent/addevent.component'
import { MainLayoutComponent } from './main-layout/main-layout.component'

const routes:Routes=[
    { path:'addPage', component:AddeventComponent},
    { path:'home', component:MainLayoutComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}