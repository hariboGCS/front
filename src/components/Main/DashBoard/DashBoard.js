import React from 'react'
import './DashBoard.scss'
import PositionBar from './Graph/BarGraph'
import CirculGraph from './Graph/RabarGraph'
import UpArrow from './upArrow.PNG'
import DownArrow from './downArrow.PNG'

const RankingItem = ({ title, score, max, unit, maxUnit }) => {
    return (
        <div className="ItemWrapper">
            <div className="titleContainer">
                <span>{title}</span>
            </div>
            <div className={'scoreWrapper'}>
                <span className="score">
                    {score}
                    {unit}
                </span>
                <span className={'unit'}>
                    {'\t'}/{max} {maxUnit}
                </span>
            </div>
            <div className="upDown">
                <img src={UpArrow} />
                <span>이번달 10{unit} 상승!</span>
            </div>
        </div>
    )
}

const DashBoard = () => {
    const dashBoardList = [
        { title: '점수', score: 340, max: 500, unit: '점', maxUnit: '점' },
        { title: '학급 순위', score: 4, max: 20, unit: '등', maxUnit: '명' },
        { title: '학년 순위', score: 20, max: 80, unit: '등', maxUnit: '명' },
        { title: '전교순위', score: 60, max: 240, unit: '등', maxUnit: '명' },
    ]
    const dashList = dashBoardList.map(
        ({ title, score, max, unit, maxUnit }) => (
            <RankingItem
                title={title}
                score={score}
                unit={unit}
                max={max}
                maxUnit={maxUnit}
                key={title}
            />
        )
    )
    return (
        <div className={'DashContain'}>
            <h3>2학년 김준우</h3>
            <div className={'GridForm'}>
                <div className={'RankingWrapper'}>{dashList}</div>
                <div className={'GraphWrapper'}>
                    <PositionBar data={graphData} />
                </div>
                <div className={'AverageWrapper'}>
                    <CirculGraph data={raderData} />
                </div>
            </div>
        </div>
    )
}

export default DashBoard

let graphData = [
    {
        country: '직업기초능력',
        '내 점수': 155,
        burgerColor: 'hsl(190, 90%, 50%)',
        '상위 5%': 144,
        kebabColor: 'hsl(73, 70%, 50%)',
        평균: 122,
        friesColor: 'hsl(155, 70%, 50%)',
    },
    {
        country: '전공능력',
        '내 점수': 96,
        burgerColor: 'hsl(190, 90%, 50%)',
        '상위 5%': 122,
        kebabColor: 'hsl(73, 70%, 50%)',
        평균: 103,
        friesColor: 'hsl(155, 70%, 50%)',
    },
    {
        country: '인성ㆍ직업의식',
        '내 점수': 104,
        burgerColor: 'hsl(190, 90%, 50%)',
        '상위 5%': 122,
        kebabColor: 'hsl(73, 70%, 50%)',
        평균: 100,
        friesColor: 'hsl(155, 70%, 50%)',
    },
    {
        country: '인문ㆍ독서',
        '내 점수': 125,
        burgerColor: 'hsl(190, 90%, 50%)',
        '상위 5%': 98,
        kebabColor: 'hsl(73, 70%, 50%)',
        평균: 155,
        friesColor: 'hsl(155, 70%, 50%)',
    },
    {
        country: '외국어 능력',
        '내 점수': 100,
        burgerColor: 'hsl(190, 90%, 50%)',
        '상위 5%': 138,
        kebabColor: 'hsl(73, 70%, 50%)',
        평균: 144,
        friesColor: 'hsl(155, 70%, 50%)',
    },
]

let raderData = [
    {
        taste: '직업기초능력',
        '내 점수': 38,
        평균: 118,
    },
    {
        taste: '전공능력',
        '내 점수': 68,
        평균: 27,
    },
    {
        taste: '인성ㆍ직업의식',
        '내 점수': 97,
        평균: 33,
    },
    {
        taste: '인문ㆍ독서',
        '내 점수': 62,
        평균: 111,
    },
    {
        taste: '외국어 능력',
        '내 점수': 84,
        평균: 21,
    },
]
