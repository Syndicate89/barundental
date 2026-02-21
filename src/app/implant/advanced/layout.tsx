import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '고난도 임플란트',
    description: '뼈 이식, 상악동 거상술, 전악 임플란트 등 고난도 케이스 전문. 풍부한 임상 경험의 전문의가 안전하게 시술합니다.',
    openGraph: {
        title: '고난도 임플란트 | 더 바른 정성 치과',
        description: '풍부한 임상 경험으로 어려운 케이스도 안전하게',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
