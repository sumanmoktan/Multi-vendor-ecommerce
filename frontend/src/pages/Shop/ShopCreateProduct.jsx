import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../component/Shop/Layout/DashboardSideBar'
import CreateProduct from '../../component/Shop/Layout/CreateProduct'

const ShopCreateProduct = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-center justify-between w-full">
        <div className="w-[80px] sm:w-[330px]">
          <DashboardSideBar active={4} />
        </div>
        <div className="w-full justify-center flex">
            <CreateProduct />
        </div>
      </div>
</div>
  )
}

export default ShopCreateProduct