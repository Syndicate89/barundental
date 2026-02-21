'use client';

import { motion } from 'framer-motion';
import { Heart, Minimize2, Users } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce, scaleIn } from '@/lib/animations';
import { DOCTOR_INFO } from '@/lib/constants';
import styles from './BrandPhilosophy.module.css';

const VALUES = [
    {
        icon: Heart,
        title: '정직한 진료',
        desc: '과잉 진료 없이 환자에게 꼭 필요한 치료만을 정직하게 제안합니다.',
    },
    {
        icon: Minimize2,
        title: '최소 침습',
        desc: '자연치아를 최대한 보존하는 최소 침습 치료를 원칙으로 합니다.',
    },
    {
        icon: Users,
        title: '평생 관리',
        desc: '치료 후에도 지속적인 관리로 구강 건강을 함께 지켜갑니다.',
    },
];

export default function BrandPhilosophy() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.inner}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.span variants={fadeInUp} className={styles.label}>
                        Philosophy
                    </motion.span>

                    <motion.div variants={fadeInUp} className={styles.divider} />

                    <motion.h2 variants={fadeInUp} className={styles.title}>
                        자연치아의 가치를<br />
                        먼저 생각합니다
                    </motion.h2>

                    <motion.div variants={fadeInUp}>
                        <span className={styles.quoteIcon}>&ldquo;</span>
                        <p className={styles.quote}>
                            {DOCTOR_INFO.quote}
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className={styles.signature}>
                        <span className={styles.signatureLine} />
                        <span className={styles.signatureText}>
                            대표원장 <span className={styles.signatureName}>{DOCTOR_INFO.name}</span>
                        </span>
                        <span className={styles.signatureLine} />
                    </motion.div>
                </motion.div>

                {/* Values */}
                <motion.div
                    className={styles.values}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {VALUES.map((value, index) => (
                        <motion.div key={index} variants={scaleIn} className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <value.icon size={24} />
                            </div>
                            <h3 className={styles.valueTitle}>{value.title}</h3>
                            <p className={styles.valueDesc}>{value.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Background text */}
            <div className={styles.bgEnText}>PHILOSOPHY</div>
        </section>
    );
}
