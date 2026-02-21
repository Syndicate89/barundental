import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '사랑니 발치',
    description: '3D CT 기반 정밀 진단과 무통 마취 시스템으로 안전하고 세심한 사랑니 발치. 고난도 매복 사랑니 전문.',
    openGraph: {
        title: '사랑니 발치 | 더 바른 정성 치과',
        description: '구강악안면외과 전문의의 안전하고 세심한 발치',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
