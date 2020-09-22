import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

const PositionBar = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={['내 점수', '상위 5%', '평균']}
        indexBy="country"
        margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
        padding={0.5}
        innerPadding={10}
        groupMode="grouped"
        colors={['#4378CA', '#909090', '#C4C4C4']}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true,
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 4,
                spacing: 10,
            },
        ]}
        fill={[
            {
                match: {
                    id: 'fries',
                },
                id: 'dots',
            },
            {
                match: {
                    id: 'sandwich',
                },
                id: 'lines',
            },
        ]}
        borderRadius={5}
        borderColor={{ from: 'color', modifiers: [['darker', '0.4']] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'NCS 인증제',
            legendPosition: 'middle',
            legendOffset: 32,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '점수',
            legendPosition: 'middle',
            legendOffset: -40,
        }}
        enableLabel={false}
        labelSkipWidth={36}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', '2']] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 33,
                translateY: -33,
                itemsSpacing: 60,
                itemWidth: 40,
                itemHeight: 10,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 22,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
        animate={true}
        motionStiffness={85}
        motionDamping={11}
    />
)
export default PositionBar
