import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingComponent } from './components/booking/booking.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminEditBikeComponent } from './components/admin-edit-bike/admin-edit-bike.component';
import { AdminAddBikeComponent } from './components/admin-add-bike/admin-add-bike.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';


export const routes: Routes = [
    {path:'',redirectTo:'admin/login',pathMatch:'full'},
    {path:'user/login',component:LoginComponent},
    {path:'user/register',component:RegisterComponent},
    {path:'user/dashboard',component:DashboardComponent},
    {path:'user/booking',component:BookingComponent},
    {path:'user/my-bookings',component:MyBookingsComponent},
    {path:'user/profile',component:ProfileComponent},
    {path:'user/edit',component:EditProfileComponent},


    {path:'admin/login', component:AdminLoginComponent},
    {path:'admin/dashboard',component:AdminDashboardComponent},
    {path:'admin/edit-bike',component:AdminEditBikeComponent},
    {path:'admin/add-bike',component:AdminAddBikeComponent},
    {path:'admin/orders',component:AdminOrdersComponent},
    
];
