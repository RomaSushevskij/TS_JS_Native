import s from './Style.module.css'
import {useEffect} from "react";

export const LocalStorageExample = () => {
    useEffect(() => {

        // Local Storage - работает синхронно. При работе с local storage стоит предусмотреть на персвективу
        // вариант перехода к работе с сервером. Поэтому стоит использовать промисификацию.
        const repo = {
            //синхронные варианты сохранения и получения чего-либо в local storage. Здесь, чтобы save мог сразу
            //вернуть результат, нужно, чтобы этот save был синхронным.
            save(data: any) {
                try {
                    localStorage.setItem('some-key', JSON.stringify(data))
                } catch (error) {
                    return false
                }
                return true
            },
            read(key: string) {
                try {
                    const result = localStorage.getItem(key)
                    if (result) {
                        return JSON.parse(result)
                    } else {
                        return null
                    }
                } catch (error) {
                    return 'NO DATA'
                }

            },
            //асинхронные варианты сохранения и получения чего-либо в local storage с использованием
            //промисификации и возможность в дальнейшем без особого труда перейти на работу с сервером.
            saveAsync(data: any) {
                return new Promise((resolve, reject) => {
                    try {
                        setTimeout(() => {
                            localStorage.setItem('some-key', JSON.stringify(data))
                            resolve(true)
                        }, 3000)

                    } catch (error) {
                        reject(error)
                    }
                })
            },
            readAsync(key: string) {
                return new Promise((resolve, reject) => {
                    try {
                        setTimeout(() => {
                            const result = localStorage.getItem(key)
                            if (result) {
                                resolve(JSON.parse(result))
                            } else {
                                resolve(null)
                            }
                        }, 3000)

                    } catch (error) {
                        reject('NO DATA')
                    }
                })
            }
        }


        //РАБОТА С СИНХРОННОЙ ВЕРСИЕЙ
        //SAVE
        // const result = repo.save({name: 'Roman'})
        // if (result) {
        //     console.log('SAVED')
        // }
        //READ
        // const resultGet = repo.read('some-key')
        // console.log(resultGet)

        //РАБОТА С АСИНХРОННОЙ ВЕРСИЕЙ
        //с использование then
        //SAVE
        // repo.saveAsync({name: 'Roman'})
        //     .then(() => console.log('SAVED'))
        //READ
        // repo.readAsync('some-key')
        //     .then((data) => console.log(data))

        //с использование async\await
        //SAVE
        // const save = async ()=>{
        //     await repo.saveAsync({name: 'Roman'})
        //     console.log('SAVED')
        // }
        // save()
        // //READ
        // const read = async (key: string) => {
        //     const data = await repo.readAsync(key)
        //     console.log(data)
        // }
        // read('some-key')

    }, [])
    return (
        <div className={s.wrapper}>
            Local storage example
        </div>
    )
}
