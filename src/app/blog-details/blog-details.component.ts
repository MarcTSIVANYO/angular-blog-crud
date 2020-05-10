import { Blog } from '../blog';
import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['blogs']);
  }
}