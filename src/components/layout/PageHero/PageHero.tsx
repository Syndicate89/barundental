'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import styles from './PageHero.module.css';

interface PageHeroProps {
    label: string;
    title: string;
    subtitle?: string;
    bgText?: string;
    breadcrumbs: { label: string; href?: string }[];
    compact?: boolean;
}

export default function PageHero({ label, title, subtitle, bgText, breadcrumbs, compact }: PageHeroProps) {
    return (
        <section className={`${styles.pageHero} ${compact ? styles.compact : ''}`}>
            <div className={styles.background}>
                <div className={styles.backgroundPattern} />
            </div>
            <div className={styles.overlay} />

            <motion.div
                className={styles.content}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.nav variants={fadeInUp} className={styles.breadcrumb} aria-label="breadcrumb">
                    <Link href="/">홈</Link>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className={styles.breadcrumbSep}>›</span>
                            {crumb.href ? (
                                <Link href={crumb.href}>{crumb.label}</Link>
                            ) : (
                                <span style={{ color: 'rgba(255,255,255,0.9)' }}>{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </motion.nav>

                <motion.span variants={fadeInUp} className={styles.label}>
                    {label}
                </motion.span>

                <motion.h1 variants={fadeInUp} className={styles.title}>
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>

            {bgText && <div className={styles.bgText} aria-hidden="true">{bgText}</div>}
        </section>
    );
}
