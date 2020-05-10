import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {

  id: number;
  blog: Blog;

  constructor(private route: ActivatedRoute,private router: Router,
    private blogService: BlogService) { }

  ngOnInit() {
    this.blog = new Blog();

    this.id = this.route.snapshot.params['id'];
    
    this.blogService.getBlog(this.id)
      .subscribe(data => {
        console.log(data)
        this.blog = data;
      }, error => console.log(error));
  }

  updateBlog() {
    this.blogService.updateBlog(this.id, this.blog)
      .subscribe(data => console.log(data), error => console.log(error));
    this.blog = new Blog();
    this.gotoList();
  }

  onSubmit() {
    this.updateBlog();    
  }

  gotoList() {
    this.router.navigate(['/blogs']);
  }
}