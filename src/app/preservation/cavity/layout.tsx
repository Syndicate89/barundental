import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '충치치료',
    description: '충치 진행 단계별 맞춤 치료 — 레진, 인레이, 온레이, 크라운. 최소 삭제 원칙으로 자연치아를 최대한 보존합니다.',
    openGraph: {
        title: '충치치료 | 더 바른 정성 치과',
        description: '초기 발견과 정확한 치료로 자연치아를 보존합니다',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
