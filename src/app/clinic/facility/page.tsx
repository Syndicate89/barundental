'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { CLINIC_INFO } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';

const FACILITY_AREAS = [
    {
        title: '접수 & 대기실',
        desc: '편안하고 쾌적한 환경에서 진료를 기다리실 수 있습니다.',
        image: '/barundental/images/facility/rec_v3.png'
    },
    {
        title: '진료실',
        desc: '최신 장비를 갖춘 프라이빗 진료 공간을 제공합니다.',
        image: '/barundental/images/facility/tre_v3.png'
    },
    {
        title: '3D CT실',
        desc: '정밀 진단을 위한 3D CT 전용 촬영실입니다.',
        image: '/barundental/images/facility/ct.png'
    },
    {
        title: '수술실',
        desc: '무균 환경의 독립된 수술실에서 안전한 시술을 진행합니다.',
        image: '/barundental/images/facility/surgery.png'
    },
    {
        title: '상담실',
        desc: '1:1 프라이빗 상담 공간에서 충분한 상담을 받으실 수 있습니다.',
        image: '/barundental/images/facility/consultation.png'
    },
    {
        title: '멸균실',
        desc: '1인 1기구 완전 멸균 시스템으로 교차 감염을 원천 차단합니다.',
        image: '/barundental/images/facility/sterilization.png'
    },
];

export default function FacilityPage() {
    return (
        <>
            <PageHero
                label="Facility Tour"
                title="시설 둘러보기"
                subtitle="환자의 안전과 편안함을 최우선으로 설계한 진료 공간"
                bgText="FACILITY"
                breadcrumbs={[
                    { label: '병원 소개', href: '/clinic' },
                    { label: '시설 둘러보기' },
                ]}
            />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.introBlock}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Our Space</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>
                            환자를 위한 최적의 공간
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.introDesc}>
                            최신 장비와 쾌적한 환경으로 편안한 진료를 제공합니다
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className={styles.facilityGrid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {FACILITY_AREAS.map((area, index) => (
                            <motion.div key={index} variants={fadeInUp} className={styles.facilityCard}>
                                <div className={styles.facilityImageWrapper}>
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        className={styles.facilityImage}
                                        priority={index < 2}
                                    />
                                </div>
                                <div className={styles.facilityInfo}>
                                    <h4 className={styles.facilityTitle}>{area.title}</h4>
                                    <p className={styles.facilityDesc}>{area.desc}</p>
                                </div>
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
                    <h3>직접 방문하여 확인하세요</h3>
                    <p>최신 시설과 장비를 갖춘 더 바른 정성 치과에서 편안한 진료를 경험하세요</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>
                        방문 예약하기 →
                    </a>
                </div>
            </motion.section>
        </>
    );
}
