'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Car, Phone } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { CLINIC_INFO, CLINIC_HOURS } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';

export default function VisitPage() {
    return (
        <>
            <PageHero
                label="Visit Us"
                title="진료안내 & 오시는 길"
                subtitle="더 바른 정성 치과의 진료 시간과 찾아오시는 방법을 안내합니다"
                bgText="VISIT"
                breadcrumbs={[
                    { label: '병원 소개', href: '/clinic' },
                    { label: '진료안내 & 오시는 길' },
                ]}
            />

            {/* Hours & Info */}
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.twoColumn}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {/* Hours Table */}
                        <motion.div variants={fadeInUp}>
                            <div style={{ marginBottom: 'var(--space-xl)' }}>
                                <span className={styles.introLabel} style={{ textAlign: 'left' }}>Hours</span>
                                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-lg)' }}>진료 시간</h3>
                            </div>
                            <div style={{
                                background: 'var(--color-surface)',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid var(--color-border-light)',
                                overflow: 'hidden'
                            }}>
                                {CLINIC_HOURS.map((item, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: 'var(--space-md) var(--space-xl)',
                                        borderBottom: index < CLINIC_HOURS.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                                        fontSize: 'var(--text-base)',
                                    }}>
                                        <span style={{ fontWeight: 500 }}>{item.day}</span>
                                        <span style={{ color: item.hours === '휴진' ? 'var(--color-error)' : 'var(--color-primary)', fontWeight: 600 }}>
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={fadeInUp}>
                            <div style={{ marginBottom: 'var(--space-xl)' }}>
                                <span className={styles.introLabel} style={{ textAlign: 'left' }}>Contact</span>
                                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-lg)' }}>연락처 & 위치</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                                {[
                                    { icon: Phone, label: '대표전화', value: CLINIC_INFO.phone },
                                    { icon: MapPin, label: '주소', value: CLINIC_INFO.address },
                                    { icon: Car, label: '주차', value: '건물 내 무료 주차 가능' },
                                    { icon: Clock, label: '점심시간', value: '13:00 - 14:00' },
                                ].map((item, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 'var(--space-md)',
                                        padding: 'var(--space-md)',
                                        background: 'var(--color-surface)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid var(--color-border-light)',
                                    }}>
                                        <div style={{
                                            width: 40, height: 40, borderRadius: 'var(--radius-md)',
                                            background: 'var(--color-primary-050)', color: 'var(--color-primary)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                        }}>
                                            <item.icon size={18} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: '2px' }}>{item.label}</div>
                                            <div style={{ fontWeight: 500 }}>{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        className={styles.introBlock}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <span className={styles.introLabel}>Location</span>
                        <h2 className={styles.introTitle}>오시는 길</h2>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        style={{
                            width: '100%', height: 400, borderRadius: 'var(--radius-xl)',
                            background: 'var(--color-surface-secondary)',
                            border: '1px solid var(--color-border-light)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--color-text-secondary)', fontSize: 'var(--text-md)'
                        }}
                    >
                        <MapPin size={32} style={{ marginRight: 8, opacity: 0.3 }} />
                        카카오맵 임베드 영역
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
                    <h3>편리하게 방문하세요</h3>
                    <p>전화 한 통이면 예약이 완료됩니다</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaBannerBtn}>
                        전화 예약하기 →
                    </a>
                </div>
            </motion.section>
        </>
    );
}
