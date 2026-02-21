import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '치료후기',
    description: '더 바른 정성 치과 환자분들의 생생한 치료 후기를 확인하세요. 임플란트, 미백, 신경치료 후기.',
    openGraph: {
        title: '치료후기 | 더 바른 정성 치과',
        description: '환자분들의 생생한 치료 후기',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
