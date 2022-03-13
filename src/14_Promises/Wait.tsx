import {useEffect} from "react";
import s from './Style.module.css'

export const Wait  =() => {
    useEffect(()=>{

        function wait(time:number) {
            return new Promise((resolve, reject)=> {
                setTimeout(() => {
                    resolve(null)
                }, time)
            })
        }
        async function run () {
            await wait(1000)
            console.log(1)
            await wait(1000)
            console.log(2)
            await wait(1000)
            console.log(3)
            await wait(1000)
            console.log(4)
            await wait(1000)
            console.log(5)
        }
        run()

    },[])

    return (
        <div className={s.wrapper}>
            Function wait example
        </div>
    )
}

