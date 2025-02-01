import Header from './Header';

function PageContainer({ children, title }) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        <div className="p-3 sm:p-4 lg:p-5">
          {children}
        </div>
      </main>
    </div>
  );
}

export default PageContainer;
