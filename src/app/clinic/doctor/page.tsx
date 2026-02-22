'use client';

import { motion } from 'framer-motion';
import { User, Award, GraduationCap, Briefcase } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '@/lib/animations';
import { CLINIC_INFO, DOCTOR_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

const CAREER_TIMELINE = [
    { year: '', title: '치의학 박사 학위 취득' },
    { year: '', title: '통합치의학과 전문의 수료' },
    { year: '', title: '대학병원 구강악안면외과 수련' },
    { year: '', title: '대한치과의사협회 정회원' },
    { year: '', title: '대한통합치의학회 정회원' },
    { year: '', title: '대한구강악안면외과학회 정회원' },
    { year: '', title: '대한치과보존학회 정회원' },
    { year: '', title: '더 바른 정성 치과 개원' },
];

export default function DoctorPage() {
    return (
        <>
            <PageHero
                label="Doctor"
                title="의료진 소개"
                subtitle="환자의 평생 구강 관리 파트너, 대표원장 김지한"
                bgText="DOCTOR"
                breadcrumbs={[
                    { label: '병원 소개', href: '/clinic' },
                    { label: '의료진 소개' },
                ]}
            />

            {/* Doctor Profile */}
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.twoColumn}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper} style={{ aspectRatio: '3/4' }}>
                            <Image src="/barundental/images/doctor-profile.png" alt="대표원장 김지한" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>대표원장 {DOCTOR_INFO.name}</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '8px' }}>
                                {DOCTOR_INFO.degree} · {DOCTOR_INFO.specialty}
                            </p>
                            <p>&ldquo;{DOCTOR_INFO.quote}&rdquo;</p>
                            <p>
                                대표원장 김지한은 치의학 박사이자 통합치의학과 전문의로서,
                                자연치아 보존을 최우선으로 하는 진료 철학을 바탕으로
                                환자 한 분 한 분에게 최선의 치료를 제공합니다.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Career Timeline */}
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.introBlock}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Career</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>경력 및 학력</motion.h2>
                    </motion.div>

                    <motion.div
                        className={styles.featuresGrid}
                        style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '800px', margin: '0 auto' }}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {CAREER_TIMELINE.map((item, index) => (
                            <motion.div key={index} variants={fadeInUp} className={styles.featureCard} style={{ textAlign: 'center' }}>
                                <div className={styles.featureIcon} style={{ margin: '0 auto var(--space-md)' }}>
                                    {index < 3 ? <GraduationCap size={24} /> : index < 7 ? <Award size={24} /> : <Briefcase size={24} />}
                                </div>
                                <h4 className={styles.featureTitle}>{item.title}</h4>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <motion.section
                className={styles.ctaBanner}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
            >
                <div className="container">
                    <h3>김지한 대표원장에게 상담받으세요</h3>
                    <p>통합치의학과 전문의의 정확한 진단과 치료를 경험하세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>
                        상담 예약하기 →
                    </a>
                </div>
            </motion.section>
        </>
    );
}
