'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, ScanLine, BadgeCheck } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { USP_ITEMS } from '@/lib/constants';
import styles from './USPSection.module.css';

const ICON_MAP: Record<string, React.ElementType> = {
    shield: Shield,
    scan: ScanLine,
    'badge-check': BadgeCheck,
};

function CountUpNumber({ target, unit }: { target: number; unit: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <div ref={ref} className={styles.number}>
            <span className={styles.numberValue}>{count}</span>
            <span className={styles.numberUnit}>{unit}</span>
        </div>
    );
}

export default function USPSection() {
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
                        Why Barun Dental
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className={styles.title}>
                        더 바른 정성 치과를<br />
                        선택해야 하는 이유
                    </motion.h2>
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        환자의 안전과 정확한 진료를 위한 다른 차원의 시스템
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {USP_ITEMS.map((item, index) => {
                        const Icon = ICON_MAP[item.icon] || Shield;
                        return (
                            <motion.div key={index} variants={fadeInUp} className={styles.card}>
                                <div className={styles.cardIcon}>
                                    <Icon size={24} />
                                </div>
                                <CountUpNumber target={item.number} unit={item.unit} />
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
