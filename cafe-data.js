// 동서대// 카페 데이터 - Leaflet.js 용으로 재구성 (좌표 수정)
const cafeData = [
    {
        name: '이디야 커피 IC빌딩점',
        latlng: [35.143744, 129.010981], // 수정된 좌표
        address: 'IC빌딩 1층',
        contact: '051-313-8981',
        hours: '미확인',
        menu: [
            {name: '아메리카노', price: 4000},
            {name: '카페라떼', price: 4500},
            {name: '바닐라라떼', price: 5000},
            {name: '카라멜마끼아또', price: 5500},
            {name: '카페모카', price: 5000},
            {name: '콜드브루', price: 5500},
            {name: '녹차라떼', price: 4500},
            {name: '초콜릿', price: 4500},
            {name: '유자차', price: 4000},
            {name: '허브티', price: 4000}
        ]
    },
    {
        name: '이디야 커피 민석도서관점',
        latlng: [35.144625, 129.009654], // 수정된 좌표
        address: '민석도서관 1층',
        contact: '051-313-8982',
        hours: '미확인',
        menu: [
            {name: '아메리카노', price: 4000},
            {name: '카페라떼', price: 4500},
            {name: '바닐라라떼', price: 5000},
            {name: '카라멜마끼아또', price: 5500},
            {name: '카페모카', price: 5000},
            {name: '콜드브루', price: 5500},
            {name: '녹차라떼', price: 4500},
            {name: '초콜릿', price: 4500},
            {name: '유자차', price: 4000},
            {name: '허브티', price: 4000}
        ]
    },
    {
        name: 'Buzz Café',
        latlng: [35.143860, 129.010560], // 수정된 좌표
        address: '전자정보관 1층',
        contact: '미확인',
        hours: '미확인',
        menu: [
            {name: '아메리카노', price: 3800},
            {name: '카페라떼', price: 4300},
            {name: '카푸치노', price: 4300},
            {name: '바닐라라떼', price: 4800},
            {name: '카라멜마끼아또', price: 4800},
            {name: '녹차라떼', price: 4300},
            {name: '초콜릿', price: 4300},
            {name: '과일에이드', price: 4500},
            {name: '스무디', price: 5000}
        ]
    },
    {
        name: 'Cafe Meal',
        latlng: [35.142980, 129.010120], // 수정된 좌표
        address: '글로벌빌리지 7층',
        contact: '051-321-1337',
        hours: '08:30 ~ 22:00',
        menu: [
            {name: '아메리카노', price: 3500},
            {name: '카페라떼', price: 4000},
            {name: '카푸치노', price: 4000},
            {name: '바닐라라떼', price: 4500},
            {name: '샌드위치', price: 5500},
            {name: '베이글', price: 4500},
            {name: '파니니', price: 6000},
            {name: '샐러드', price: 6500}
        ]
    },
    {
        name: 'Plaza Café',
        latlng: [35.143250, 129.009850], // 수정된 좌표
        address: '스튜던트플라자 3층',
        contact: '미확인',
        hours: '08:30 ~ 18:30',
        menu: [
            {name: '아메리카노', price: 3500},
            {name: '카페라떼', price: 4000},
            {name: '카푸치노', price: 4000},
            {name: '바닐라라떼', price: 4500},
            {name: '카라멜마끼아또', price: 4500},
            {name: '녹차라떼', price: 4000},
            {name: '초콜릿', price: 4000},
            {name: '과일에이드', price: 4500},
            {name: '스무디', price: 5000}
        ]
    },
    {
        name: 'Herrys Café',
        latlng: [35.143520, 129.009750], // 수정된 좌표
        address: '스튜던트플라자 1층',
        contact: '051-316-3690',
        hours: '08:30 ~ 19:30',
        menu: [
            {name: '아메리카노', price: 4000},
            {name: '카페라떼', price: 4500},
            {name: '카푸치노', price: 4500},
            {name: '바닐라라떼', price: 5000},
            {name: '카라멜마끼아또', price: 5000},
            {name: '콜드브루', price: 5500},
            {name: '녹차라떼', price: 4500},
            {name: '초콜릿', price: 4500},
            {name: '과일에이드', price: 5000},
            {name: '스무디', price: 5500}
        ]
    },
    {
        name: 'Evergreen Cafe',
        latlng: [35.144120, 129.009450], // 수정된 좌표
        address: '디자인홀 1층',
        contact: '미확인',
        hours: '미확인',
        menu: [
            {name: '아메리카노', price: 3800},
            {name: '카페라떼', price: 4300},
            {name: '카푸치노', price: 4300},
            {name: '바닐라라떼', price: 4800},
            {name: '녹차라떼', price: 4300},
            {name: '초콜릿', price: 4300},
            {name: '과일에이드', price: 4500},
            {name: '머핀', price: 3000},
            {name: '쿠키', price: 2000}
        ]
    },
    {
        name: 'Japanese Cafe',
        latlng: [35.144350, 129.011250], // 수정된 좌표
        address: '국제협력관 3층',
        contact: '미확인',
        hours: '미확인',
        menu: [
            {name: '아메리카노', price: 3800},
            {name: '카페라떼', price: 4300},
            {name: '말차라떼', price: 4800},
            {name: '말차', price: 4500},
            {name: '호지차', price: 4500},
            {name: '유자차', price: 4000},
            {name: '도라야키', price: 4000},
            {name: '다이후쿠', price: 3500},
            {name: '모찌', price: 3000}
        ]
    },
    {
        name: 'Chinese Café',
        latlng: [35.144580, 129.011450], // 수정된 좌표
        address: '국제관 1층',
        contact: '051-311-8489',
        hours: '미확인',
        menu: [
            {name: '아메리카노', price: 3800},
            {name: '카페라떼', price: 4300},
            {name: '우롱차', price: 4000},
            {name: '재스민차', price: 4000},
            {name: '보이차', price: 4500},
            {name: '에그타르트', price: 3500},
            {name: '월병', price: 4000},
            {name: '마라빵', price: 3500}
        ]
    }
];
