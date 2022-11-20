import Chart from "../template/Chart/Chart";

export default function SubcriptionChart(props){

    const chartData = [{'label':'jan',value:0},
    {'label':'feb',value:0},
    {'label':'Mar',value:0},
    {'label':'Apr',value:0},
    {'label':'May',value:0},
    {'label':'Jun',value:0},
    {'label':'Jul',value:0},
    {'label':'Aug',value:0},
    {'label':'Sep',value:0},
    {'label':'Oct',value:0},
    {'label':'Nov',value:0},
    {'label':'Dec',value:0}];


    for (const subcript of props.filterdata) {
        const mounth = subcript.date.getMonth;
        chartData[mounth].value += subcript.ammount;    
    }
    return(
        <>
            <Chart dataSet={chartData} />
        </>
    )
}