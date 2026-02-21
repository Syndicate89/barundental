'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Image as ImageIcon, Layers } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function LaminatePage() {
    return (
        <>
            <PageHero label="Laminate" title="라미네이트" subtitle="최소 삭제로 아름다운 미소를 완성하는 심미 보철"
                bgText="LAMINATE" breadcrumbs={[{ label: '미백 & 심미', href: '/aesthetic' }, { label: '라미네이트' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/laminate.png" alt="라미네이트" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>라미네이트란?</h3>
                            <p>치아 표면을 최소한으로 삭제한 후, 얇은 세라믹 셸을 부착하여 치아의 색상, 형태, 크기를 개선하는 심미 보철 시술입니다.</p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />최소 삭제량 (0.3~0.5mm)</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />자연치아와 동일한 투명도</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />변색, 틈새, 형태 개선 가능</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />우수한 내구성과 심미성</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Ideal For</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>이런 분께 추천합니다</motion.h2>
                    </motion.div>
                    <motion.div className={styles.featuresGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { icon: ImageIcon, title: '치아 변색', desc: '미백으로 해결되지 않는 심한 변색이 있으신 분' },
                            { icon: ImageIcon, title: '치아 사이 틈', desc: '앞니 사이 벌어짐이 신경 쓰이시는 분' },
                            { icon: ImageIcon, title: '치아 형태', desc: '치아의 크기나 형태가 불균형한 분' },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp} className={styles.featureCard}>
                                <div className={styles.featureIcon}><item.icon size={24} /></div>
                                <h4 className={styles.featureTitle}>{item.title}</h4>
                                <p className={styles.featureDesc}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section className={styles.ctaBanner} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <div className="container">
                    <h3>라미네이트 상담</h3>
                    <p>자연스럽고 아름다운 미소를 완성해 드립니다</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a>
                </div>
            </motion.section>
        </>
    );
}
