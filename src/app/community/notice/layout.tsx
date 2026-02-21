import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '공지사항',
    description: '더 바른 정성 치과의 공지사항, 휴진 안내, 이벤트 소식을 확인하세요.',
    openGraph: {
        title: '공지사항 | 더 바른 정성 치과',
        description: '더 바른 정성 치과 공지사항',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
