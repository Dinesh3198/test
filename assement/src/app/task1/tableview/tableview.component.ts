import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss']
})
export class TableviewComponent implements OnInit {
  @ViewChild('deletePopup') delete!: TemplateRef<any>;
  @ViewChild('viewtemplate') view!: TemplateRef<any>;
  modalRef!: BsModalRef;
  Table_Source: any;
  id: any;
  view_data: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.get_Table_List();
  }

  get_Table_List() {
    return this.http.get('http://54.202.218.249:9501/api/users').subscribe(data => {
      this.Table_Source = data;
    })
  }

  btnNav_to_Edit(id: string) {
    this.router.navigate(['form', 'edit'], { relativeTo: this.route })
    window.localStorage['Id'] = id;
  }

  btnNav_to_Delete(id: string) {
    this.id = id;
    if (id) {
      this.modalRef = this.modalService.show(this.delete);
    }
  }

  btnNav_to_View(id: string) {
    this.http.get('http://54.202.218.249:9501/api/users/' + id).subscribe(data => {
      this.view_data = data;
      if (this.view_data) {
        this.modalRef = this.modalService.show(this.view);
      }
    })
  }

  btnNav_to_New() {
    this.router.navigate(['form', 'new'], { relativeTo: this.route })

  }

  confirm() {
    this.http.delete('http://54.202.218.249:9501/api/users/' + this.id).subscribe(data => {
      this.get_Table_List();
      this.modalRef.hide();
    })
  }

  decline() {
    this.modalRef.hide();
  }



}
