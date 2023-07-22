import Sidebar from '@/app/components/sidebar/Sidebar'
const layout = async ({children}:{children : React.ReactNode}) => {
  return ( 
    <Sidebar>
     <div className="h-full">
      {children}
     </div>
    </Sidebar>
    
  )
}

export default layout
