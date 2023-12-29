import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


const Charts = (props) => {
  const {fruit1, fruit2, mode} = props;
  const label = ["carbohydrates", "protein", "fat", "calories", "sugar"]
  const getData = (fruit) => {
    let data = [];
    for(const key in fruit[1]) {
      data.push(fruit[1][key]);
      
    }
    return data;
  

  }

  return(
    <>
      {mode === 'bar' ? 
      <Bar 
        width={'100%'}
        height={'auto'}
        style={{maxHeight: '500px'}}
        datasetIdKey='id'
        data={{
          labels: label,
          datasets: [
            { 
            id:1,
               label: `${fruit1[0]} `,
              data: getData(fruit1),
              backgroundColor: 'rgb(35, 197, 82, 0.6)',
              borderColor: "#363636"
               },

            { 
              id:2,
                 label: `${fruit2[0]} `,
                data: getData(fruit2),
                backgroundColor: 'rgb(248, 79, 49, 0.8)',
                borderColor: "#363636"
                 },
            
          ]
        }}
        /> : <Line 
                  width={'100%'}
                  height={'auto'}
                  style={{maxHeight: '500px'}}
                  datasetIdKey='id'
                  data={{
                    labels: label,
                    datasets: [
                      { 
                      id:1,
                         label: `${fruit1[0]} `,
                        data: getData(fruit1),
                        fill: 'start',
                        backgroundColor: 'rgb(35, 197, 82, 0.6)',
                        borderColor: "#363636"
                         },

                      { 
                        id:2,
                           label: `${fruit2[0]} `,
                          data: getData(fruit2),
                        fill: 'start',
                          backgroundColor: 'rgb(248, 79, 49, 0.8)',
                          borderColor: "#363636"
                           },

                    ]
                  }}

               />
      }
    </>
  )
  
}

export default Charts;