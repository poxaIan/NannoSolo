import Breadcrumb from '@/components/Breadcrumb'
import Services from '@/components/Services'
import Subscribe from '@/components/Subscribe'
import React from 'react'

const ServicePage = () => {
    return (
        <>
            {/* <div className="pt-10 pb-10 bg-bgGray">
                <div className="container">
                    <h1 className='heading'>Our Services</h1>
                    <div className="navigation">
                        <Breadcrumb />
                    </div>
                </div>
            </div>*/}



            <Services />
            <Subscribe />
        </>
    )
}

export default ServicePage