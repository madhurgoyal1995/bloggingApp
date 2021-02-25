import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blogs/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Collection of blogs.
  public collection: any;

  // For Sorted blogs.
  public sortedList: any;

  alert: boolean = false;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {

    // Get Available blogs data
    this.blogService.getBlogsList()
      .subscribe(
        res => this.collection = res,
        err => {
          console.log(err);
          alert("Some error occurred..");
        }
      )
  }

  // Code for delete a blog.
  deleteBlog(id) {

    // delete only accessible if user is logged in.
    if (localStorage.getItem('SessionId')) {

      this.blogService.deleteMyBlog(id).subscribe((result) => {

        // reload home form.
        this.ngOnInit();
        this.alert = true;
      },
        err => {
          console.log(err);
          alert("Some error occurred..");
        });
    }
    else {

      // If no session id present in local storage then login first to access this functionality.
      this.router.navigate(['/login']);
    }

  }

  // sort data descending order.
  sortDataDesc() {
    this.sortedList = this.collection.sort(this.sortByDateDesc);
    this.collection = this.sortedList;
  }

  // sort data ascending order.
  sortDataAsc() {
    this.sortedList = this.collection.sort(this.sortByDateAsc);
    this.collection = this.sortedList;
  }

  // Sort data by date in descending order.
  sortByDateDesc(a, b) {
    if (a.datepublished < b.datepublished) {
      return 1;
    }
    if (a.datepublished > b.datepublished) {
      return -1;
    }
    return 0;
  }

  // Sort data by date in ascending order.
  sortByDateAsc(a, b) {
    if (a.datepublished > b.datepublished) {
      return 1;
    }
    if (a.datepublished < b.datepublished) {
      return -1;
    }
    return 0;
  }

  // close alert function.
  closeAlert() {
    this.alert = false;
  }
}
