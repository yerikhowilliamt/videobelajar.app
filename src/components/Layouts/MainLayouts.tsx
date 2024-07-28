const MainLayouts = ({children, gap, items}: any) => {
  return (
    <main className={`w-full min-h-screen bg-yellow-50 flex flex-col ${gap} justify-center ${items} pt-24 pb-7 px-5 md:pt-36 md:pb-16 md:px-[120px]`}>
      {children}
    </main>
  );
};

export default MainLayouts;