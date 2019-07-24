import { Component, OnInit } from '@angular/core';
import { Fotografia } from 'src/app/shared/classes/fotografia';
import { ApiFotografiasService } from 'src/app/shared/services/api.fotografias.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-fotografias-list',
  templateUrl: './fotografias-list.component.html',
  styleUrls: ['./fotografias-list.component.css']
})
export class FotografiasListComponent implements OnInit {
// definicion objecte que volem reprensentar
public fotografias: any = [];
public dataSource = new MatTableDataSource(this.fotografias);
displayedColumns: string [] = ['id', 'author', 'URL']; // reste valors

  constructor(public api: ApiFotografiasService) { }
getFotografias() {
this.api.getFotografias$().subscribe({
  next: arg => {this.fotografias = arg; this.matTable(); }
});
}

matTable() {
  this.dataSource = new MatTableDataSource(this.fotografias);
}
applyFilter(filterValue: string) {
filterValue = filterValue.trim();
filterValue = filterValue.toLowerCase();
this.dataSource.filter = filterValue;

}
  ngOnInit() {
    this.getFotografias();

    }

}
