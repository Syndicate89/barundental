'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Image as ImageIcon } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function CavityPage() {
    return (
        <>
            <PageHero label="Cavity Treatment" title="충치치료" subtitle="초기 발견과 정확한 치료로 자연치아를 보존합니다"
                bgText="CAVITY" breadcrumbs={[{ label: '치아보존', href: '/preservation' }, { label: '충치치료' }]} />
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/cavity.png" alt="충치치료" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>충치치료</h3>
                            <p>충치 진행 단계에 따라 레진, 인레이, 온레이, 크라운 등 최적의 치료법을 적용하며, 최소 삭제 원칙으로 자연치아를 최대한 보존합니다.</p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />레진 충전 — 초기 충치 최소 삭제 치료</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />인레이/온레이 — 중등도 충치의 정밀 보철</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />크라운 — 광범위 충치의 치아 보호</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />심미적 소재 사용 (자연치 색상)</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Stages</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>충치 진행 단계별 치료</motion.h2>
                    </motion.div>
                    <motion.div className={styles.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { num: '1단계', title: '법랑질 충치', desc: '레진 충전으로 간단하게 치료' },
                            { num: '2단계', title: '상아질 충치', desc: '인레이/온레이로 정밀 수복' },
                            { num: '3단계', title: '신경 근접 충치', desc: '신경 보존 치료 + 크라운' },
                            { num: '4단계', title: '신경 감염 충치', desc: '신경치료 후 크라운 보철' },
                        ].map((step, i) => (
                            <motion.div key={i} variants={fadeInUp} className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.num}</div>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <motion.section className={styles.ctaBanner} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <div className="container"><h3>충치, 조기에 치료하세요</h3><p>초기 발견이 치아 보존의 핵심입니다</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a></div>
            </motion.section>
        </>
    );
}
