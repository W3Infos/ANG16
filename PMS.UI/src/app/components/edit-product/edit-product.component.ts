import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  updateProductObj:Product={
    id:'',
    name:'',
    type:'',
    color:'',
    price:0

  };
  constructor(private prodcutservice: ProductsService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void{
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.prodcutservice.getProduct(id)
          .subscribe({
            next:(response)=>{
              this.updateProductObj = response;
            },
            error: (response)=>{
              console.log(response);
            }

          })
        }


      }
    });



  }
  updateProduct(){

    this.prodcutservice.updateProduct(this.updateProductObj.id,this.updateProductObj)
    .subscribe({
      next:(response) => {
        this.router.navigate(['products']);
      },
      error:(err) =>{
        console.log(err);
      }
      
    })

  }

}
 