"use client"

export function ContactMap() {
    return (
        <section className="w-full h-[500px] bg-muted relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
                title="Africado Abuja Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15759.54471018335!2d7.4086111!3d9.1166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e750f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sGwarimpa%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
            ></iframe>

            {/* Overlay tag */}
            <div className="absolute top-8 right-8 z-10 bg-background/90 backdrop-blur border border-border p-4 shadow-xl max-w-xs hidden md:block animate-in fade-in slide-in-from-right duration-700">
                <p className="font-bold text-sm">Visit Our HQ</p>
                <p className="text-xs text-muted-foreground mt-1">
                    1, M.M. Alkali Street, CITEC Villa Estate, Gwarimpa, Abuja.
                </p>
            </div>
        </section>
    )
}
