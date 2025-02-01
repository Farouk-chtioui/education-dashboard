import Sidebar from '../Sidebar';

function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;