import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <div className={styles.content}>
                <span className={styles.errorCode}>404</span>
                <h1 className={styles.title}>페이지를 찾을 수 없습니다</h1>
                <p className={styles.description}>
                    요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
                </p>
                <div className={styles.actions}>
                    <Link href="/" className={styles.homeBtn}>
                        홈으로 돌아가기
                    </Link>
                    <Link href="/community/consult" className={styles.consultBtn}>
                        상담 문의
                    </Link>
                </div>
            </div>
        </div>
    );
}
