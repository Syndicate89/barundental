'use client';

import { motion } from 'framer-motion';
import { CheckCircle, RefreshCw } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function RedoImplantPage() {
    return (
        <>
            <PageHero
                label="Redo Implant"
                title="재수술 임플란트"
                subtitle="임플란트 실패, 다시 시작할 수 있습니다"
                bgText="REDO"
                breadcrumbs={[
                    { label: '임플란트 센터', href: '/implant' },
                    { label: '재수술 임플란트' },
                ]}
            />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/redo.png" alt="재수술 임플란트" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>임플란트 재수술이란?</h3>
                            <p>
                                기존 임플란트가 실패하거나 문제가 발생한 경우, 원인을 정밀 분석하여
                                재식립하는 고난도 시술입니다. 정확한 원인 분석과 풍부한 경험이
                                필수적입니다.
                            </p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />임플란트 주위염으로 인한 재수술</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />보철물 파손 교체</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />임플란트 탈락 후 재식립</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />부적절한 식립 위치 교정</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Process</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>재수술 프로세스</motion.h2>
                    </motion.div>
                    <motion.div className={styles.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { num: '01', title: '원인 분석', desc: '3D CT로 기존 임플란트의 문제 원인을 정밀 분석' },
                            { num: '02', title: '치료 계획', desc: '환자 상태에 맞는 최적의 재수술 계획 수립' },
                            { num: '03', title: '재식립', desc: '신중한 제거 후 골이식 및 재식립 진행' },
                            { num: '04', title: '회복 관리', desc: '정기 검진과 관리로 장기적 성공 보장' },
                        ].map((step, index) => (
                            <motion.div key={index} variants={fadeInUp} className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.num}</div>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section className={styles.ctaBanner} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <div className="container">
                    <h3>임플란트 재수술 상담</h3>
                    <p>정확한 원인 분석으로 다시 한번 성공적인 임플란트를 약속합니다</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a>
                </div>
            </motion.section>
        </>
    );
}
