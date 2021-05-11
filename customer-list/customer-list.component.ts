import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerCart } from '../customer-cart';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  //customers: any;

    customers:Customer[]=[];  
   Customers:Customer=new Customer(0,"","","","","");

  //  Customer: Observable<Customer[]> |  any;
  //     deleteCustomers:Observable<Customer> | any;
  //     UpdateCustomer:Observable<Customer> |any;

  constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit(): void {

    this.httpClientService.getCustomers().subscribe((data: any)=>this.Customers=data);


  }

  deleteCustomer(customer_id:number):void{

    this.httpClientService.deleteCustomerById(customer_id).subscribe(data=>
      {
        alert("Customer deleted Successfully");
        //location.reload();
      },
      error=>
      {
        alert("Customer not deleted successfully.....error!")
      }
      )

      //   this.deleteCustomers=this.httpClientService.deleteCustomer(cutomer_id);
      //    alert("Customer deleted Successfully");
      //    location.reload();
      //    this.deleteCustomers.subscribe(()=>this.httpClientService.getCustomers()); 
      //  }
  }

  updateCustomer(customer_id:number):void{
       this.router.navigate(['update',customer_id]);

}
}



