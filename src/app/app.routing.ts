import { RouterModule, Routes } from '@angular/router';
import { AmComponent } from './angular-material/angular-material.component';
import { DemoComponent } from './demo/demo.component';

const appRoutes: Routes = [
        {path:'angular-material',component:AmComponent},
        {path:'link2',component:DemoComponent},
        {path:'',redirectTo:'/link2',pathMatch: 'full'}
];
export const AppRoute = RouterModule.forRoot( appRoutes, {useHash: true} );