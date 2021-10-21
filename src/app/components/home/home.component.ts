import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../store';
import { StorageComponent } from '../storage/storage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public stores: Array<Store> = [];

  @Input() store: any;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  navigateHome() {
        this.router.navigate(['/home']);
  }

  navigate() {
        this.router.navigate(['/storage-form']);
  }

}
