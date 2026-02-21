import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '온라인 상담 & 예약',
    description: '더 바른 정성 치과 온라인 상담 및 예약. 전화, 카카오톡, 온라인 폼으로 편리하게 상담하세요.',
    openGraph: {
        title: '온라인 상담 & 예약 | 더 바른 정성 치과',
        description: '편리한 방법으로 상담과 예약을 해 보세요',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
