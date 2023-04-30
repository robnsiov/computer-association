const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col">
        {children}
      </div>
    </>
  );
};

export default Layout;
