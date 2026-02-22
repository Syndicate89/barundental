'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Image as ImageIcon, ArrowRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';

import Image from 'next/image';

export default function WisdomPage() {
    return (
        <>
            <PageHero label="Wisdom Tooth" title="사랑니 발치" subtitle="구강악안면외과 전문의의 안전하고 세심한 발치"
                bgText="WISDOM" breadcrumbs={[{ label: '구강외과', href: '/surgery' }, { label: '사랑니 발치' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/barundental/images/wisdom.png" alt="사랑니 발치" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>사랑니는 왜 발치해야 하나요?</h3>
                            <p>잘못된 방향으로 자라거나 매복된 사랑니는 인접 치아 충치, 잇몸 염증, 낭종 등 다양한 문제를 야기할 수 있습니다. 특히 매복 사랑니는 신경과의 위치 관계를 고려한 세심한 발치가 필요합니다.</p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />3D CT 기반 정밀 진단</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />무통 마취 시스템 적용</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />고난도 매복 사랑니 전문</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />당일 발치 가능 (상태에 따라)</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Process</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>안전한 발치 과정</motion.h2>
                    </motion.div>
                    <motion.div className={styles.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { num: '01', title: '3D CT 촬영', desc: '사랑니와 신경관의 위치 관계를 정밀 분석' },
                            { num: '02', title: '무통 마취', desc: '무통 마취 시스템으로 통증 없는 마취 진행' },
                            { num: '03', title: '세심한 발치', desc: '최소 침습 방식으로 주변 조직 손상 최소화' },
                            { num: '04', title: '사후 관리', desc: '지혈 확인 및 발치 후 주의사항 안내' },
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
                    <h3>사랑니 고민, 상담해 보세요</h3>
                    <p>전문의의 정밀 진단으로 안전한 발치를 경험하세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a>
                </div>
            </motion.section>
        </>
    );
}
