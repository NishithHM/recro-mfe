import { registerApplication, start, unloadApplication, unregisterApplication } from "single-spa"
export const mountingWithPropAndUnload =({prop, name, route})=>{
    try {
        unloadApplication(name).catch(err=>{
            console.log('err')
        }).finally(()=>{
            registerApplication(
                name,
                ()=> window.System.import(name),
                (location)=> {
                    return location.pathname === route
                },
                prop,
            )
        start()
        })
    } catch (error) {
        registerApplication(
            name,
            ()=> window.System.import(name),
            (location)=> {
                console.log(location.pathname)
                return location.pathname === route
            },
            prop
        )  
        start()
    }
    
}
