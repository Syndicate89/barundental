'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crosshair, Sparkles, Scissors, Microscope, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { CORE_SERVICES } from '@/lib/constants';
import styles from './CoreServices.module.css';

const ICON_MAP: Record<string, React.ElementType> = {
    implant: Crosshair,
    sparkles: Sparkles,
    surgery: Scissors,
    microscope: Microscope,
};

export default function CoreServices() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.span variants={fadeInUp} className={styles.label}>
                        Our Services
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className={styles.title}>
                        핵심 진료 분야
                    </motion.h2>
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        각 분야 전문의가 정직하고 세심한 진료를 제공합니다
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {CORE_SERVICES.map((service, index) => {
                        const Icon = ICON_MAP[service.icon] || Crosshair;
                        return (
                            <motion.div key={index} variants={fadeInUp}>
                                <Link href={service.href} className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDesc}>{service.description}</p>
                                    <div className={styles.cardFeatures}>
                                        {service.features.map((f, i) => (
                                            <span key={i} className={styles.feature}>{f}</span>
                                        ))}
                                    </div>
                                    <div className={styles.cardArrow}>
                                        자세히 보기 <ArrowRight size={14} />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
