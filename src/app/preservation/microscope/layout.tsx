import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '미세현미경 신경치료',
    description: '최대 25배 확대 미세현미경으로 정밀한 신경치료. 높은 치료 성공률로 자연치아를 최대한 보존합니다.',
    openGraph: {
        title: '미세현미경 신경치료 | 더 바른 정성 치과',
        description: '자연치아를 살리는 정밀 신경치료',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
