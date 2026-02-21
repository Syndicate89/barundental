'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

import 'swiper/css';
import styles from './TreatmentCarousel.module.css';

const TREATMENTS = [
    {
        category: 'Implant',
        title: '디지털 가이드 임플란트',
        desc: '3D CT와 디지털 가이드를 활용하여 정밀하게 식립하는 최첨단 임플란트 시술',
        href: '/implant/digital',
        image: '/images/digital.png'
    },
    {
        category: 'Aesthetic',
        title: '원데이 치아미백',
        desc: '단 1회 방문으로 밝고 환한 미소를 되찾는 전문 미백 시술',
        href: '/aesthetic/whitening',
        image: '/images/whitening.png'
    },
    {
        category: 'Preservation',
        title: '미세현미경 신경치료',
        desc: '미세현미경을 활용하여 자연치아를 최대한 보존하는 정밀 신경치료',
        href: '/preservation/microscope',
        image: '/images/microscope.png'
    },
    {
        category: 'Surgery',
        title: '무통 사랑니 발치',
        desc: '무통 마취 시스템과 전문 장비로 안전하고 편안한 사랑니 발치',
        href: '/surgery/wisdom',
        image: '/images/wisdom.png'
    },
    {
        category: 'Aesthetic',
        title: '올세라믹 크라운',
        desc: '자연치아와 동일한 색상과 투명도의 올세라믹 보철 치료',
        href: '/aesthetic/ceramic',
        image: '/images/ceramic.png'
    },
];

export default function TreatmentCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

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
                        Treatment
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className={styles.title}>
                        주요 진료 안내
                    </motion.h2>
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        더 바른 정성 치과의 전문 시술을 확인해 보세요
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className={styles.navRow}>
                        <div />
                        <div className={styles.navArrows}>
                            <button
                                className={styles.navArrow}
                                onClick={() => swiperRef.current?.slidePrev()}
                                aria-label="이전"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                className={styles.navArrow}
                                onClick={() => swiperRef.current?.slideNext()}
                                aria-label="다음"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        className={styles.swiperWrapper}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    >
                        {[...TREATMENTS, ...TREATMENTS].map((treatment, index) => (
                            <SwiperSlide key={index}>
                                <Link href={treatment.href} className={styles.slideCard}>
                                    <div className={styles.slideImage} style={{ position: 'relative', overflow: 'hidden' }}>
                                        <Image src={treatment.image} alt={treatment.title} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.slideContent}>
                                        <span className={styles.slideCategory}>{treatment.category}</span>
                                        <h3 className={styles.slideTitle}>{treatment.title}</h3>
                                        <p className={styles.slideDesc}>{treatment.desc}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
