import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { Observable } from "rxjs";
import { BlogService } from "../blog.service";
import { Blog } from "../blog";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.css"]
})


export class BlogListComponent implements OnInit {
  blogs: Observable<Blog[]>;

  constructor(private blogService: BlogService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.blogs = this.blogService.getBlogsList();
  }

  deleteBlog(id: number) {
    this.blogService.deleteBlog(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateBlog(id: number){
    this.router.navigate(['update', id]);
  }
  
  blogDetails(id: number){
    this.router.navigate(['details', id]);
  }
}