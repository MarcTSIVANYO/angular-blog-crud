import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { Observable } from "rxjs";
import { BlogService } from "../blog.service";
import { Blog } from "../blog";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blog: Blog = new Blog();
  submitted = false;

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit() {
  }

  newBlog(): void {
    this.submitted = false;
    this.blog = new Blog();
  }

  save() {
    this.blogService.createBlog(this.blog)
      .subscribe(data => console.log(data), error => console.log(error));
    this.blog = new Blog();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true; 
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/blogs']);
  }
}