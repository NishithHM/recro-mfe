import React, { useEffect, useState } from 'react'
import { start, unregisterApplication, addErrorHandler } from 'single-spa'
import { mountingWithPropAndUnload } from './util'

addErrorHandler(err=>{
    console.log(err)
})

const Catalogue = ()=>{
    const [inc, setInc] = useState(0)

    useEffect(()=>{
        mountingWithPropAndUnload({prop:{}, name: '@recro/inspire', route:'/catalogue'})
    start()
    return ()=>{
        try {
        unregisterApplication('@recro/inspire')
        } catch (error) {
        }
    }
    }, [])
    
    useEffect(()=>{
        mountingWithPropAndUnload({prop:{inc}, name: '@recro/checkout', route:'/catalogue'})
    return ()=>{
        try {
        unregisterApplication('@recro/checkout')
        } catch (error) {
        }
    }
    }, [inc])

    return(
        <div>
            <div>
            catalogue page
            <button title="increment" onClick={()=> setInc(prev=> prev + 1)}>increment</button>
            </div>
            <div id="single-spa-application:@recro/checkout"/>
            <div id="single-spa-application:@recro/inspire"/>
        </div>
    )
}

export default Catalogue