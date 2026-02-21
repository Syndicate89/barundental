import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '임플란트 가이드',
    description: '임플란트 시술이 처음이신 분을 위한 종합 가이드. 임플란트 과정, 수명, 비용, 주의사항까지 쉽게 알려드립니다.',
    openGraph: {
        title: '임플란트 가이드 | 더 바른 정성 치과',
        description: '임플란트 시술 과정부터 관리까지 종합 안내',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
