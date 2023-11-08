import CategoryNav from "../components/home/CategoryNav"

export default function CategoriasLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className=" w-[90%] mx-auto">
        <div className="flex w-[90%] mx-auto">
        <CategoryNav/>
          
        </div>
        {children}
      </div>
    )
  }