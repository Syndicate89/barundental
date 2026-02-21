'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Sun } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function WhiteningPage() {
    return (
        <>
            <PageHero label="Whitening" title="원데이 치아미백" subtitle="단 1회 방문으로 밝고 환한 미소를 되찾으세요"
                bgText="WHITENING" breadcrumbs={[{ label: '미백 & 심미', href: '/aesthetic' }, { label: '원데이 미백' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/whitening.png" alt="원데이 치아미백" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>원데이 전문 미백이란?</h3>
                            <p>병원 전용 고농도 미백제와 특수 광선을 사용하여 단 1회 방문으로 치아를 수 톤 밝게 만드는 전문 미백 시술입니다.</p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />1회 방문, 약 60~90분 소요</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />평균 3~8 톤 밝아지는 효과</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />치아 손상 없는 안전한 시술</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />시술 직후 바로 일상 복귀 가능</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Process</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>미백 시술 과정</motion.h2>
                    </motion.div>
                    <motion.div className={styles.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { num: '01', title: '상담 & 색상 측정', desc: '현재 치아 색상을 측정하고 목표 색상을 설정합니다' },
                            { num: '02', title: '잇몸 보호', desc: '잇몸 보호제를 도포하여 연조직을 안전하게 보호합니다' },
                            { num: '03', title: '미백제 도포', desc: '전문 고농도 미백제를 치아 표면에 도포합니다' },
                            { num: '04', title: '광선 조사', desc: '특수 광선을 조사하여 미백 효과를 극대화합니다' },
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
                <div className="container">
                    <h3>밝고 환한 미소를 되찾으세요</h3>
                    <p>원데이 전문 미백으로 자신감 있는 미소를 선사합니다</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a>
                </div>
            </motion.section>
        </>
    );
}
