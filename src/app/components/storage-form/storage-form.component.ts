import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../store';
import { Router } from '@angular/router';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-storage-form',
  templateUrl: './storage-form.component.html',
  styleUrls: ['./storage-form.component.scss']
})
export class StorageFormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  public itemId!: String;
  public itemName!: String;
  public itemPrice!: String;
  public category!: String;
  public description!: String;
  public store: Store = new Store;
  public hasError = false;
  public errorMessage!: string;
  apiURL = env.BASE_URL;

  ngOnInit(): void {
  }

  navigateHome() {
        this.router.navigate(['/home']);
  }

navigate() {
        this.router.navigate(['/storage-form']);
  }

  validate() {
    if (!this.store) {
      this.hasError = true;
      this.errorMessage = "Cannot submit the empty content.";
    }
  }

  saveStore() {
    this.validate();
    if (!this.hasError) {
      const newStore = new Store();
      newStore.itemId = this.itemId;
      newStore.itemName = this.itemName;
      newStore.itemPrice = this.itemPrice;
      newStore.category = this.category;
      newStore.description = this.description;
      this.http.post(this.apiURL+'/uploads', newStore).subscribe(
        (resp: any) => {
          console.log(resp);
          this.router.navigateByUrl('home');
        },
        err => console.log(err)
      )
    }
  }

}
