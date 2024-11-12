import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TimelineItem from "@/components/TimelineItem";

export default function TimelinePage() {
  const events = [
    {
      year: "2021",
      title: "Started University",
      description:
        "Began my journey at Western University studying Software Engineering.",
    },
    {
      year: "2022",
      title: "Internship at XYZ Corp",
      description: "Worked as a software development intern.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Timeline</h1>
        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-item mb-4">
              <div className="timeline-year text-xl font-semibold">
                {event.year}
              </div>
              <div className="timeline-content ml-4">
                <h2 className="text-lg font-bold">{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="timeline">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            year={event.year}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
