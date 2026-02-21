'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Image as ImageIcon, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { CLINIC_INFO } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

const STEPS = [
    { num: '01', title: '정밀 진단', desc: '3D CT 촬영 및 구강 검진으로 정밀 진단' },
    { num: '02', title: '치료 계획', desc: '환자 맞춤 임플란트 치료 계획 수립' },
    { num: '03', title: '임플란트 식립', desc: '디지털 가이드 기반 정밀 식립' },
    { num: '04', title: '보철 완성', desc: '맞춤 보철물 제작 및 최종 장착' },
];

const FAQ = [
    { q: '임플란트 시술 시간은 얼마나 걸리나요?', a: '단순 식립의 경우 약 30분~1시간 정도 소요되며, 골이식이 필요한 경우 추가 시간이 소요될 수 있습니다.' },
    { q: '임플란트 수명은 어느 정도인가요?', a: '적절한 관리 시 반영구적으로 사용 가능하며, 정기적인 검진과 관리가 중요합니다.' },
    { q: '임플란트 시술 후 통증이 심한가요?', a: '무통 마취 시스템을 적용하여 시술 중 통증은 거의 없으며, 시술 후에도 처방약으로 관리 가능합니다.' },
    { q: '임플란트 보증 기간이 있나요?', a: '네, 더 바른 정성 치과는 시술 보증제를 운영하고 있습니다. 보증 기간 내 문제 발생 시 무상 재치료를 보장합니다.' },
];

export default function ImplantGuidePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            <PageHero
                label="Implant Guide"
                title="임플란트 가이드"
                subtitle="임플란트에 대한 모든 것을 안내해 드립니다"
                bgText="IMPLANT"
                breadcrumbs={[
                    { label: '임플란트 센터', href: '/implant' },
                    { label: '임플란트 가이드' },
                ]}
            />

            {/* What is Implant */}
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
                            <Image src="/images/guide.png" alt="임플란트 가이드" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>임플란트란?</h3>
                            <p>
                                임플란트는 상실된 치아 부위의 잇몸뼈에 인체에 무해한 티타늄 재질의
                                인공 치근을 식립하고, 그 위에 자연치아와 유사한 보철물을 장착하는 치료법입니다.
                            </p>
                            <ul>
                                <li>
                                    <CheckCircle size={16} className={styles.checkIcon} />
                                    자연치아와 유사한 저작력과 심미성
                                </li>
                                <li>
                                    <CheckCircle size={16} className={styles.checkIcon} />
                                    인접 치아 삭제 불필요
                                </li>
                                <li>
                                    <CheckCircle size={16} className={styles.checkIcon} />
                                    적절한 관리 시 반영구적 사용
                                </li>
                                <li>
                                    <CheckCircle size={16} className={styles.checkIcon} />
                                    골 흡수 방지 효과
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Process Steps */}
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.introBlock}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Process</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>임플란트 시술 과정</motion.h2>
                    </motion.div>

                    <motion.div
                        className={styles.stepsGrid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {STEPS.map((step, index) => (
                            <motion.div key={index} variants={fadeInUp} className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.num}</div>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                                {index < STEPS.length - 1 && (
                                    <div className={styles.stepArrow}><ArrowRight size={16} /></div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.introBlock}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span variants={fadeInUp} className={styles.introLabel}>FAQ</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>자주 묻는 질문</motion.h2>
                    </motion.div>

                    <motion.div
                        className={styles.faqList}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {FAQ.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    aria-expanded={openFaq === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    {item.q}
                                    <ChevronDown size={18} className={styles.faqArrow} />
                                </button>
                                {openFaq === index && (
                                    <div id={`faq-answer-${index}`} role="region" className={styles.faqAnswer}>{item.a}</div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section
                className={styles.ctaBanner}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
            >
                <div className="container">
                    <h3>임플란트 상담 받으세요</h3>
                    <p>3D CT 정밀 진단으로 최적의 임플란트 치료를 안내해 드립니다</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>
                        상담 예약하기 →
                    </a>
                </div>
            </motion.section>
        </>
    );
}
