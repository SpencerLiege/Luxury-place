import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footber';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'LuxPlace',
  description: 'Find The Perfect Rental Property',
  keywords: 'rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body className='relative'>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer /> 
        </body>
      </html>
    </AuthProvider>

    );
}
 
export default MainLayout;