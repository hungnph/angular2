import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(listProducts : IProduct[], filterBy : string) : IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? listProducts.filter((product : IProduct) =>{
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : listProducts;
    }
}