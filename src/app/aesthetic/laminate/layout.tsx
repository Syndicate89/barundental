import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '라미네이트',
    description: '최소 삭제로 아름다운 미소를 완성하는 심미 보철. 치아 변색, 틈새, 형태 개선에 효과적입니다.',
    openGraph: {
        title: '라미네이트 | 더 바른 정성 치과',
        description: '최소 삭제로 아름다운 미소를 완성하는 심미 보철',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
