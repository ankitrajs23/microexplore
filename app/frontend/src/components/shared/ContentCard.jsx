export const ContentCard = ({ 
  title, 
  description, 
  icon: Icon, 
  children,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`glass-card p-6 overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      data-testid={`content-card-${title?.toLowerCase().replace(/\s+/g, '-') || 'card'}`}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-3">
          <Icon className="w-6 h-6 text-[#0ea5e9]" strokeWidth={1.5} />
        </div>
      )}
      <h3 
        className="text-xl font-bold text-[#0f172a] mb-2"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {title}
      </h3>
      {description && (
        <p className="text-[#64748b] text-sm">
          {description}
        </p>
      )}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};
