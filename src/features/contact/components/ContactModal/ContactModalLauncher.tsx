"use client";

import { useRef } from "react";

import { useContactModal } from "../../hooks/useContactModal";
import ContactModal from "./ContactModal";

interface ContactModalLauncherProps {
  className?: string;
}

export default function ContactModalLauncher({
  className,
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
        Contact
      </button>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
