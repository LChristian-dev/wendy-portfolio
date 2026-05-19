"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Script from "next/script";

import styles from "./ContactModal.module.scss";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div
        className={`${styles.modal} ${isOpen ? styles.modal_open : ""}`}
        aria-hidden={!isOpen}
      >
        <div
          className={styles.modal__overlay}
          onMouseDown={handleBackdropMouseDown}
        >
          <div
            className={styles.modal__dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.modal__close}
              onClick={onClose}
              aria-label="Close contact modal"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className={styles.modal__content}>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/vaservicewendy/30min?primary_color=fdc435"
              />
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
