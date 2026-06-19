import { demoData } from './demo-data';import { InventoryState, Product } from './types';
export const key='inventory-pyme-demo-v1'; export const uid=()=>Math.random().toString(36).slice(2,10);
export function status(p:Product){return p.stock<=0?'out':p.stock<=p.minStock?'low':'ok'}
export function money(n:number,c='EUR'){return new Intl.NumberFormat('es-ES',{style:'currency',currency:c}).format(n)}
export function load():InventoryState{if(typeof window==='undefined')return demoData;try{return JSON.parse(localStorage.getItem(key)||'')||demoData}catch{return demoData}}
export function save(s:InventoryState){localStorage.setItem(key,JSON.stringify(s))}
export const cloneDemo=():InventoryState=>JSON.parse(JSON.stringify(demoData));
export function csv(products:Product[]){const cols=['name','sku','category','stock','minStock','cost','price','location','notes'];return [cols.join(','),...products.map(p=>cols.map(k=>`"${String((p as any)[k]).replaceAll('"','""')}"`).join(','))].join('\n')}
