'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSlider.module.css';

interface WaveConfig {
    amplitude: number;
    frequency: number;
    speed: number;
    yOffset: number;
    phase: number;
    colorTop: string;
    colorBottom: string;
}

const WAVES_DESKTOP: WaveConfig[] = [
    { amplitude: 60, frequency: 0.006, speed: 0.02, yOffset: 0.35, phase: 0, colorTop: 'rgba(13, 180, 185, 0.15)', colorBottom: 'rgba(13, 180, 185, 0.02)' },
    { amplitude: 45, frequency: 0.01, speed: -0.015, yOffset: 0.45, phase: 1.5, colorTop: 'rgba(255, 255, 255, 0.12)', colorBottom: 'rgba(255, 255, 255, 0.01)' },
    { amplitude: 55, frequency: 0.008, speed: 0.018, yOffset: 0.55, phase: 3, colorTop: 'rgba(100, 220, 225, 0.18)', colorBottom: 'rgba(100, 220, 225, 0.03)' },
    { amplitude: 35, frequency: 0.014, speed: -0.012, yOffset: 0.62, phase: 4.5, colorTop: 'rgba(184, 156, 100, 0.14)', colorBottom: 'rgba(184, 156, 100, 0.02)' },
    { amplitude: 50, frequency: 0.009, speed: 0.022, yOffset: 0.72, phase: 2, colorTop: 'rgba(150, 235, 240, 0.20)', colorBottom: 'rgba(150, 235, 240, 0.04)' },
];

const WAVES_MOBILE: WaveConfig[] = [
    { amplitude: 35, frequency: 0.008, speed: 0.015, yOffset: 0.45, phase: 0, colorTop: 'rgba(100, 220, 225, 0.14)', colorBottom: 'rgba(100, 220, 225, 0.02)' },
    { amplitude: 30, frequency: 0.012, speed: -0.01, yOffset: 0.58, phase: 2, colorTop: 'rgba(255, 255, 255, 0.10)', colorBottom: 'rgba(255, 255, 255, 0.01)' },
    { amplitude: 40, frequency: 0.009, speed: 0.018, yOffset: 0.70, phase: 4, colorTop: 'rgba(150, 235, 240, 0.16)', colorBottom: 'rgba(150, 235, 240, 0.03)' },
];

function drawWave(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    wave: WaveConfig,
    time: number,
) {
    const y0 = height * wave.yOffset;

    ctx.beginPath();
    ctx.moveTo(0, height);

    for (let x = 0; x <= width; x += 2) {
        const y =
            y0 +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.6 + time * wave.speed * 1.3 + wave.phase * 0.5) * wave.amplitude * 0.5 +
            Math.sin(x * wave.frequency * 0.3 + time * wave.speed * 0.5) * wave.amplitude * 0.25;
        ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, y0 - wave.amplitude, 0, height);
    gradient.addColorStop(0, wave.colorTop);
    gradient.addColorStop(1, wave.colorBottom);
    ctx.fillStyle = gradient;
    ctx.fill();
}

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth <= 768;
        const waves = isMobile ? WAVES_MOBILE : WAVES_DESKTOP;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        function resize() {
            const rect = canvas!.getBoundingClientRect();
            canvas!.width = rect.width * dpr;
            canvas!.height = rect.height * dpr;
            ctx!.scale(dpr, dpr);
        }

        resize();
        window.addEventListener('resize', resize);

        if (prefersReducedMotion) {
            const rect = canvas.getBoundingClientRect();
            for (const wave of waves) {
                drawWave(ctx, rect.width, rect.height, wave, 0);
            }
            return () => {
                window.removeEventListener('resize', resize);
            };
        }

        let time = 0;
        let lastFrameTime = 0;
        const FRAME_INTERVAL = 1000 / 30;

        function animate(timestamp: number) {
            if (timestamp - lastFrameTime < FRAME_INTERVAL) {
                animFrameRef.current = requestAnimationFrame(animate);
                return;
            }
            lastFrameTime = timestamp;

            const rect = canvas!.getBoundingClientRect();
            ctx!.clearRect(0, 0, rect.width, rect.height);

            for (const wave of waves) {
                drawWave(ctx!, rect.width, rect.height, wave, time);
            }

            time += 1;
            animFrameRef.current = requestAnimationFrame(animate);
        }

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={styles.heroCanvas}
            aria-hidden="true"
        />
    );
}
