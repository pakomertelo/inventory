import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Inventario Pyme Pro', description: 'Demo SaaS de control de inventario para pymes, lista para Vercel.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es" suppressHydrationWarning><body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">{children}</body></html>}
