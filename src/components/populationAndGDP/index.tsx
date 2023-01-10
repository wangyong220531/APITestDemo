import { Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import Styles from "./index.module.less"

function PopulationAndGDP() {
    interface DataType {
        key: string
        region: string
        population: number
        gdp: string
        tags: string[]
    }

    const columns: ColumnsType<DataType> = [
        {
            title: "地区",
            dataIndex: "region",
            key: "region",
            render: text => <a>{text}</a>
        },
        {
            title: "人口",
            dataIndex: "population",
            key: "population"
        },
        {
            title: "GDP",
            dataIndex: "gdp",
            key: "gdp"
        },
        // {
        //     title: "Tags",
        //     key: "tags",
        //     dataIndex: "tags",
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map(tag => {
        //                 let color = tag.length > 5 ? "geekblue" : "green"
        //                 if (tag === "loser") {
        //                     color = "volcano"
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 )
        //             })}
        //         </>
        //     )
        // },
        // {
        //     title: "Action",
        //     key: "action",
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <a>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </Space>
        //     )
        // }
    ]

    const data: DataType[] = [
        {
            key: "1",
            region: "John Brown",
            population: 32,
            gdp: "New York No. 1 Lake Park",
            tags: ["nice", "developer"]
        },
        {
            key: "2",
            region: "Jim Green",
            population: 42,
            gdp: "London No. 1 Lake Park",
            tags: ["loser"]
        },
        {
            key: "3",
            region: "Joe Black",
            population: 32,
            gdp: "Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"]
        }
    ]

    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default PopulationAndGDP
