// 사이트 상수 — 더 바른 정성 치과

export const CLINIC_INFO = {
    name: '더 바른 정성 치과의원',
    nameEn: 'The Barun Dental Clinic',
    slogan: '자연치아의 가치를 먼저 생각하는, 원칙에 충실한 진료',
    phone: '02-0000-0000',
    kakaoUrl: '#',
    naverMapUrl: '#',
    address: '서울특별시 OO구 OO로 000, 0층',
    businessNumber: '000-00-00000',
    ceo: '김지한',
    email: 'info@barundental.co.kr',
};

export const DOCTOR_INFO = {
    name: '김지한',
    title: '대표원장',
    degree: '치의학 박사',
    specialty: '통합치의학과 전문의',
    photo: '/images/doctor/doctor-profile.jpg',
    quote: '환자의 평생 구강 관리 파트너로서, 과잉 진료 없이 꼭 필요한 진료만을 약속합니다.',
    credentials: [
        '치의학 박사',
        '통합치의학과 전문의',
        '대한치과의사협회 정회원',
        '대한통합치의학회 정회원',
        '대한구강악안면외과학회 정회원',
        '대한치과보존학회 정회원',
    ],
};

export const CLINIC_HOURS = [
    { day: '월요일 - 금요일', hours: '09:30 - 18:30' },
    { day: '토요일', hours: '09:30 - 14:00' },
    { day: '점심시간', hours: '13:00 - 14:00' },
    { day: '일요일 / 공휴일', hours: '휴진' },
];

export const NAV_ITEMS = [
    {
        label: '병원 소개',
        href: '/clinic',
        children: [
            { label: '브랜드 스토리', href: '/clinic/story' },
            { label: '의료진 소개', href: '/clinic/doctor' },
            { label: '시설 둘러보기', href: '/clinic/facility' },
            { label: '진료안내 & 오시는 길', href: '/clinic/visit' },
        ],
    },
    {
        label: '임플란트 센터',
        href: '/implant',
        children: [
            { label: '임플란트 가이드', href: '/implant/guide' },
            { label: '디지털 임플란트', href: '/implant/digital' },
            { label: '고난도 임플란트', href: '/implant/advanced' },
            { label: '재수술 임플란트', href: '/implant/redo' },
        ],
    },
    {
        label: '미백 & 심미',
        href: '/aesthetic',
        children: [
            { label: '원데이 미백', href: '/aesthetic/whitening' },
            { label: '라미네이트', href: '/aesthetic/laminate' },
            { label: '올세라믹', href: '/aesthetic/ceramic' },
        ],
    },
    {
        label: '구강외과',
        href: '/surgery',
        children: [
            { label: '사랑니 발치', href: '/surgery/wisdom' },
            { label: '무통 마취 시스템', href: '/surgery/painless' },
        ],
    },
    {
        label: '치아보존',
        href: '/preservation',
        children: [
            { label: '신경치료', href: '/preservation/microscope' },
            { label: '충치치료', href: '/preservation/cavity' },
            { label: '치주치료', href: '/preservation/gum' },
        ],
    },
    {
        label: '커뮤니티',
        href: '/community',
        children: [
            { label: '공지사항', href: '/community/notice' },
            { label: '치료후기', href: '/community/review' },
            { label: '온라인 상담', href: '/community/consult' },
        ],
    },
];

// Core services for homepage cards
export const CORE_SERVICES = [
    {
        icon: 'implant',
        title: '임플란트 센터',
        description: '고난도 식립, 디지털 가이드, 재수술 전문 — 풍부한 임상 경험으로 안전하고 정밀한 임플란트',
        href: '/implant',
        features: ['디지털 가이드', '고난도 식립', '재수술 전문'],
    },
    {
        icon: 'sparkles',
        title: '치아미백 & 심미보철',
        description: '원데이 미백, 라미네이트, 올세라믹 — 자연스럽고 아름다운 미소를 되찾아 드립니다',
        href: '/aesthetic',
        features: ['원데이 미백', '라미네이트', '올세라믹'],
    },
    {
        icon: 'surgery',
        title: '사랑니 & 구강외과',
        description: '고난도 매복 사랑니, 무통 마취 시스템 — 구강악안면외과 전문의가 안전하게 진료합니다',
        href: '/surgery',
        features: ['매복 사랑니', '무통 마취', '안전 발치'],
    },
    {
        icon: 'microscope',
        title: '치아보존치료',
        description: '미세현미경 신경치료, 충치치료, 치주치료 — 자연치아를 최대한 보존하는 정밀 치료',
        href: '/preservation',
        features: ['미세현미경', '신경치료', '치주치료'],
    },
];

// USP items
export const USP_ITEMS = [
    {
        number: 1,
        unit: '인 1기구',
        title: '1인 1기구 멸균 시스템',
        description: '환자 한 분마다 개별 멸균된 기구를 사용하여 교차 감염을 원천 차단합니다.',
        icon: 'shield',
    },
    {
        number: 3,
        unit: 'D 정밀 진단',
        title: '3D CT 기반 최소 진료',
        description: '3D CT와 디지털 장비로 정밀 진단하여 꼭 필요한 치료만 시행합니다.',
        icon: 'scan',
    },
    {
        number: 100,
        unit: '%',
        title: '시술 보증제 시스템',
        description: '시술 후 보증기간 내 문제 발생 시 무상으로 재치료를 보장해 드립니다.',
        icon: 'badge-check',
    },
];
