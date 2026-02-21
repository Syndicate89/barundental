'use client';

import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';

const REVIEWS = [
    { id: 1, name: '김**', rating: 5, treatment: '임플란트', content: '꼼꼼한 상담과 설명 덕분에 안심하고 시술받았습니다. 통증도 거의 없었고 결과도 매우 만족합니다.', date: '2025.01.18' },
    { id: 2, name: '이**', rating: 5, treatment: '치아미백', content: '원데이 미백으로 정말 확 밝아졌어요! 직원분들도 친절하시고 시술 과정도 편안했습니다.', date: '2025.01.15' },
    { id: 3, name: '박**', rating: 5, treatment: '사랑니 발치', content: '매복 사랑니라 걱정이 많았는데 전혀 아프지 않았어요. 정말 무통이더라구요. 추천합니다!', date: '2025.01.10' },
    { id: 4, name: '최**', rating: 4, treatment: '충치치료', content: '다른 곳에서 신경치료 해야 한다고 했는데 여기서는 레진으로 해결해 주셨어요. 과잉진료 없어서 좋습니다.', date: '2025.01.05' },
    { id: 5, name: '정**', rating: 5, treatment: '신경치료', content: '현미경으로 정밀하게 치료해 주셔서 자연치아를 살릴 수 있었습니다. 감사합니다.', date: '2024.12.28' },
    { id: 6, name: '한**', rating: 5, treatment: '올세라믹', content: '자연치아와 구분이 안 될 정도로 자연스러워요. 색상 맞춤도 완벽합니다!', date: '2024.12.20' },
];

export default function ReviewPage() {
    return (
        <>
            <PageHero label="Review" title="환자 후기" subtitle="더 바른 정성 치과를 경험한 환자분들의 생생한 후기"
                bgText="REVIEW" breadcrumbs={[{ label: '커뮤니티', href: '/community' }, { label: '환자 후기' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.featuresGrid}
                        style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {REVIEWS.map((review) => (
                            <motion.div key={review.id} variants={fadeInUp} className={styles.featureCard}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                    <div style={{
                                        width: 40, height: 40, borderRadius: 'var(--radius-full)',
                                        background: 'var(--color-primary-050)', color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <User size={18} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: 'var(--text-base)' }}>{review.name}</div>
                                        <div style={{ display: 'flex', gap: 2 }}>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} size={12} fill={i < review.rating ? 'var(--color-accent)' : 'none'} color={i < review.rating ? 'var(--color-accent)' : 'var(--color-border)'} />
                                            ))}
                                        </div>
                                    </div>
                                    <span style={{
                                        marginLeft: 'auto', padding: '2px 10px', borderRadius: 'var(--radius-full)',
                                        fontSize: 'var(--text-xs)', fontWeight: 600,
                                        background: 'var(--color-primary-050)', color: 'var(--color-primary)',
                                    }}>{review.treatment}</span>
                                </div>
                                <p className={styles.featureDesc}>{review.content}</p>
                                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-sm)' }}>{review.date}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section className={styles.ctaBanner} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <div className="container"><h3>직접 경험해 보세요</h3><p>정직한 진료, 정성을 다하는 치과를 경험하세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>예약하기 →</a></div>
            </motion.section>
        </>
    );
}
