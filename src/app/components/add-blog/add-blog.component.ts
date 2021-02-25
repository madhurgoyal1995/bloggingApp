import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blogs/blog.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  // Add Blog form with input fields.
  addBlog = new FormGroup({
    title: new FormControl('', [Validators.required]), //Blog title.
    category: new FormControl('General'), // Default value general.
    description: new FormControl('', [Validators.required]),
    author: new FormControl(localStorage.getItem('SessionId').split('@')[0], [Validators.required]),//Default value for author is the logged-in user id.
    datepublished: new FormControl('', [Validators.required]) // Date field is also required.
  })

  // injecting blog Service and Router.
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }


  createBlog() {
    this.blogService.addBlog(this.addBlog.value)
      .subscribe(
        res => {
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err);
          alert("Some Error occurred..");
        }
      )
  }

}
