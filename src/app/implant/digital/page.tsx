'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Image as ImageIcon, Monitor, Target, Zap } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function DigitalImplantPage() {
    return (
        <>
            <PageHero
                label="Digital Implant"
                title="디지털 임플란트"
                subtitle="3D 디지털 가이드 시스템으로 정밀하고 안전한 임플란트 식립"
                bgText="DIGITAL"
                breadcrumbs={[
                    { label: '임플란트 센터', href: '/implant' },
                    { label: '디지털 임플란트' },
                ]}
            />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.twoColumn}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/digital.png" alt="디지털 임플란트" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>디지털 가이드 임플란트란?</h3>
                            <p>
                                3D CT 데이터를 기반으로 컴퓨터 시뮬레이션을 통해
                                최적의 식립 위치, 각도, 깊이를 사전에 계획하고,
                                맞춤 제작된 가이드를 이용하여 정밀하게 식립하는 최첨단 치료법입니다.
                            </p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />0.1mm 단위의 정밀한 식립 가능</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />수술 시간 단축 (일반 대비 50% 감소)</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />최소 절개로 빠른 회복</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />사전 시뮬레이션으로 예측 가능한 결과</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Advantages</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>디지털 임플란트의 장점</motion.h2>
                    </motion.div>
                    <motion.div className={styles.featuresGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { icon: Target, title: '정밀한 식립', desc: '3D 가이드를 통해 계획된 위치에 정확하게 식립하여 시술 안전성을 높입니다.' },
                            { icon: Zap, title: '빠른 시술', desc: '사전 시뮬레이션 덕분에 수술 시간이 크게 단축되어 환자 부담을 줄입니다.' },
                            { icon: ImageIcon, title: '빠른 회복', desc: '최소 절개 방식으로 출혈과 부기가 적어 일상 복귀가 빠릅니다.' },
                        ].map((item, index) => (
                            <motion.div key={index} variants={fadeInUp} className={styles.featureCard}>
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
                    <h3>디지털 임플란트 상담</h3>
                    <p>3D CT 정밀 진단으로 최적의 디지털 임플란트를 경험하세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a>
                </div>
            </motion.section>
        </>
    );
}
