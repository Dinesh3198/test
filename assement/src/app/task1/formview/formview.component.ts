import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface FormDetails {
  first_name: string,
  last_name: string,
  email: string,
  address_line1: string,
  address_line2: string,
  address_city: string,
  address_state: string,
  address_zipcode: string,
  address_country: string,
  qualification: string,
  comments: string,
  phoneNumber: string,

}
@Component({
  selector: 'app-formview',
  templateUrl: './formview.component.html',
  styleUrls: ['./formview.component.scss']
})
export class FormviewComponent implements OnInit {
  bio_data_details = {} as FormDetails;
  mode: any;
  Filled_data: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,) { }

  ngOnInit(): void {
    this.call_initial();
  }

  btnSubmit() {
    var jsonObj = {
      "firstName": this.bio_data_details.first_name,
      "lastName": this.bio_data_details.last_name,
      "email": this.bio_data_details.email,
      "phoneNumber": this.bio_data_details.phoneNumber,
      "address1": this.bio_data_details.address_line1,
      "address2": this.bio_data_details.address_line2,
      "city": this.bio_data_details.address_city,
      "state": this.bio_data_details.address_state,
      "zipCode": this.bio_data_details.address_zipcode,
      "country": this.bio_data_details.address_country,
      "qualification": this.bio_data_details.qualification,
      "comments": this.bio_data_details.comments
    }
    if (this.mode === 'new') {
      this.http.post('http://54.202.218.249:9501/api/users', jsonObj).subscribe(data => {
        if (data) {
          this.router.navigate([''])
        }
      })
    }
    else {
      var id = window.localStorage.getItem('Id')
      this.http.put('http://54.202.218.249:9501/api/users/' + id, jsonObj).subscribe(data => {
        if (data) {
          this.router.navigate([''])
        }
      })
    }
  }

  call_initial() {
    this.route.paramMap.subscribe(params => {
      this.mode = params.get('mode');
      if (this.mode === 'edit') {
        var id = window.localStorage.getItem('Id')
        this.http.get('http://54.202.218.249:9501/api/users/' + id).subscribe(data => {
          this.Filled_data = data;
          this.bio_data_details.first_name = this.Filled_data.firstName;
          this.bio_data_details.last_name = this.Filled_data.lastName;
          this.bio_data_details.address_line1 = this.Filled_data.address1;
          this.bio_data_details.address_line2 = this.Filled_data.address2;
          this.bio_data_details.address_city = this.Filled_data.city;
          this.bio_data_details.address_country = this.Filled_data.country;
          this.bio_data_details.email = this.Filled_data.email;
          this.bio_data_details.comments = this.Filled_data.comments;
          this.bio_data_details.phoneNumber = this.Filled_data.phoneNumber;
          this.bio_data_details.qualification = this.Filled_data.qualification;
          this.bio_data_details.address_state = this.Filled_data.state;
          this.bio_data_details.address_zipcode = this.Filled_data.zipCode;
        })
      }
    });
  }



}
