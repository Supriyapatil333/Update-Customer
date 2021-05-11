import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerCart } from '../customer-cart';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer_id: any;
  customer: Customer=new Customer(0,"","","","","");
  id!: number;
  UpdateCustomer: any;
  updateCustomer: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private httpClientService: HttpClientService) { }
  
  ngOnInit(): void {

    this.customer_id = this.route.snapshot.params['customer.customer_id'];
    this.customer_id=Number.parseInt(this.customer_id);
    this.customer=new Customer(this.customer_id,"","","","","");
     console.log(this.customer_id);
     this.httpClientService.getCustomerById(this.customer_id).subscribe(data=>
     { this.customer=data;},
    error =>console.log(error));

}
onSubmit()
{
  //this.httpClientService.updateCustomer(this.customer).subscribe(data=>alert("Customer updated successfully"),
  //error=>console.log(error));


  this.updateCustomer=this.httpClientService.updateCustomer(this.customer);
   this.updateCustomer.subscribe(()=>{alert("Customer updated successfully.");},
   () => alert("customer does not exist in the database cannot be updated"));
    this.router.navigate(['/customers']);
    }
    list(){
      this.router.navigate(['customers']);

}
}


