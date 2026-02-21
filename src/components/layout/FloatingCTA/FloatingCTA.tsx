'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';
import { CLINIC_INFO } from '@/lib/constants';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.floating}>
            <a href={`tel:${CLINIC_INFO.phone}`} className={`${styles.floatingBtn} ${styles.phoneBtn}`} aria-label="전화 예약">
                <Phone size={22} />
                <span className={styles.tooltip}>전화 예약</span>
            </a>

            <a href={CLINIC_INFO.kakaoUrl} className={`${styles.floatingBtn} ${styles.kakaoBtn}`} aria-label="카카오톡 상담">
                <MessageCircle size={22} />
                <span className={styles.tooltip}>카카오톡 상담</span>
            </a>

            <button
                className={`${styles.floatingBtn} ${styles.topBtn} ${showTop ? styles.visible : ''}`}
                onClick={scrollToTop}
                aria-label="페이지 상단으로"
            >
                <ChevronUp size={20} />
            </button>
        </div>
    );
}
