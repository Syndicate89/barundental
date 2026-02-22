'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Image as ImageIcon, Shield, Award } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function AdvancedImplantPage() {
    return (
        <>
            <PageHero
                label="Advanced Implant"
                title="고난도 임플란트"
                subtitle="풍부한 임상 경험으로 어려운 케이스도 안전하게"
                bgText="ADVANCED"
                breadcrumbs={[
                    { label: '임플란트 센터', href: '/implant' },
                    { label: '고난도 임플란트' },
                ]}
            />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/barundental/images/advanced.png" alt="고난도 임플란트" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>고난도 임플란트 전문</h3>
                            <p>
                                뼈가 부족하거나 전신 질환이 있는 경우, 일반적인 임플란트 시술이
                                어려울 수 있습니다. 더 바른 정성 치과는 풍부한 경험과 전문 장비를
                                바탕으로 고난도 케이스에도 안전하고 성공적인 임플란트를 제공합니다.
                            </p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />골이식 임플란트</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />상악동 거상술</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />즉시 식립 임플란트</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />전악 임플란트</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Why Us</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>고난도 임플란트, 왜 더 바른 정성인가</motion.h2>
                    </motion.div>
                    <motion.div className={styles.featuresGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { icon: Award, title: '전문의 직접 시술', desc: '통합치의학과 전문의가 상담부터 시술, 사후관리까지 직접 담당합니다.' },
                            { icon: Shield, title: '안전 시스템', desc: '3D CT 정밀 진단과 디지털 가이드로 시술 안전성을 극대화합니다.' },
                            { icon: ImageIcon, title: '시술 보증제', desc: '시술 후 보증기간 내 문제 발생 시 무상으로 재치료를 보장합니다.' },
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
                    <h3>고난도 임플란트도 안심하세요</h3>
                    <p>전문의의 정밀 진단으로 최적의 치료 방법을 찾아드립니다</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a>
                </div>
            </motion.section>
        </>
    );
}
