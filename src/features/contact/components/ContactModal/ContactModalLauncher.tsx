"use client";

import { ReactNode, useRef } from "react";

import { useContactModal } from "../../hooks/useContactModal";
import ContactModal from "./ContactModal";

interface ContactModalLauncherProps {
  className?: string;
  children?: ReactNode;
}

export default function ContactModalLauncher({
  className,
  children,
}: ContactModalLauncherProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { isOpen, openModal, closeModal } = useContactModal({ triggerRef });

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={className}
        onClick={openModal}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {children ?? "Contact"}
      </button>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
