"use client";

import { RefObject, useEffect, useRef, useState } from "react";

interface UseContactModalOptions {
  triggerRef?: RefObject<HTMLButtonElement | null>;
}

export function useContactModal({
  triggerRef,
}: UseContactModalOptions = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasOpenedRef = useRef(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      if (hasOpenedRef.current) {
        triggerRef?.current?.focus();
      }

      return;
    }

    hasOpenedRef.current = true;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const previousDocumentOverflow = documentElement.style.overflow;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [isOpen, triggerRef]);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
