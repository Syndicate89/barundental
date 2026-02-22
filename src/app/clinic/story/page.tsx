'use client';

import { motion } from 'framer-motion';
import { Heart, Minimize2, Users, Target, Eye, HandHeart } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import Image from 'next/image';

export default function StoryPage() {
    return (
        <>
            <PageHero
                label="Brand Story"
                title="브랜드 스토리"
                subtitle="자연치아의 가치를 먼저 생각하는, 더 바른 정성 치과의 이야기"
                bgText="STORY"
                breadcrumbs={[
                    { label: '병원 소개', href: '/clinic' },
                    { label: '브랜드 스토리' },
                ]}
            />

            {/* Philosophy Section */}
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.introBlock}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Our Philosophy</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>
                            정직한 진료, 정성을 다하는 치과
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.introDesc}>
                            더 바른 정성 치과는 &apos;과잉 진료 없이 꼭 필요한 치료만&apos;이라는 원칙 아래,
                            환자 한 분 한 분의 구강 건강을 평생 함께 지켜가겠다는 약속으로 설립되었습니다.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className={styles.twoColumn}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.div variants={fadeInLeft} className={styles.imageWrapper}>
                            <Image src="/barundental/images/story.png" alt="병원 스토리" fill className={styles.pageImage} />
                        </motion.div>
                        <motion.div variants={fadeInRight} className={styles.textBlock}>
                            <h3>환자 중심의 진료 철학</h3>
                            <p>
                                대표원장 김지한은 치의학 박사이자 통합치의학과 전문의로서,
                                과잉 진료가 아닌 환자에게 진정으로 필요한 치료만을 제안합니다.
                            </p>
                            <p>
                                모든 치료 과정에서 환자와 충분히 소통하며, 치료 계획부터 결과까지
                                투명하게 공유하는 것을 원칙으로 합니다.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.introBlock}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Core Values</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>
                            더 바른 정성의 핵심 가치
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className={styles.featuresGrid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {[
                            { icon: Heart, title: '정직한 진료', desc: '과잉 진료 없이 환자에게 꼭 필요한 치료만을 정직하게 제안하고, 모든 과정을 투명하게 설명합니다.' },
                            { icon: Minimize2, title: '최소 침습 치료', desc: '자연치아를 최대한 보존하는 최소 침습 원칙으로, 불필요한 삭제와 발치를 지양합니다.' },
                            { icon: Users, title: '평생 구강 관리', desc: '일회성 치료가 아닌, 환자의 평생 구강 건강 파트너로서 지속적인 관리를 약속합니다.' },
                            { icon: Target, title: '정밀 진단', desc: '3D CT와 디지털 장비를 활용한 정밀 진단으로 정확한 치료 계획을 수립합니다.' },
                            { icon: Eye, title: '투명한 소통', desc: '치료 전 충분한 상담을 통해 치료 방법, 기간, 비용을 명확하게 안내합니다.' },
                            { icon: HandHeart, title: '환자 중심 서비스', desc: '편안한 진료 환경과 세심한 케어로 치과 공포증 환자도 안심하고 진료받을 수 있습니다.' },
                        ].map((item, index) => (
                            <motion.div key={index} variants={fadeInUp} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <item.icon size={24} />
                                </div>
                                <h4 className={styles.featureTitle}>{item.title}</h4>
                                <p className={styles.featureDesc}>{item.desc}</p>
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
                    <h3>더 바른 정성 치과와 함께하세요</h3>
                    <p>정직한 진료로 환자분의 구강 건강을 지켜드리겠습니다</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>
                        지금 예약하기 →
                    </a>
                </div>
            </motion.section>
        </>
    );
}
