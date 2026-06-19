export type StockStatus='ok'|'low'|'out'; export type MovementType='entrada'|'salida'|'ajuste';
export type Product={id:string;name:string;sku:string;category:string;supplierId:string;stock:number;minStock:number;cost:number;price:number;location:string;notes:string;createdAt:string;updatedAt:string};
export type Supplier={id:string;name:string;contact:string;phone:string;email:string;address:string;notes:string};
export type Movement={id:string;productId:string;type:MovementType;quantity:number;date:string;reason:string;user:string};
export type Settings={company:string;currency:string;theme:'light'|'dark'};
export type InventoryState={products:Product[];suppliers:Supplier[];categories:string[];movements:Movement[];settings:Settings};
