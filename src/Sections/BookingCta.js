import React from "react";
import { CalendarCheck } from "lucide-react";
import styles from "./BookingCta.module.css";

const NAVER_BOOKING_URL =
  "https://m.booking.naver.com/booking/13/bizes/1619944?theme=place&entry=pll&lang=ko";

const BookingCta = () => {
  return (
    <section className={styles.band} aria-label="건강검진 예약">
      <a
        className={styles.button}
        href={NAVER_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CalendarCheck size={22} aria-hidden="true" />
        건강검진 예약하기
      </a>
    </section>
  );
};

export default BookingCta;
