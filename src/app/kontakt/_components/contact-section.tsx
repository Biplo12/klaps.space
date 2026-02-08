import React from "react";

type ContactSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  id,
  title,
  children,
}) => {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-[0.06em] leading-tight mb-8 md:mb-10">
        {title}
      </h2>

      <div className="flex flex-col gap-5 text-neutral-400 text-base md:text-lg leading-[1.8] tracking-[0.01em]">
        {children}
      </div>
    </section>
  );
};

export default ContactSection;
