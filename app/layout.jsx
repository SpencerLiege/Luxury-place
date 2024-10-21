import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footber';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext'
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'LuxPlace',
  description: 'Find The Perfect Rental Property',
  keywords: 'rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
      <html>
        <body className='relative'>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer /> 
        </body>
      </html>
      </GlobalProvider>
    </AuthProvider>

    );
}
 
export default MainLayout;