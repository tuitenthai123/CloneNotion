import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = ({labelChart, labelX, arrLabelX, nameLeftY, typeChartLeftY, dataLeftY, labelLeftY, nameRightY, typeChartRightY, dataRightY, labelRightY}) => {
  const options = {
    title: {
      text: labelChart
    },
    series: [{
      name: nameLeftY,
      type: typeChartLeftY,
      data: dataLeftY
    },
    {
      name: nameRightY,
      type: typeChartRightY,
      data: dataRightY
    }
   ],
    xAxis: {
      categories: arrLabelX,
      title: {
              text: labelX
          }
      },
    yAxis:[{
      min: 0,
      title: {
                text: labelLeftY,
          },
          labels: {
                  overflow: 'justify'
              }
          },
          {
              min: 0,
              title: {
                      text: labelRightY,
              },
              labels: {
                      overflow: 'justify'
              },
              opposite: true
          }
  
      ],
  }
    return(
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
} 

export default Chart;