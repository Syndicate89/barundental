import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '브랜드 스토리',
    description: '더 바른 정성 치과의 브랜드 스토리 — 자연치아의 가치를 먼저 생각하는, 원칙에 충실한 진료 철학을 소개합니다.',
    openGraph: {
        title: '브랜드 스토리 | 더 바른 정성 치과',
        description: '자연치아의 가치를 먼저 생각하는, 원칙에 충실한 진료 철학',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
