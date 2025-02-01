import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Classes from './pages/Classes';
import Login from './pages/login';
import Register from './pages/register';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { AuthProvider } from './context/AuthContext';
import QuizGame from './components/Game/QuizGame';
import { ErrorBoundary } from 'react-error-boundary';
import Stats from './components/Statstics/Stats';
import Layout from './components/layout/Layout';
import PageContainer from './components/PageContainer';

function ErrorFallback({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-red-600">Something went wrong:</h2>
        <pre className="mt-2">{error.message}</pre>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Layout><Navigate to="/stats" replace /></Layout></ProtectedRoute>
  },
  {
    path: '/stats',
    element: <ProtectedRoute><Layout><Stats /></Layout></ProtectedRoute>
  },
  {
    path: '/classes',
    element: <ProtectedRoute><Layout><Classes /></Layout></ProtectedRoute>
  },
  {
    path: '/games',
    element: <ProtectedRoute><Layout><QuizGame /></Layout></ProtectedRoute>
  },
  {
    path: '/courses',
    element: (
      <ProtectedRoute>
        <Layout>
          <PageContainer>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              Courses Page
            </div>
          </PageContainer>
        </Layout>
      </ProtectedRoute>
    )
  },
  {
    path: '/login',
    element: <PublicRoute><Login /></PublicRoute>
  },
  {
    path: '/register',
    element: <PublicRoute><Register /></PublicRoute>
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />
  }
]);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;