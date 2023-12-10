function BrightCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-lighOrange to-darkOrange rounded-xl shadow-xl shadow-[#f26f2391] flex flex-col items-center my-1 text-white py-4  px-4 w-full active:opacity-80">
      {children}
    </div>
  );
}

export default BrightCard;
