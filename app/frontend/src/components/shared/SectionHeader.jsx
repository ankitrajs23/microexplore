export const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}) => {
  return (
    <div 
      className={`mb-8 ${centered ? 'text-center' : 'text-left'} ${className}`}
      data-testid={`section-header-${title?.toLowerCase().replace(/\s+/g, '-') || 'section'}`}
    >
      <h2 
        className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-3"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#64748b] text-base sm:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
