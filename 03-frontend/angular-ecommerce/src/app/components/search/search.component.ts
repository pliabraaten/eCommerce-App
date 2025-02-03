import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Inject router into this component
  constructor(private router: Router) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Search method
  doSearch(value: string) {  // value is user inputted text
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);  // Call the 'search/:keyword' path with the entered keyword
  }

}
