import { Inter } from "next/font/google";
import "./globals.css";
import store from "@/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Generated For completeting my task from care tutor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-them='light'>
      <body className={inter.className}>
        <div className='container mx-auto'>
        {/* <Provider store={store}> */}
          {children}
        {/* </Provider> */}
        </div>
      </body>
    </html>
  );
}
