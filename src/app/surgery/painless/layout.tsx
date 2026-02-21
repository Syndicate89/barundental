import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '무통 마취 시스템',
    description: '3단계 무통 마취 프로세스로 통증 걱정 없는 편안한 치과 치료. 표면 마취, 전자 마취기, 극세 바늘 사용.',
    openGraph: {
        title: '무통 마취 시스템 | 더 바른 정성 치과',
        description: '통증 걱정 없는 편안한 치과 치료',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
