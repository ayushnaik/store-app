import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../store';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  public stores: any = [];
  apiURL = env.BASE_URL;
  public category: string = '';

  @Input() store: any;
  @Output() storeItemEmitter = new EventEmitter<any>();

  constructor(private http: HttpClient) {
    this.stores = [];
  }

  ngOnInit(): void {
    this.fetchProduts();
  }

 Onswitch(no: number) : any {
  switch (no) {
   case 1:
      this.category = 'Eye%20Wear';
    break;
   case 2:
    this.category = 'Shirts';
    break;
   case 3:
    this.category = 'Pants';
    break;
   case 4:
    this.category = 'Footwear';
    break;
  }
 }

  fetchCategory(category: string) {
    return this.http.get(this.apiURL+'/category/'+this.category).subscribe((Response) => {
      this.stores = Response;
      console.log(this.stores);
    });
  }

  fetchProduts() {
    return this.http.get(this.apiURL+'/store').subscribe((Response) => {
      this.stores = Response;
      console.log(this.stores);
    });
  }

  refreshStoreList() {
    this.storeItemEmitter.emit();
  }

}
