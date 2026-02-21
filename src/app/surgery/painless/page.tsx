'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Syringe, Shield, Heart } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function PainlessPage() {
    return (
        <>
            <PageHero label="Painless System" title="무통 마취 시스템" subtitle="통증 걱정 없는 편안한 치과 치료"
                bgText="PAINLESS" breadcrumbs={[{ label: '구강외과', href: '/surgery' }, { label: '무통 마취 시스템' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/painless.png" alt="무통 마취 시스템" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>무통 마취 시스템이란?</h3>
                            <p>표면 마취 → 전자 마취기로 일정한 속도의 마취액 주입 → 충분한 마취 시간 확보의 3단계 프로세스로, 마취 과정 자체의 통증을 최소화합니다.</p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />표면 마취제 선적용</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />전자 마취기 사용 (일정 속도)</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />극세 마취 바늘 사용</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />치과 공포증 환자 맞춤 케어</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Benefits</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>무통 마취의 장점</motion.h2>
                    </motion.div>
                    <motion.div className={styles.featuresGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { icon: Heart, title: '통증 최소화', desc: '마취 바늘 삽입 전 표면 마취로 찌르는 느낌을 최소화합니다.' },
                            { icon: Shield, title: '안전한 마취', desc: '전자 마취기가 일정한 속도로 마취액을 주입하여 불쾌감을 줄입니다.' },
                            { icon: Syringe, title: '공포증 극복', desc: '치과 치료에 대한 두려움이 있는 분도 편안하게 치료받을 수 있습니다.' },
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
                <div className="container"><h3>통증 걱정 없는 치과 치료</h3><p>무통 마취 시스템으로 편안한 진료를 경험하세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a></div>
            </motion.section>
        </>
    );
}
