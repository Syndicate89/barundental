'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { CLINIC_INFO } from '@/lib/constants';
import { heroTextReveal, staggerContainer, fadeIn } from '@/lib/animations';

import HeroBackground from './HeroBackground';

import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './HeroSlider.module.css';

const SLIDES = [
    {
        id: 1,
        image: '/images/hero/hero-1.jpg',
        labelEn: 'The Barun Dental Clinic',
        title: 'TRUST YOUR\nSMILE',
        titleKo: '자연치아의 가치를\n먼저 생각합니다',
        subtitle: '과잉 진료 없이, 꼭 필요한 진료만을 약속하는\n더 바른 정성 치과의원',
    },
    {
        id: 2,
        image: '/images/hero/hero-2.jpg',
        labelEn: 'Implant Center',
        title: 'PRECISION\nIMPLANT',
        titleKo: '디지털 가이드 기반\n정밀 임플란트',
        subtitle: '풍부한 임상 경험과 3D 디지털 장비로\n안전하고 정확한 임플란트를 시행합니다',
    },
    {
        id: 3,
        image: '/images/hero/hero-3.jpg',
        labelEn: 'Aesthetic Dentistry',
        title: 'BEAUTIFUL\nHARMONY',
        titleKo: '아름답고 자연스러운\n미소를 되찾다',
        subtitle: '원데이 미백, 라미네이트, 올세라믹으로\n자신감 있는 미소를 선사합니다',
    },
];

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className={styles.hero}>
            <Swiper
                className={styles.swiperContainer}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                speed={1200}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
            >
                {SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id} className={styles.slide}>
                        <div
                            className={styles.slideImage}
                            style={{
                                background: `linear-gradient(135deg, #0D7377 0%, #1A1A2E 50%, #0A5C5F 100%)`,
                            }}
                        />
                        <div className={styles.slideOverlay} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <HeroBackground />

            {/* Content Overlay */}
            <div className={styles.heroContent}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        style={{ textAlign: 'center' }}
                    >
                        <motion.span variants={heroTextReveal} className={styles.heroLabel}>
                            <span className={styles.heroLabelLine} />
                            {SLIDES[activeIndex].labelEn}
                            <span className={styles.heroLabelLine} />
                        </motion.span>

                        <motion.h1 variants={heroTextReveal} className={styles.heroTitle}>
                            {SLIDES[activeIndex].title}
                            <span className={styles.heroTitleKo}>
                                {SLIDES[activeIndex].titleKo}
                            </span>
                        </motion.h1>

                        <motion.p variants={heroTextReveal} className={styles.heroSubtitle}>
                            {SLIDES[activeIndex].subtitle}
                        </motion.p>

                        <motion.div variants={heroTextReveal}>
                            <a href={`tel:${CLINIC_INFO.phone}`} className={styles.heroCta}>
                                지금 예약하기
                                <ArrowRight size={16} className={styles.ctaArrow} />
                            </a>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Side Numbers */}
            <div className={styles.sideNumbers}>
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.sideNumber} ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                        aria-label={`슬라이드 ${index + 1}로 이동`}
                        aria-current={index === activeIndex ? 'true' : undefined}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </button>
                ))}
            </div>

            {/* Scroll Down */}
            <div className={styles.scrollDown}>
                <span>Scroll Down</span>
                <div className={styles.scrollLine} />
            </div>

            {/* Background Text */}
            <motion.div
                className={styles.bgText}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                aria-hidden="true"
            >
                BARUN DENTAL
            </motion.div>
        </section>
    );
}
