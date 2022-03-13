import s from './Style.module.css'
import {useEffect} from "react";

export const someTime = (min: number, max: number) => {
    return Math.floor(min + Math.random() * (max - min + 1))
}

export const FindUsersInDB = () => {
    useEffect(() => {

        const findUsersInDB = (id: number) => {
            const users = [
                {id: 1, name: 'Sveta', friend: 'Dima'},
                {id: 2, name: 'Dima', friend: 'Valera'},
                {id: 3, name: 'Victor', friend: 'Sveta'},
            ]

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const result = users.filter(u => u.id === id)
                    if (result.length > 0) {
                        resolve(result[0])
                    } else {
                        reject('user not found')
                    }
                }, someTime(500, 1500))
            })

        }
        findUsersInDB(4)
            .then(data => console.log(data))
            .catch(error => console.warn(error))

    }, [])

    return (
        <div className={s.wrapper}>
            FindUsersDB example
        </div>
    )
}