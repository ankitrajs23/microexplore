import { Play } from 'lucide-react';

export const YouTubeEmbed = ({ videoId, title }) => {
  if (!videoId) {
    return (
      <div 
        className="relative bg-slate-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center"
        data-testid={`youtube-placeholder-${title?.toLowerCase().replace(/\s+/g, '-') || 'video'}`}
      >
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-3">
            <Play className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-500 text-sm font-medium">{title || 'Video Coming Soon'}</p>
          <p className="text-slate-400 text-xs mt-1">Placeholder for educational content</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="video-wrapper shadow-lg"
      data-testid={`youtube-embed-${videoId}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
