import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '의료진 소개',
    description: '더 바른 정성 치과 대표원장 김지한 — 치의학 박사, 통합치의학과 전문의. 풍부한 임상 경험과 전문성으로 최선의 진료를 제공합니다.',
    openGraph: {
        title: '의료진 소개 | 더 바른 정성 치과',
        description: '대표원장 김지한 — 치의학 박사, 통합치의학과 전문의',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
