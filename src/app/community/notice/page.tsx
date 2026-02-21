'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import styles from '@/styles/subpage.module.css';

const NOTICES = [
    { id: 1, title: '2025년 설 연휴 진료 안내', date: '2025.01.20', category: '공지' },
    { id: 2, title: '임플란트 특별 할인 이벤트', date: '2025.01.15', category: '이벤트' },
    { id: 3, title: '더 바른 정성 치과 확장 이전 안내', date: '2025.01.10', category: '공지' },
    { id: 4, title: '미백 시술 모니터 요원 모집', date: '2025.01.05', category: '이벤트' },
    { id: 5, title: '연말연시 진료 일정 안내', date: '2024.12.20', category: '공지' },
    { id: 6, title: '2024 대한치과의사협회 우수 치과 선정', date: '2024.12.15', category: '소식' },
];

export default function NoticePage() {
    return (
        <>
            <PageHero label="Notice" title="공지사항" subtitle="더 바른 정성 치과의 소식과 이벤트를 확인하세요"
                bgText="NOTICE" breadcrumbs={[{ label: '커뮤니티', href: '/community' }, { label: '공지사항' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        style={{ maxWidth: 800, margin: '0 auto' }}
                    >
                        {NOTICES.map((notice) => (
                            <motion.div
                                key={notice.id}
                                variants={fadeInUp}
                                style={{
                                    padding: 'var(--space-lg) var(--space-xl)',
                                    borderBottom: '1px solid var(--color-border-light)',
                                    cursor: 'pointer',
                                    transition: 'background var(--transition-fast)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: 'var(--space-md)',
                                }}
                                whileHover={{ backgroundColor: 'var(--color-surface-secondary)' }}
                            >
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>
                                        <span style={{
                                            padding: '2px 10px', borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)', fontWeight: 600,
                                            background: notice.category === '이벤트' ? 'var(--color-accent-light)' : 'var(--color-primary-050)',
                                            color: notice.category === '이벤트' ? 'var(--color-accent-dark)' : 'var(--color-primary)',
                                        }}>
                                            {notice.category}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 500 }}>{notice.title}</h3>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', flexShrink: 0 }}>
                                    <Calendar size={14} />
                                    {notice.date}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
