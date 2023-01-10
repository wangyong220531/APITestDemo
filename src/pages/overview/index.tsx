import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon"
import PopulationAndGDP from "../../components/populationAndGDP"
import Icon from "@ant-design/icons"
import style from "./index.module.less"

function Overview() {
    const PopulationSvg = () => (
        <svg className="icon" viewBox="0 0 1024 1024" p-id="2529" width="38" height="38">
            <path
                d="M864.64 772.949333c69.205333 0 103.552-9.728 103.552-55.125333 6.058667-127.104-75.221333-239.018667-189.653333-266.24 66.218667-33.237333 96.341333-114.901333 66.218666-187.52-27.136-63.530667-115.84-93.866667-179.157333-75.648 79.872 75.648 94.165333 201.045333 19.626667 281.386667 115.712 42.197333 179.413333 165.546667 179.413333 303.146666z m-274.901333-285.696c105.130667 21.504 227.328 91.306667 227.328 292.693334 0 53.717333-70.997333 53.717333-301.184 53.717333-232.96 0-301.141333 0-301.141334-53.717333 0-198.698667 122.197333-271.274667 227.328-292.693334-82.346667-42.965333-110.805333-142.336-70.997333-222.933333a156.416 156.416 0 0 1 215.893333-67.157333c76.629333 42.965333 107.946667 142.421333 65.28 220.288-14.250667 32.170667-36.992 53.674667-62.506666 69.802666z m-424.96 285.696c-69.205333 0-103.552-9.728-103.552-55.125333-6.016-127.104 75.221333-239.018667 189.653333-266.24C184.746667 418.346667 154.538667 336.682667 184.746667 264.106667c27.093333-63.530667 115.84-93.866667 179.114666-75.648-79.872 75.648-94.165333 201.045333-19.626666 281.386666-115.712 42.197333-179.413333 165.546667-179.413334 303.146667z"
                fill="#FF8F00"
                p-id="2530"
            ></path>
        </svg>
    )

    const GDPSvg = () => (
        <svg className="icon" viewBox="0 0 1024 1024" p-id="5486" width="34" height="34">
            <path d="M979.2 158.848a32 32 0 0 0-38.4-23.936l-166.848 38.656a32 32 0 0 0-15.808 53.408L794.56 264.64l-194.56 173.568-101.024-95.68a32 32 0 0 0-45.152 1.152l-216.736 227.264A64 64 0 1 0 288 633.6c0-6.944-1.376-13.472-3.424-19.712l193.536-202.944 99.232 93.952a32 32 0 0 0 43.296 0.64L839.04 310.72l41.504 42.976a32 32 0 0 0 53.92-13.92l44.448-165.408a31.84 31.84 0 0 0 0.288-15.52z" p-id="5487" fill="#f81334"></path>
            <path d="M928 450.464a32 32 0 0 0-32 32V736a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h530.656a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v576a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96v-253.536a32 32 0 0 0-32-32zM912 896h-800a32 32 0 0 0 0 64h800a32 32 0 0 0 0-64z" p-id="5488" fill="#f81334"></path>
        </svg>
    )

    const PopulationIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={PopulationSvg} {...props} />
    const GDPIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={GDPSvg} {...props} />

    return (
        <>
            <div className={style["container"]}>
                <div className={style["population-container"]}>
                    <div className={style["population-container-firstItem"]}>
                        <PopulationIcon />
                        <div className={style["population-title"]}>人口</div>
                    </div>
                    <div className={style["population-statistic"]}>123456</div>
                </div>
                <div className={style["gdp-container"]}>
                    <div className={style["gdp-container-firstItem"]}>
                        <GDPIcon />
                        <div className={style["gdp-title"]}>GDP</div>
                    </div>
                    <div className={style["gdp-statistic"]}>987654</div>
                </div>
                <div className={style["data-table"]}>
                    <PopulationAndGDP />
                </div>
            </div>
        </>
    )
}

export default Overview
