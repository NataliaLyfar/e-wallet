import Currency from 'components/Currency/Currency';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';
import IconButton from 'components/IconButton';
import { PlusOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home'
import Balance from '../components/Balance'
import Navigation from '../components/Navigation'

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>
        <Navigation/>
        <Balance/>
        <Home/>
      </div>
      <IconButton onClick={() => setIsModalOpen(true)}>
        <PlusOutlined style={{ fontSize: '20px' }} />
      </IconButton>

      {isModalOpen && (
        <ModalAddTransaction onClose={() => setIsModalOpen(false)} />
      )}
      <Currency />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DashboardPage;
