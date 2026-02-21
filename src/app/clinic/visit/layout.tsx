import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '진료안내 & 오시는 길',
    description: '더 바른 정성 치과 진료시간, 위치, 주차 안내. 월~금 09:30-18:30, 토 09:30-14:00. 서울특별시 소재.',
    openGraph: {
        title: '진료안내 & 오시는 길 | 더 바른 정성 치과',
        description: '진료시간, 위치, 주차 안내',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
