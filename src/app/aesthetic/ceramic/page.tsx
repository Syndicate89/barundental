'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Diamond, Shield, Sparkles, ArrowRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function CeramicPage() {
    return (
        <>
            <PageHero label="All Ceramic" title="올세라믹" subtitle="자연치아와 동일한 색상과 투명도의 프리미엄 보철"
                bgText="CERAMIC" breadcrumbs={[{ label: '미백 & 심미', href: '/aesthetic' }, { label: '올세라믹' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/ceramic.png" alt="올세라믹" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>올세라믹 크라운이란?</h3>
                            <p>금속 없이 100% 세라믹으로 제작된 보철물로, 자연치아와 거의 동일한 투명도와 색상을 재현하며, 생체 친화적이어서 잇몸에도 안전합니다.</p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />금속 프리 — 알레르기 걱정 없음</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />자연치아와 동일한 투명도</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />잇몸 변색 없음</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />우수한 강도와 내구성</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Advantages</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>올세라믹 vs 기존 보철 비교</motion.h2>
                    </motion.div>
                    <motion.div className={styles.featuresGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { icon: Sparkles, title: '자연스러운 심미성', desc: '금속 보철과 달리 빛 투과가 자연스러워 실제 치아와 구분이 어렵습니다.' },
                            { icon: Shield, title: '생체 친화성', desc: '금속 성분이 없어 알레르기 반응이 없고, 잇몸 경계 변색(블랙 마진)이 발생하지 않습니다.' },
                            { icon: Diamond, title: '뛰어난 내구성', desc: '고강도 지르코니아, 이맥스 등 최신 세라믹 소재로 오래 사용할 수 있습니다.' },
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

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Process</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>올세라믹 치료 과정</motion.h2>
                    </motion.div>
                    <motion.div className={styles.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { num: '01', title: '정밀 진단', desc: '구강 검진 및 디지털 스캔으로 치아 상태를 정확히 파악' },
                            { num: '02', title: '치아 삭제', desc: '최소한의 삭제로 보철물 공간을 마련하고 임시 치아 장착' },
                            { num: '03', title: '맞춤 제작', desc: '디지털 데이터를 기반으로 최적의 색상과 형태로 제작' },
                            { num: '04', title: '최종 장착', desc: '정밀하게 맞춤 제작된 올세라믹 크라운을 접착 및 마무리' },
                        ].map((step, i) => (
                            <motion.div key={i} variants={fadeInUp} className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.num}</div>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                                {i < 3 && <div className={styles.stepArrow}><ArrowRight size={16} /></div>}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section className={styles.ctaBanner} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <div className="container">
                    <h3>올세라믹 상담</h3>
                    <p>가장 자연스러운 보철 치료를 경험해 보세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a>
                </div>
            </motion.section>
        </>
    );
}
