import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{

  products:Product[] = [];
  constructor(private prodcutservice : ProductsService, private router:Router){}

  ngOnInit(): void {
    this.prodcutservice.getAllProducts()
    .subscribe({
      next:(products)=>{
        this.products=products;
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }
  deleteProduct(id:string,name:string){
    console.log(id);
    if(confirm("Are you sure to delete this  " +name)) {
      this.prodcutservice.deleteProduct(id)
      .subscribe({
        next:(response) =>{
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/',{skipLocationChange:true})
          .then(()=>{
            this.router.navigate([currentUrl]);
          })
        }
      });
    } 
    // else{
    //   alert("No prodcut deleted");
    // }

  }

}
