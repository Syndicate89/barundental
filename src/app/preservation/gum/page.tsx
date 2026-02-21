'use client';

import { motion } from 'framer-motion';
import { CheckCircle, HeartPulse, AlertTriangle, Shield, ArrowRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function GumPage() {
    return (
        <>
            <PageHero label="Periodontal" title="치주치료" subtitle="건강한 잇몸이 건강한 치아의 기초입니다"
                bgText="GUM" breadcrumbs={[{ label: '치아보존', href: '/preservation' }, { label: '치주치료' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/gum.png" alt="치주치료" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>치주질환이란?</h3>
                            <p>치주질환(잇몸병)은 세균에 의해 잇몸과 치아를 지지하는 뼈가 파괴되는 질환입니다. 초기에는 증상이 거의 없어 방치되기 쉽지만, 진행 시 치아 상실의 주원인이 됩니다.</p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />스케일링 — 치석 제거 및 잇몸 건강 회복</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />치근 활택술 — 치아 뿌리 표면의 세균 제거</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />치주 수술 — 진행된 치주질환의 수술적 치료</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />정기 관리 — 재발 방지를 위한 유지 관리</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Warning Signs</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>이런 증상이 있다면 치주질환을 의심하세요</motion.h2>
                    </motion.div>
                    <motion.div className={styles.featuresGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { icon: AlertTriangle, title: '잇몸 출혈', desc: '양치질이나 식사 시 잇몸에서 피가 나는 증상은 치주질환의 초기 신호입니다.' },
                            { icon: HeartPulse, title: '잇몸 부종 및 통증', desc: '잇몸이 붓고 빨갛게 변하거나, 누르면 통증이 느껴지는 경우 주의가 필요합니다.' },
                            { icon: Shield, title: '치아 흔들림', desc: '치아가 흔들리거나 치아 사이가 벌어지는 것은 치주질환이 진행된 신호입니다.' },
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
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Treatment</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>단계별 치주치료</motion.h2>
                    </motion.div>
                    <motion.div className={styles.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { num: '01', title: '정밀 검진', desc: '치주 포켓 측정, X-ray 촬영으로 잇몸 상태를 정확히 진단' },
                            { num: '02', title: '스케일링', desc: '치석 및 치태를 제거하여 잇몸 염증의 원인 제거' },
                            { num: '03', title: '치근 활택술', desc: '잇몸 아래 치아 뿌리 표면의 세균과 독소 제거' },
                            { num: '04', title: '정기 관리', desc: '3~6개월 주기 정기 검진으로 재발 방지 및 건강 유지' },
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
                    <h3>잇몸 건강, 지금 확인하세요</h3>
                    <p>정기 검진으로 치주질환을 조기에 예방하고 관리하세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a>
                </div>
            </motion.section>
        </>
    );
}
