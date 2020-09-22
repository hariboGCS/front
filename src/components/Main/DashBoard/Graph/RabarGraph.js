import { ResponsiveRadar } from '@nivo/radar'
import React from 'react'

const CirculGraph = ({ data }) => (
    <ResponsiveRadar
        data={data}
        keys={['내 점수', '평균']}
        indexBy="taste"
        maxValue="auto"
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        curve="linearClosed"
        borderWidth={0}
        borderColor={['#4378CA', '#909090']}
        gridLevels={5}
        gridShape="linear"
        gridLabelOffset={0}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-15}
        colors={['#4378CA', '#909090']}
        fillOpacity={1}
        blendMode="multiply"
        animate={false}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                        },
                    },
                ],
            },
        ]}
    />
)

export default CirculGraph
