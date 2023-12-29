'use client'

import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import {useState, useEffect} from 'react'

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

export type iSeries = {
  name: string
  data: any[]
  type: "line" | "column" | "area" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined
  fill?: "solid" | "gradient"
}

interface iChart {
  type: "area" | "line" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined
  chartId: string
  categories: any[]
  seriesData: iSeries[]
  seriesLabel: any[]
  height?: number | string
  width?: number | string
  title?: string
  subtitle?: string
  enableZoom?: boolean
  enableLabel?: boolean
  curve?: "straight" | "smooth" | "stepline" | "monotoneCubic" | ("straight" | "smooth" | "stepline" | "monotoneCubic")
  chartTitle?: string
  titlePosition?: "left" | "right"
  gridColor: string
  gridOpacity?: GLfloat
  yTitle?: string
  xTitle?: string
}



export const Chart = (props: iChart) => {
  const { chartTitle, yTitle, xTitle, gridColor, gridOpacity, titlePosition, enableZoom = false, curve = "straight", enableLabel, title, subtitle, type, chartId, categories, seriesData, height = "180px", width = "100%", seriesLabel } = props

  const [chartData, setChartData] = useState<iSeries[]>([])

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setChartData(seriesData); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, [seriesData]); 





 

  return (
    <Box>
      <ApexChart


        options={{

          colors: ["#4545FE", "#12D8A0", "#FF6A6A"],

          // chart

          chart: {
            fontFamily: "inter",
            id: chartId,
            type: type,
            zoom: {
              enabled: enableZoom
            },
            toolbar: { show: false },

          },

          // data label

          dataLabels: {
            enabled: enableLabel
          },

          // stroke
          stroke: {
            width: 3,
            curve: 'smooth',
            lineCap: 'round',
          },

          // title

          title: {
            text: chartTitle,
            align: titlePosition
          },

          // grid

          grid: {
            strokeDashArray: 3,
            row: {
              colors: [gridColor, 'transparent'],
              opacity: gridOpacity
            }
          },
          // x axis
          xaxis: {
            categories: categories,
            type: 'category',

            title: {
              text: xTitle
            }
          },

          // y asxis

          yaxis: [ {
            axisTicks: {
              show: false
            },

            title: {
              text: yTitle
            }
          }],


          // Legend
          legend: {
            show: true,
            fontSize: '13',
            position: 'top',
            horizontalAlign: 'left',
            markers: {
              radius: 12,
            },
            fontWeight: 500,
            itemMargin: {
              horizontal: 8,
            },
          },


          // states

          // States
          states: {
            hover: {
              filter: {
                type: 'lighten',
                value: 0.04,
              },
            },
            active: {
              filter: {
                type: 'darken',
                value: 0.88,
              },
            },
          },


          // Fill
          fill: {
            opacity: 1,
            gradient: {
              type: 'vertical',
              shadeIntensity: 0,
              opacityFrom: 0.4,
              opacityTo: 0,
              stops: [0, 100],
            },
          },


        }}

        // label

        label={seriesLabel && seriesLabel}

        series={chartData}

        height={height} width={width} />
    </Box>
  )
}