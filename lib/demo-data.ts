import { InventoryState } from './types';
const now='2026-06-19T09:00:00.000Z';
export const demoData:InventoryState={settings:{company:'Almacenes Nova Pyme',currency:'EUR',theme:'light'},categories:['Ferretería','Alimentación','Papelería','Tienda local','Limpieza','Electrónica'],suppliers:[
{id:'sup-1',name:'Suministros Norte',contact:'Laura Martín',phone:'+34 911 234 567',email:'laura@suministrosnorte.demo',address:'C/ Industria 12, Madrid',notes:'Entrega semanal de ferretería'},
{id:'sup-2',name:'Distribuciones Fresco',contact:'Javier Ruiz',phone:'+34 934 222 100',email:'pedidos@fresco.demo',address:'Mercabarna nave 8, Barcelona',notes:'Alimentación no perecedera'},
{id:'sup-3',name:'OfiPlus Mayorista',contact:'Nerea Soto',phone:'+34 955 778 812',email:'nerea@ofiplus.demo',address:'Av. Papel 45, Sevilla',notes:'Material de oficina y escolar'},
{id:'sup-4',name:'LocalTech',contact:'Pablo Gil',phone:'+34 963 555 909',email:'pablo@localtech.demo',address:'Pol. Mediterráneo, Valencia',notes:'Accesorios para tienda local'}],products:[
{id:'p-1',name:'Taladro percutor 650W',sku:'FER-TAL-650',category:'Ferretería',supplierId:'sup-1',stock:7,minStock:5,cost:38,price:59.9,location:'A-01-03',notes:'Modelo más vendido',createdAt:now,updatedAt:now},
{id:'p-2',name:'Caja tornillos inox 4x40',sku:'FER-TOR-440',category:'Ferretería',supplierId:'sup-1',stock:3,minStock:15,cost:3.2,price:6.5,location:'A-02-01',notes:'Reponer pronto',createdAt:now,updatedAt:now},
{id:'p-3',name:'Aceite oliva virgen 1L',sku:'ALI-ACE-1L',category:'Alimentación',supplierId:'sup-2',stock:26,minStock:12,cost:5.1,price:8.95,location:'B-01-02',notes:'Lote premium',createdAt:now,updatedAt:now},
{id:'p-4',name:'Café molido natural 250g',sku:'ALI-CAF-250',category:'Alimentación',supplierId:'sup-2',stock:0,minStock:10,cost:1.9,price:3.75,location:'B-03-04',notes:'Agotado tras promoción',createdAt:now,updatedAt:now},
{id:'p-5',name:'Cuaderno A4 tapa dura',sku:'PAP-CUA-A4',category:'Papelería',supplierId:'sup-3',stock:42,minStock:20,cost:1.1,price:2.8,location:'C-01-01',notes:'Colores surtidos',createdAt:now,updatedAt:now},
{id:'p-6',name:'Pack bolígrafos azules x10',sku:'PAP-BOL-10A',category:'Papelería',supplierId:'sup-3',stock:9,minStock:18,cost:1.6,price:3.9,location:'C-02-02',notes:'Stock bajo',createdAt:now,updatedAt:now},
{id:'p-7',name:'Auriculares USB-C básicos',sku:'LOC-AUR-USBC',category:'Electrónica',supplierId:'sup-4',stock:18,minStock:8,cost:4.8,price:12.9,location:'D-04-01',notes:'Para mostrador',createdAt:now,updatedAt:now},
{id:'p-8',name:'Detergente multiusos 5L',sku:'LIM-DET-5L',category:'Limpieza',supplierId:'sup-2',stock:5,minStock:6,cost:4.4,price:8.2,location:'E-01-05',notes:'Rotación mensual',createdAt:now,updatedAt:now}],movements:[
{id:'m-1',productId:'p-3',type:'entrada',quantity:24,date:'2026-06-18T10:30:00.000Z',reason:'Reposición semanal',user:'Ana López'},
{id:'m-2',productId:'p-4',type:'salida',quantity:12,date:'2026-06-18T17:10:00.000Z',reason:'Venta promoción',user:'Carlos Vega'},
{id:'m-3',productId:'p-2',type:'salida',quantity:8,date:'2026-06-17T12:20:00.000Z',reason:'Pedido cliente profesional',user:'Marta Prieto'},
{id:'m-4',productId:'p-8',type:'ajuste',quantity:1,date:'2026-06-16T09:15:00.000Z',reason:'Regularización inventario',user:'Ana López'}]};
