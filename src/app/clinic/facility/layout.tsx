import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '시설 둘러보기',
    description: '더 바른 정성 치과의 최신 시설과 장비를 소개합니다. 1인 1기구 멸균 시스템, 3D CT, 디지털 장비를 갖춘 쾌적한 진료 환경.',
    openGraph: {
        title: '시설 둘러보기 | 더 바른 정성 치과',
        description: '최신 시설과 장비를 갖춘 쾌적한 진료 환경',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
