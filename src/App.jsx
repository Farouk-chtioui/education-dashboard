import { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('./components/layouts/DashboardLayout'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-indigo-100 to-indigo-50">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"/>
        </div>
      }>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;