'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Microscope, ArrowRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function MicroscopePage() {
    return (
        <>
            <PageHero label="Microscope" title="미세현미경 신경치료" subtitle="자연치아를 살리는 정밀 신경치료"
                bgText="MICROSCOPE" breadcrumbs={[{ label: '치아보존', href: '/preservation' }, { label: '신경치료' }]} />
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.twoColumn} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/images/microscope.png" alt="미세현미경 신경치료" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>미세현미경 신경치료란?</h3>
                            <p>미세현미경(최대 25배 확대)을 활용하여 육안으로 보이지 않는 미세한 신경관까지 정밀하게 치료하는 방법입니다. 높은 치료 성공률로 자연치아를 최대한 보존합니다.</p>
                            <ul>
                                <li><CheckCircle size={16} className={styles.checkIcon} />최대 25배 확대 시야</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />숨겨진 신경관 발견 가능</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />재신경치료 성공률 향상</li>
                                <li><CheckCircle size={16} className={styles.checkIcon} />자연치아 보존 극대화</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Process</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>신경치료 과정</motion.h2>
                    </motion.div>
                    <motion.div className={styles.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { num: '01', title: '정밀 진단', desc: 'X-ray 및 3D CT로 신경관 상태를 정밀 진단' },
                            { num: '02', title: '신경관 치료', desc: '미세현미경 하에 감염된 신경 조직 제거' },
                            { num: '03', title: '충전', desc: '생체 친화적 재료로 신경관 밀폐 충전' },
                            { num: '04', title: '보철 수복', desc: '약해진 치아를 크라운으로 보호' },
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
                <div className="container"><h3>자연치아를 살려드립니다</h3><p>미세현미경 정밀 신경치료로 소중한 치아를 보존하세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>상담 예약 →</a></div>
            </motion.section>
        </>
    );
}
