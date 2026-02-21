import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '치주치료',
    description: '잇몸 질환 전문 치료 — 스케일링, 치근 활택술, 치주 수술. 건강한 잇몸이 건강한 치아의 기초입니다.',
    openGraph: {
        title: '치주치료 | 더 바른 정성 치과',
        description: '건강한 잇몸이 건강한 치아의 기초입니다',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
