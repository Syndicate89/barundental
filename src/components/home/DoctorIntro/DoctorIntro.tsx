'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Image from 'next/image';
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce, fadeInUp } from '@/lib/animations';
import { DOCTOR_INFO } from '@/lib/constants';
import styles from './DoctorIntro.module.css';

const ASSOCIATION_LOGOS = [
    '대한치과의사협회',
    '대한통합치의학회',
    '대한구강악안면외과학회',
];

export default function DoctorIntro() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {/* Photo Side */}
                    <motion.div variants={fadeInLeft} className={styles.photoSide}>
                        <div className={styles.photoWrapper}>
                            <div className={styles.photoPlaceholder} style={{ position: 'relative', overflow: 'hidden' }}>
                                <Image src="/images/doctor-profile.png" alt="대표원장 프로필" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                        </div>
                        <div className={styles.photoBadge}>
                            <div className={styles.badgeTitle}>대표원장</div>
                            <div className={styles.badgeName}>{DOCTOR_INFO.name}</div>
                        </div>
                    </motion.div>

                    {/* Info Side */}
                    <motion.div variants={fadeInRight} className={styles.infoSide}>
                        <span className={styles.label}>Doctor</span>
                        <h2 className={styles.title}>
                            대표원장 <span className={styles.name}>{DOCTOR_INFO.name}</span>
                        </h2>

                        <div className={styles.specialties}>
                            <span className={styles.specialty}>{DOCTOR_INFO.degree}</span>
                            <span className={styles.specialty}>{DOCTOR_INFO.specialty}</span>
                        </div>

                        <p className={styles.quote}>
                            &ldquo;{DOCTOR_INFO.quote}&rdquo;
                        </p>

                        <motion.div
                            className={styles.credentials}
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                        >
                            {DOCTOR_INFO.credentials.map((cred, index) => (
                                <motion.div key={index} variants={fadeInUp} className={styles.credential}>
                                    <span className={styles.credentialDot} />
                                    {cred}
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className={styles.logos}>
                            {ASSOCIATION_LOGOS.map((logo, index) => (
                                <span key={index} className={styles.logoBadge}>{logo}</span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
