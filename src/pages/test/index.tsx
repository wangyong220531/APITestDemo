// import { useState } from "react"
import { Button } from "antd"
import axios from "axios"

export default function test() {
    // const [num, addOne] = useState(7)
    function QueryPortraitLib() {
        axios({
            url: "http://32.118.0.6:8989/scout/queryPortraitLibrary",
            method: "POST",
            data: {
                ascOrDesc: "",
                attribute: 0,
                auth: true,
                countImage: true,
                identityTypeVo: {
                    name: "",
                    serial: ""
                },
                keywords: "",
                mode: 0,
                objectType: 1,
                orderBy: "",
                otherType: 0,
                page: 0,
                pageSize: 10,
                rawType: 0,
                returnDel: true,
                senseType: 0,
                sortField: "update_time",
                sortType: "DESC",
                status: 0,
                tarLibSerials: [
                    ""
                ],
                trackTotalTargets: true
            }
        })
    }
    return <>
        {/* <div>{num}</div> */}
        <Button onClick={() => QueryPortraitLib()}>点击</Button>
    </>
}   