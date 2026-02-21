import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '디지털 임플란트',
    description: '3D 디지털 가이드 시스템으로 정밀하고 안전한 임플란트 식립. 0.1mm 단위 정밀 식립, 수술 시간 50% 단축, 최소 절개.',
    openGraph: {
        title: '디지털 임플란트 | 더 바른 정성 치과',
        description: '3D 디지털 가이드 시스템으로 정밀하고 안전한 임플란트',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
