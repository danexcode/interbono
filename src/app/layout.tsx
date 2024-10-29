import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import "../styles/layout/layout.scss";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html>
            <head>
                
            </head>
            <body>
                <PrimeReactProvider>
                    {children}
                </PrimeReactProvider>
            </body>
        </html>
    );
}
