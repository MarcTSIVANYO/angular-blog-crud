import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component'; 
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';

const routes: Routes = [

  
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'blogs', component: BlogListComponent },
  { path: 'add', component: CreateBlogComponent },
  { path: 'update/:id', component: BlogUpdateComponent },
  { path: 'details/:id', component: BlogDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
