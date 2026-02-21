import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '올세라믹',
    description: '금속 없이 100% 세라믹으로 자연치아와 동일한 투명도와 색상 재현. 알레르기 걱정 없는 생체 친화적 보철.',
    openGraph: {
        title: '올세라믹 | 더 바른 정성 치과',
        description: '자연치아와 동일한 색상과 투명도의 프리미엄 보철',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
