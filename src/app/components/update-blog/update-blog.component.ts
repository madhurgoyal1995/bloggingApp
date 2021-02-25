import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blogs/blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  updateBlog = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl(''),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    datepublished: new FormControl('', [Validators.required])
  })

  constructor(private blogService: BlogService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.blogService.getCurrentData(this.router.snapshot.params.id).subscribe((result) => {
      this.updateBlog = new FormGroup({
        title: new FormControl(result['title'], [Validators.required]),
        category: new FormControl(result['category']),
        description: new FormControl(result['description'], [Validators.required]),
        author: new FormControl(result['author'], [Validators.required]),
        datepublished: new FormControl(result['datepublished'], [Validators.required])
      })
    })
  }

  editBlog() {
    this.blogService.updateMyBlog(this.router.snapshot.params.id, this.updateBlog.value)
      .subscribe((result) => {
        this.route.navigate(['/home']);
      },
        err => {
          console.log(err);
          alert("Some error occurred..");
        }
      );
  }
}

