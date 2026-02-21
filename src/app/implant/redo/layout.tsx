import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '재수술 임플란트',
    description: '임플란트 실패 후 재수술 전문. 정밀한 원인 분석과 풍부한 경험으로 성공적인 재식립을 약속합니다.',
    openGraph: {
        title: '재수술 임플란트 | 더 바른 정성 치과',
        description: '임플란트 실패, 다시 시작할 수 있습니다',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
