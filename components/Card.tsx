function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full rounded-lg shadow-[0_0px_20px_-15px_rgba(0,0,0,0.3)]  p-4">
      {children}
    </div>
  );
}

export default Card;
