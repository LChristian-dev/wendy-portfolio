"use client";

import { useEffect, useId, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import styles from "./ContactModal.module.scss";

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (options: {
      parentElement: HTMLElement;
      url: string;
    }) => void;
  };
};

const CALENDLY_URL =
  "https://calendly.com/vaservicewendy/30min?primary_color=fdc435";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const hasInitializedWidgetRef = useRef(false);

  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const widgetContainer = widgetContainerRef.current;

    if (!widgetContainer) {
      return;
    }

    const initializeWidget = () => {
      if (widgetContainer.childElementCount > 0) {
        hasInitializedWidgetRef.current = true;
        return true;
      }

      if (hasInitializedWidgetRef.current) {
        return true;
      }

      const calendly = (window as CalendlyWindow).Calendly;

      if (!calendly?.initInlineWidget) {
        return false;
      }

      calendly.initInlineWidget({
        parentElement: widgetContainer,
        url: CALENDLY_URL,
      });
      hasInitializedWidgetRef.current = true;

      return true;
    };

    if (initializeWidget()) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (initializeWidget()) {
        window.clearInterval(intervalId);
      }
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isOpen]);

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
                ref={widgetContainerRef}
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
              />
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
