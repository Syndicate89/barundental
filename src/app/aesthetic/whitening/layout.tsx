import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '원데이 미백',
    description: '하루 만에 완성되는 전문 치아 미백. 안전한 약제와 전문 장비로 자연스럽게 밝아지는 치아를 경험하세요.',
    openGraph: {
        title: '원데이 미백 | 더 바른 정성 치과',
        description: '하루 만에 완성되는 전문 치아 미백',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
