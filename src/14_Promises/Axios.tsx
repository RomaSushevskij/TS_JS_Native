import {useEffect} from "react";
import {someTime} from "./FindUsersInDB";

export const Axios = () => {
    useEffect(() => {

        const axios = {
            _result(url: string, data: any) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        let responseData: object = {
                            text: `you choose ${url}`
                        }
                        if (url.indexOf('google') > 0) {
                            responseData = {
                                message: `google helps for many people`,
                                requestedCount: data.count
                            }

                        }
                        resolve({
                            request: {},
                            status: 200,
                            headers: {},
                            config: {},
                            data: responseData
                        })
                    }, someTime(500, 1500))
                })
            },
            get(url: string, data: any) {
                return this._result(url, data)
            },
            post(url: string, data: any) {
            },
        }

        axios.get('http://google.com', {count: 3})
            .then(response => console.log(response))

    }, [])

    return (
        <div>
            Axios example
        </div>
    )
}