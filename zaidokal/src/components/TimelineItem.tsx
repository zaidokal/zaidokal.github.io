interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="timeline-item mb-4">
      <div className="timeline-year text-xl font-semibold">{year}</div>
      <div className="timeline-content ml-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
